import { WA_BASE } from '../config/siteConfig'

export function whatsappUrl(message) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`
}

export function heroInquiryMessage(lang) {
  return lang === 'ar'
    ? 'مرحبًا GRAPH IOTTA، أرغب في مناقشة مشروع رقمي جديد. نوع المشروع: غير محدد بعد. التفاصيل: أود استكشاف الخيارات المناسبة لمشروعي. أرجو التواصل معي لمناقشة المتطلبات وعرض السعر.'
    : 'Hello GRAPH IOTTA, I would like to discuss a new digital project. Project type: not decided yet. Details: I would like to explore the right options for my project. Please contact me to discuss requirements and a quotation.'
}

export function serviceInquiryMessage(lang, serviceTitle) {
  return lang === 'ar'
    ? `مرحبًا GRAPH IOTTA، أريد مناقشة مشروع رقمي جديد. نوع المشروع: ${serviceTitle}. أرجو التواصل معي لمناقشة المتطلبات وعرض السعر.`
    : `Hello GRAPH IOTTA, I would like to discuss a new digital project. Project type: ${serviceTitle}. Please contact me to discuss the requirements and quotation.`
}

export function projectInquiryMessage(lang, projectTitle) {
  return lang === 'ar'
    ? `مرحبًا GRAPH IOTTA، شاهدت مشروع «${projectTitle}» في أعمالكم وأود مناقشة مشروع مشابه. أرجو التواصل معي لمناقشة المتطلبات وعرض السعر.`
    : `Hello GRAPH IOTTA, I saw "${projectTitle}" in your work and would like to discuss a similar project. Please contact me to discuss requirements and a quotation.`
}

export function formInquiryMessage(lang, form) {
  const lines = {
    ar: [
      'مرحبًا GRAPH IOTTA، أريد مناقشة مشروع رقمي جديد.',
      `الاسم: ${form.name}`,
      `وسيلة التواصل المفضلة: ${form.contact}`,
      `نوع المشروع: ${form.category}`,
      `تفاصيل المشروع: ${form.description}`,
      form.budget ? `الميزانية التقريبية: ${form.budget}` : null,
      form.timeline ? `الجدول الزمني المفضل: ${form.timeline}` : null,
      'أرجو التواصل معي لمناقشة المتطلبات وعرض السعر.',
    ],
    en: [
      'Hello GRAPH IOTTA, I would like to discuss a new digital project.',
      `Name: ${form.name}`,
      `Preferred contact: ${form.contact}`,
      `Project type: ${form.category}`,
      `Project details: ${form.description}`,
      form.budget ? `Approximate budget: ${form.budget}` : null,
      form.timeline ? `Preferred timeline: ${form.timeline}` : null,
      'Please contact me to discuss the requirements and quotation.',
    ],
  }
  return lines[lang].filter(Boolean).join('\n')
}

export function quoteCtaMessage(lang) {
  return lang === 'ar'
    ? 'مرحبًا GRAPH IOTTA، أود طلب عرض سعر لمشروع رقمي. نوع المشروع: قيد النقاش. أرجو التواصل معي لمناقشة المتطلبات وعرض السعر.'
    : 'Hello GRAPH IOTTA, I would like to request a project quote. Project type: to be discussed. Please contact me to discuss requirements and quotation.'
}

export function builderMessage(lang, { type, features, timeline, notes }) {
  const join = (list) => list.join(lang === 'ar' ? '، ' : ', ')
  if (lang === 'ar') {
    const lines = [
      'مرحبًا GRAPH IOTTA، بنيت طلب مشروع باستخدام أداة «صمّم مشروعك»:',
      `• نوع المشروع: ${type || 'غير محدد'}`,
      `• الميزات المطلوبة: ${features.length ? join(features) : 'غير محددة'}`,
      `• الموعد المفضل: ${timeline || 'غير محدد'}`,
    ]
    if (notes.trim()) lines.push(`• ملاحظات: ${notes.trim()}`)
    lines.push('أرجو التواصل معي لمناقشة التفاصيل وعرض السعر.')
    return lines.join('\n')
  }
  const lines = [
    'Hello GRAPH IOTTA, I built a project request using the "Project Builder":',
    `• Project type: ${type || 'not decided'}`,
    `• Requested features: ${features.length ? join(features) : 'not specified'}`,
    `• Preferred timing: ${timeline || 'not specified'}`,
  ]
  if (notes.trim()) lines.push(`• Notes: ${notes.trim()}`)
  lines.push('Please contact me to discuss details and a quotation.')
  return lines.join('\n')
}
