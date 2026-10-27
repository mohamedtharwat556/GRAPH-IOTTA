import { services } from '../data/services'
import { processSteps } from '../data/process'
import { projects } from '../data/projects'

/**
 * On-page assistant: bilingual intent matching over the studio's real data
 * (services, process, portfolio, quotation factors). No backend, no invented
 * facts — anything beyond the known data routes to a human on WhatsApp.
 */

const has = (text, words) => words.some((w) => text.includes(w))

function matchIntent(text) {
  const t = text.toLowerCase().trim()

  if (has(t, ['هاي', 'مرحبا', 'مرحباً', 'أهل', 'اهل', 'السلام', 'صباح', 'مساء', 'hello', 'hi ', 'hi!', 'hey', 'good morning', 'good evening']) || t === 'hi' || t === 'سلام') return 'greeting'
  if (has(t, ['سعر', 'اسعار', 'أسعار', 'تكلفة', 'التسعير', 'باكام', 'بكام', 'ميزانية', 'عرض', 'quote', 'price', 'cost', 'budget', 'how much'])) return 'pricing'
  if (has(t, ['خدم', 'بتعمل', 'بتقدم', 'شغل', 'موقع', 'تطبيق', 'متجر', 'مواقع', 'service', 'website', 'app', 'develop', 'what do you', 'تطوي'])) return 'services'
  if (has(t, ['أعمال', 'اعمال', 'مشروع', 'مشاريع', 'نماذج', 'work', 'portfolio', 'project', 'case'])) return 'portfolio'
  if (has(t, ['خطوة', 'خطوات', 'آلية', 'الية', 'ازاي', 'إزاي', 'بتشتغلوا', 'process', 'how does', 'workflow', 'طريقة'])) return 'process'
  if (has(t, ['استضافة', 'دومين', 'نطاق', 'hosting', 'domain', 'vercel'])) return 'hosting'
  if (has(t, ['صيانة', 'دعم', 'بعد الإطلاق', 'maintenance', 'support', 'update'])) return 'maintenance'
  if (has(t, ['واتساب', 'اتصال', 'أتصل', 'بشر', 'فريق', 'كلم', 'contact', 'whatsapp', 'call', 'human', 'talk to'])) return 'human'
  if (has(t, ['انتو', 'أنتو', 'مين', 'عن', 'شركة', 'experience', 'who are', 'about', 'graph iotta', 'iotta'])) return 'about'
  return null
}

const responses = {
  ar: {
    greeting: 'أهلًا بيك!\nأنا المساعد الذكي لـ GRAPH IOTTA. تحب تعرف إيه عن خدماتنا، الأسعار، ولا شغلنا السابق؟',
    services: () =>
      'بنقدّم 6 خدمات أساسية:\n' +
      services.map((s, i) => `${i + 1}. ${s.title.ar} — ${s.body.ar}`).join('\n') +
      '\n\nعايز تفاصيل أكتر عن خدمة معينة؟',
    pricing: () =>
      'مفيش أسعار ثابتة عندنا — كل مشروع ليه عرض سعر خاص بيه حسب:\n' +
      '• النطاق والتعقيد\n• الميزات المطلوبة\n• متطلبات التصميم\n• التكاملات\n• الجدول الزمني\n• الاستضافة والدعم\n\nتحب نعملك عرض سعر لمشروعك؟ دوس على زر واتساب تحت.',
    portfolio: () =>
      'شوفت 5 مشاريع منشورة فعليًا، منها:\n' +
      projects.slice(0, 3).map((p) => `• ${p.title.ar}`).join('\n') +
      '\n\nتقدر تشوفها كاملة في قسم «أعمالنا» في الصفحة — كلها روابط شغالة.',
    process: () =>
      'شغلنا بيمر بـ 6 مراحل:\n' +
      processSteps.map((s) => `${s.num}. ${s.title.ar}`).join('\n') +
      '\n\nمن أول الفكرة لحد ما المشروع يطلع نوره — والتطوير المستمر بعد الإطلاق حسب الاتفاق.',
    hosting: 'أيوه، بنناقش الاستضافة وربط الدومين كجزء من المشروع أو كمهمة مستقلة لوحدها.',
    maintenance: 'الصيانة والتحسينات متوفرة بعد الإطلاق — حسب النطاق المتفق عليه في الاتفاق، مش تلقائية في كل مشروع.',
    human: 'تمام! دوس على زر «اتكلم مع فريق بشري» تحت وهيفتحلك واتساب مباشرة — بنرد بالعربي والإنجليزي.',
    about: 'GRAPH IOTTA استوديو حلول رقمية وتطوير برمجيات — خبرة أكتر من 3 سنوات، بنخدم عملاء في مصر وحول العالم، وبنحوّل الأفكار لواقع رقمي.',
    fallback: 'سؤال حلو! عشان أديك إجابة مضمونة، الأفضل تتكلم مع فريقنا مباشرة على واتساب — دوس الزر تحت.',
  },
  en: {
    greeting: "Hi there!\nI'm the GRAPH IOTTA smart assistant. Want to know about our services, pricing, or past work?",
    services: () =>
      'We offer 6 core services:\n' +
      services.map((s, i) => `${i + 1}. ${s.title.en} — ${s.body.en}`).join('\n') +
      '\n\nWant details on a specific service?',
    pricing: () =>
      'We have no fixed prices — every project gets its own quote based on:\n' +
      '• Scope and complexity\n• Required features\n• Design requirements\n• Integrations\n• Timeline\n• Hosting and support\n\nWant a quote for your project? Hit the WhatsApp button below.',
    portfolio: () =>
      'Five published projects you can open right now, including:\n' +
      projects.slice(0, 3).map((p) => `• ${p.title.en}`).join('\n') +
      '\n\nSee them all in the "Work" section — every link is live.',
    process: () =>
      'Our work runs in 6 stages:\n' +
      processSteps.map((s) => `${s.num}. ${s.title.en}`).join('\n') +
      '\n\nFrom the first idea to launch day — plus continued development after launch, per agreement.',
    hosting: 'Yes — hosting and domain setup can be handled as part of a project or as a standalone task.',
    maintenance: 'Maintenance and improvements are available after launch, subject to the agreed scope — not automatic with every project.',
    human: 'Sure! Press "Talk to a human" below and WhatsApp opens directly — we reply in Arabic or English.',
    about: 'GRAPH IOTTA is a digital solutions and software development studio — 3+ years of experience, serving clients in Egypt and worldwide, turning ideas into digital reality.',
    fallback: 'Good question! For a guaranteed answer, best to talk to our team directly on WhatsApp — press the button below.',
  },
}

