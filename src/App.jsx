import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SiteBackground from './components/SiteBackground'
import Splash from './components/Splash'
import ChatWidget from './components/chat/ChatWidget'
import MobileWhatsAppBar from './components/MobileWhatsAppBar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Process from './sections/Process'
import WhyUs from './sections/WhyUs'
import Quote from './sections/Quote'
import Builder from './sections/Builder'
import Faq from './sections/Faq'
import Contact from './sections/Contact'

function SkipLink() {
  const { t } = useLanguage()
  return (
    <a className="skip-link" href="#home">
      {t.skipLink}
    </a>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Splash />
      <SiteBackground />
      <SkipLink />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <WhyUs />
        <Quote />
        <Builder />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <MobileWhatsAppBar />
    </LanguageProvider>
  )
}
