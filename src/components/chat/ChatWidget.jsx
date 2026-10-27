import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useReducedMotion } from '../../hooks/useEnvironment'
import { assistantReply, welcomeMessage, quickReplies, followUpQuestions } from '../../utils/chatBrain'
import { whatsappUrl, heroInquiryMessage } from '../../utils/whatsapp'
import { IconWhatsApp } from '../icons'
import AvatarOrb from './AvatarOrb'

let msgId = 0

export default function ChatWidget() {
  const { t, lang } = useLanguage()
  const c = t.chat
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [thinking, setThinking] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [started, setStarted] = useState(false)
  const inputRef = useRef(null)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (open && !started) {
      const full = welcomeMessage(lang)
      setMessages([
        reduced
          ? { id: ++msgId, role: 'bot', text: full, intent: 'greeting' }
          : { id: ++msgId, role: 'bot', text: '', full, intent: 'greeting' },
      ])
      setStarted(true)
    }
  }, [open, started, lang, reduced])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, thinking])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const last = messages[messages.length - 1]
  const isTyping =
    last?.role === 'bot' && last.full != null && last.text.length < last.full.length

  useEffect(() => {
    if (!isTyping) return undefined
    const id = last.id
    const timer = setInterval(() => {
      setMessages((m) =>
        m.map((msg) => {
          if (msg.id !== id || msg.full == null) return msg
          if (msg.text.length >= msg.full.length) return { ...msg, full: null }
          const stepChars = Math.max(2, Math.ceil(msg.full.length / 55))
          return { ...msg, text: msg.full.slice(0, msg.text.length + stepChars) }
        }),
      )
    }, 28)
    return () => clearInterval(timer)
  }, [isTyping, last?.id])

  const send = (raw) => {
    const text = (raw ?? input).trim()
    if (!text) return
    setMessages((m) => [...m, { id: ++msgId, role: 'user', text }])
    setInput('')
    setThinking(true)
    setTimeout(() => {
      const reply = assistantReply(text, lang)
      setMessages((m) => [
        ...m,
        reduced
          ? { id: ++msgId, role: 'bot', text: reply.text, intent: reply.intent }
          : { id: ++msgId, role: 'bot', text: '', full: reply.text, intent: reply.intent },
      ])
      setThinking(false)
    }, 650 + Math.random() * 450)
  }

  const chips =
    last?.role === 'bot' && last.intent === 'greeting' && messages.length <= 1
      ? quickReplies(lang)
      : followUpQuestions(last?.intent, lang)
  const showChips = open && !thinking && !isTyping && chips.length > 0

  return (
    <div className={`chat-root ${open ? 'is-open' : ''}`}>
      {open && (
        <section
          className="chat-panel"
          role="dialog"
          aria-label={c.title}
        >
          <header className="chat-head">
            <span className="chat-head-avatar">
              <AvatarOrb size={44} thinking={thinking} awake />
            </span>
            <div className="chat-head-info">
              <h3>{c.title}</h3>
              <p className="chat-status">
                <span className="status-dot" aria-hidden="true" />
                {c.subtitle}
              </p>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label={c.close}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div className="chat-body" ref={bodyRef} aria-live="polite" aria-busy={isTyping}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chat-msg ${m.role === 'bot' ? 'is-bot' : 'is-user'} ${
                  m.full != null && m.text.length < m.full.length ? 'is-typing' : ''
                }`}
              >
                {m.text}
              </div>
            ))}
            {thinking && (
              <div className="chat-msg is-bot typing" aria-hidden="true">
                <span /><span /><span />
              </div>
            )}
            {showChips && (
              <div className="chat-chips">
                {chips.map((chip) => (
                  <button key={chip} type="button" className="chip" onClick={() => send(chip)}>
                    {chip}
                  </button>
                ))}
              </div>
            )}
          </div>

          <footer className="chat-foot">
            <a
              className="btn btn-primary btn-sm chat-handoff"
              href={whatsappUrl(heroInquiryMessage(lang))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp width={15} height={15} />
              {c.handoff}
            </a>
            <form
              className="chat-input-row"
              onSubmit={(e) => {
                e.preventDefault()
                send()
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={c.placeholder}
                aria-label={c.placeholder}
              />
              <button type="submit" className="chat-send" aria-label={c.send} disabled={!input.trim()}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l16-8-6 8 6 8-16-8z" />
                  <path d="M14 12H4" opacity="0" />
                </svg>
              </button>
            </form>
            <p className="chat-disclaimer">{c.disclaimer}</p>
          </footer>
        </section>
      )}

      <button
        type="button"
        className="chat-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={c.launcher}
      >
        <AvatarOrb size={46} thinking={false} awake={open || !started} />
        {!open && <span className="chat-ping" aria-hidden="true" />}
      </button>
    </div>
  )
}