export function assistantReply(text, lang) {
  const intent = matchIntent(text)
  const table = responses[lang] || responses.en
  if (!intent) return { intent: null, text: table.fallback }
  const entry = table[intent]
  return { intent, text: typeof entry === 'function' ? entry() : entry }
}

export function welcomeMessage(lang) {
  return (lang === 'ar' ? responses.ar : responses.en).greeting
}

export function quickReplies(lang) {
  return lang === 'ar'
    ? ['خدماتكم إيه؟', 'الأسعار عاملة إزاي؟', 'شوفتوا مشاريع قبل كده؟', 'عايز أتكلم مع حد']
    : ['What do you offer?', 'How does pricing work?', 'Show me your work', 'I want to talk to a human']
}

/**
 * Contextual follow-up questions shown after a bot reply, so the assistant
 * reads like a conversation rather than a lookup table. Keyed by intent.
 */
const followUps = {
  ar: {
    greeting: ['خدماتكم إيه؟', 'شوفتوا مشاريع قبل كده؟'],
    services: ['الأسعار عاملة إزاي؟', 'خطوات الشغل إزاي؟', 'عايز أتكلم مع حد'],
    pricing: ['خدماتكم إيه؟', 'عايز أتكلم مع حد'],
    portfolio: ['خطوات الشغل إزاي؟', 'عايز أتكلم مع حد'],
    process: ['شوفتوا مشاريع قبل كده؟', 'الأسعار عاملة إزاي؟'],
    hosting: ['الأسعار عاملة إزاي؟', 'عايز أتكلم مع حد'],
    maintenance: ['خطوات الشغل إزاي؟', 'عايز أتكلم مع حد'],
    human: [],
    about: ['خدماتكم إيه؟', 'شوفتوا مشاريع قبل كده؟'],
    fallback: ['عايز أتكلم مع حد'],
  },
  en: {
    greeting: ['What do you offer?', 'Show me your work'],
    services: ['How does pricing work?', 'What are your steps?', 'I want to talk to a human'],
    pricing: ['What do you offer?', 'I want to talk to a human'],
    portfolio: ['What are your steps?', 'I want to talk to a human'],
    process: ['Show me your work', 'How does pricing work?'],
    hosting: ['How does pricing work?', 'I want to talk to a human'],
    maintenance: ['What are your steps?', 'I want to talk to a human'],
    human: [],
    about: ['What do you offer?', 'Show me your work'],
    fallback: ['I want to talk to a human'],
  },
}

export function followUpQuestions(intent, lang) {
  const table = followUps[lang] || followUps.en
  return (intent && table[intent] ? table[intent] : []).slice(0, 3)
}
