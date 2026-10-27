/**
 * The five real published projects supplied by the owner.
 * URLs are exact — do not alter them.
 * Descriptions reflect content verified on the published sites (Oct 2026).
 * `preview` images are real screenshots of the published sites
 * (public/images/projects/<id>.jpg).
 */
export const projects = [
  {
    id: 'laptop-service',
    url: 'https://laptop-service-weld.vercel.app/',
    title: { ar: 'منصة خدمة اللابتوب', en: 'Laptop Service Platform' },
    category: { ar: 'خدمات صيانة / منصة ويب', en: 'Maintenance Services / Web Platform' },
    description: {
      ar: 'موقع عربي لصيانة وإصلاح اللابتوب يقدّم الخدمات ويسمح للعملاء بتقديم طلبات صيانة والتواصل المباشر.',
      en: 'An Arabic laptop repair website presenting maintenance services, with a customer maintenance-request journey and direct contact.',
    },
    highlights: {
      ar: ['تقديم طلب صيانة', 'عرض الخدمات', 'تواصل مباشر مع العملاء'],
      en: ['Maintenance request journey', 'Service information', 'Direct customer contact'],
    },
    preview: 'images/projects/laptop-service.jpg',
  },
  {
    id: 'yas-corporate',
    url: 'https://yas-portfolio-eta.vercel.app/',
    title: { ar: 'ملف ياس التعريفي', en: 'YAS Corporate Portfolio' },
    category: { ar: 'موقع شركات / حلول تقنية', en: 'Corporate Website / Technology Solutions' },
    description: {
      ar: 'موقع مؤسسي لعرض حلول ومنتجات وخدمات تقنية لشركة يقدّم تعريفًا بالشركة وأعمالها ووسائل التواصل معها.',
      en: 'A corporate website presenting a technology company — solutions, products, services, and contact entry points.',
    },
    highlights: {
      ar: ['هوية مؤسسية', 'عرض حلول ومنتجات', 'تعدد اللغات'],
      en: ['Corporate identity', 'Solutions and products presentation', 'Multilingual layout'],
    },
    preview: 'images/projects/yas-corporate.jpg',
  },
  {
    id: 'yas-help-desk',
    url: 'https://yas-help-desk.vercel.app/',
    title: { ar: 'مكتب المساعدة ياس', en: 'YAS Help Desk' },
    category: { ar: 'دعم فني / مكتب مساعدة', en: 'Customer Support / Help Desk' },
    description: {
      ar: 'بوابة دعم فني ثنائية اللغة تنظّم طلبات المساعدة والاستعلام عن الضمان مع آلية لتتبّع الطلبات.',
      en: 'A bilingual technical support portal organizing help requests and warranty inquiries, with request-tracking flows.',
    },
    highlights: {
      ar: ['تقديم طلبات دعم', 'تتبّع الطلبات', 'أسئلة شائعة ومعلومات دعم'],
      en: ['Support request submission', 'Request tracking', 'Support information and FAQ'],
    },
    preview: 'images/projects/yas-help-desk.jpg',
  },
  {
    id: 'reemora',
    url: 'https://reemora7.vercel.app/',
    title: { ar: 'ريمورا', en: 'Reemora' },
    category: { ar: 'خدمات / مناسبات', en: 'Service Business / Events' },
    description: {
      ar: 'موقع علامة تجارية لمنسق مناسبات وخدمات حناء، يشمل الخدمات ومعرض أعمال ونموذج حجز واستفسارات شائعة.',
      en: 'A branded website for an events-coordination and henna services business — services, gallery, booking form, and FAQ.',
    },
    highlights: {
      ar: ['موقع علامة تجارية مخصص', 'نموذج حجز', 'معرض أعمال'],
      en: ['Dedicated branded website', 'Booking inquiry form', 'Work gallery'],
    },
    preview: 'images/projects/reemora.jpg',
  },
  {
    id: 'nada-dashboard',
    url: 'https://nada-teacher-dashboard.vercel.app/',
    title: { ar: 'منصة المعلمة ندى', en: 'Nada Teacher Platform' },
    category: { ar: 'تعليم / منصة معلمين', en: 'Education / Teacher Platform' },
    description: {
      ar: 'موقع تعليمي لمعلمة علوم يشمل بحث الطلاب، تعريفًا بالخدمات والمحتوى، ووسائل تواصل مباشرة.',
      en: 'An education website for a science teacher with student search, service and content information, and direct contact.',
    },
    highlights: {
      ar: ['بحث الطلاب', 'معلومات الخدمات التعليمية', 'تواصل مباشر'],
      en: ['Student search', 'Educational service information', 'Direct contact'],
    },
    preview: 'images/projects/nada-dashboard.jpg',
  },
]
