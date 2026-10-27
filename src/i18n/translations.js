/**
 * Centralized UI translation dictionary.
 * Arabic is the default language. Content data (services, projects, FAQ…)
 * lives in src/data/* with {ar, en} fields.
 */

export const defaultLang = 'ar'

export const strings = {
  ar: {
    dir: 'rtl',
    pageTitle: 'GRAPH IOTTA — من الفكرة إلى الواقع الرقمي',
    skipLink: 'الانتقال إلى المحتوى',
    splashTagline: 'بنقدّم أقوى الخدمات لراحة عملائنا',

    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      work: 'أعمالنا',
      about: 'من نحن',
      process: 'آلية العمل',
      contact: 'تواصل معنا',
      startProject: 'ابدأ مشروعك',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      languageToggle: 'تغيير اللغة إلى الإنجليزية',
    },

    hero: {
      eyebrow: 'استوديو حلول رقمية وتطوير برمجيات',
      headline: 'نحوّل أفكارك إلى واقع رقمي.',
      headlines: [
        'نحوّل أفكارك إلى واقع رقمي.',
        'مواقع وتطبيقات تُبنى على أهدافك.',
        'تصميم يلفت — وهندسة تُطمئن.',
        'من فكرة بسيطة إلى منتج كامل.',
        'شريكك الرقمي، من الفكرة إلى الإطلاق.',
      ],
      supporting:
        'نصمّم ونطوّر مواقع وتطبيقات وحلولًا رقمية مصممة حول أهداف مشروعك.',
      ctaPrimary: 'تحدث معنا على واتساب',
      ctaSecondary: 'شاهد أعمالنا',
      scroll: 'مرّر للأسفل',
      tagline: 'من الفكرة إلى الواقع الرقمي.',
    },

    mobileWa: {
      cta: 'تحدث معنا على واتساب',
      sub: 'رد سريع — مباشرة مع الفريق',
    },

    sections: {
      servicesKicker: 'الخدمات',
      servicesTitle: 'حلول رقمية مصممة لأهدافك',
      servicesSub:
        'من الموقع التعريفي إلى النظام التشغيلي الكامل — نبني ما يحتاجه مشروعك فعليًا.',
      workKicker: 'الأعمال',
      workTitle: 'مشاريع مختارة',
      workSub:
        'مواقع ومنصات حقيقية نشرناها. تصفّحها افتحًا في تبويب جديد.',
      aboutKicker: 'من نحن',
      aboutTitle: 'استوديو يحوّل الأفكار إلى منتجات رقمية مفيدة',
      aboutSub:
        'GRAPH IOTTA استوديو حلول رقمية وتطوير برمجيات يخدم العملاء في مصر وحول العالم، بخبرة تتجاوز ثلاث سنوات في المجال.',
      processKicker: 'آلية العمل',
      processTitle: 'من الفكرة إلى الإطلاق — بخطوات واضحة',
      processSub:
        'منهجية شفافة تحدد ما سيحدث ومتى، دون مفاجآت.',
      whyKicker: 'لماذا GRAPH IOTTA',
      whyTitle: 'أسلوب عمل مبني على الوضوح والدقة',
      quoteKicker: 'عرض سعر',
      quoteTitle: 'كل مشروع يبدأ بفهم متطلباته',
      quoteSub:
        'لا توجد أسعار ثابتة — يتحدد عرض السعر بناءً على نطاق المشروع وتعقيده ومتطلباته.',
      quoteFactorsTitle: 'يعتمد عرض السعر على:',
      faqKicker: 'أسئلة شائعة',
      faqTitle: 'إجابات صريحة، قبل أن تسأل',
      contactKicker: 'تواصل معنا',
      contactTitle: 'لنبدأ حديثًا عن مشروعك',
      contactSub:
        'املأ النموذج وسيفتح واتساب برسالتك جاهزة — أو تواصل مباشرة.',
    },

    services: {
      discussCta: 'ناقش هذه الخدمة',
    },

    work: {
      viewProject: 'افتح المشروع',
      inquireSimilar: 'أريد مشروعًا مشابهًا',
      externalNote: 'يفتح في تبويب جديد',
      screenshotNote: 'لقطة شاشة للمشروع المنشور',
      previewNote: 'لوحة معاينة تمثيلية — ليست لقطة شاشة',
      livePreview: 'معاينة حية',
      openTab: 'افتح في تبويب جديد',
      loadingPreview: 'جارٍ تحميل المعاينة...',
      framingNote: 'هذه المعاينة محمّلة مباشرة من الموقع المنشور. إذا لم يظهر المحتوى، فقد يمنع الموقع الإطارات المضمنة — افتحه في تبويب جديد.',
      closePreview: 'إغلاق المعاينة',
    },

    builder: {
      kicker: 'صمّم مشروعك',
      title: 'ارسم ملامح مشروعك في دقيقة',
      sub: 'اختر النوع والميزات والموعد — ونحوّل اختياراتك إلى طلب جاهز يصلنا مباشرة على واتساب.',
      steps: { type: 'نوع المشروع', features: 'الميزات', timeline: 'الموعد', review: 'الطلب جاهز' },
      progressLabel: 'خطوات بناء الطلب',
      typeHint: 'اختار الخدمة التي تحتاجها لمشروعك.',
      featuresHint: 'حدد الميزات التي تريدها — يمكنك اختيار أكثر من واحدة.',
      timelineHint: 'اختار الموعد التقريبي الذي يناسبك.',
      timelines: ['بأسرع وقت', 'خلال شهر', 'خلال شهر إلى ثلاثة أشهر', 'بدون موعد محدد'],
      featureOptions: [
        'تصميم مخصص',
        'متجاوب مع كل الشاشات',
        'لوحة تحكم',
        'تكامل واتساب',
        'دعم عربي وإنجليزي',
        'تحسين الظهور في جوجل',
        'متجر إلكتروني',
        'تقارير ولوحات بيانات',
      ],
      notesLabel: 'ملاحظات إضافية (اختياري)',
      notesPlaceholder: 'أي تفاصيل تحب أن نعرفها عن فكرتك.',
      next: 'التالي',
      back: 'رجوع',
      cardTitle: 'طلب مشروع جديد',
      fieldType: 'نوع المشروع',
      fieldFeatures: 'الميزات المطلوبة',
      fieldTimeline: 'الموعد المفضل',
      fieldNotes: 'ملاحظات',
      noneSelected: 'لم يتم التحديد بعد',
      editHint: 'راجع الطلب — يمكنك العودة وتعديل أي خطوة قبل الإرسال.',
      sendWa: 'أرسل الطلب على واتساب',
    },

    about: {
      experience: 'خبرة تتجاوز',
      experienceValue: '٣ سنوات',
      experienceNote: 'في مجال الحلول الرقمية وتطوير البرمجيات',
      markets: 'نخدم',
      marketsValue: 'مصر والعالم',
      marketsNote: 'عملاء محليون ودوليون',
      delivery: 'تسليم',
      deliveryValue: 'متجاوب',
      deliveryNote: 'تجربة سلسة على كل المقاسات والأجهزة',
      paragraphs: [
        'نبدأ دائمًا بالفهم: هدف مشروعك، جمهورك، والقيود الحقيقية التي يعمل ضمنها. ثم نصمّم ونطوّر حول هذه المعطيات — لا حول قوالب جاهزة.',
        'نهتم بالتصميم المدروس والهندسة الموثوقة والتواصل الواضح في كل مرحلة. كل حل التقني يُتخذ حسب حاجة المشروع نفسه.',
      ],
    },

    process: {
      stepsNote:
        'خطوات العمل تختلف تفاصيلها حسب نطاق كل مشروع واتفق عليها.',
    },

    quote: {
      cta: 'اطلب عرض سعر لمشروعك',
      builderCta: 'صمّم مشروعك الآن',
      factors: [
        'النطاق والتعقيد',
        'الميزات المطلوبة',
        'متطلبات التصميم',
        'التكاملات الخارجية',
        'الجدول الزمني',
        'متطلبات الاستضافة والدعم',
      ],
    },

    why: {
      items: [
        {
          title: 'حلول مبنية على متطلبات العمل',
          body: 'كل قرار — من بنية الصفحات إلى قاعدة البيانات — ينبع من أهداف مشروعك ومتطلباته الفعلية.',
        },
        {
          title: 'اهتمام بتجربة المستخدم',
          body: 'واجهات مفهومة وسهلة الاستخدام تُصمَّم لمن سيستعملها فعليًا، لا لمن بناها.',
        },
        {
          title: 'تنفيذ متجاوب',
          body: 'تجربة عمل واحدة على الهاتف والحاسوب اللوحي وسطح المكتب بكل مقاساتها.',
        },
        {
          title: 'نطاق تواصل واضح',
          body: 'نتفق على ما هو داخل المشروع وما هو خارجه قبل البدء — بشفافية ودون غموض.',
        },
        {
          title: 'قرارات تقنية حسب الحاجة',
          body: 'نختار الأدوات والتقنيات التي تناسب مشروعك، لا تلك التي نفضّلها شخصيًا.',
        },
        {
          title: 'عروض أسعار شفافة',
          body: 'يرتبط عرض السعر بالنطاق والمتطلبات المتفق عليها، ويُشرح تفصيله عند الطلب.',
        },
      ],
    },

    form: {
      name: 'الاسم',
      namePlaceholder: 'اسمك الكريم',
      contactMethod: 'وسيلة التواصل المفضلة',
      contactOptions: { whatsapp: 'واتساب', email: 'بريد إلكتروني', phone: 'مكالمة هاتفية' },
      contactPlaceholder: 'رقم واتساب أو بريدك الإلكتروني',
      category: 'نوع المشروع',
      categoryPlaceholder: 'اختر نوع المشروع',
      description: 'وصف المشروع',
      descriptionPlaceholder: 'اشرح فكرتك باختصار — الهدف، الجمهور، والميزات التي تريدها.',
      budget: 'الميزانية التقريبية (اختياري)',
      timeline: 'الجدول الزمني المفضل (اختياري)',
      submit: 'إرسال عبر واتساب',
      langField: 'لغة التواصل المفضلة',
      errors: {
        name: 'يرجى إدخال اسمك.',
        contact: 'يرجى إدخال وسيلة تواصل يمكن الوصول إليها.',
        category: 'يرجى اختيار نوع المشروع.',
        description: 'يرجى كتابة وصف مختصر للمشروع.',
      },
    },

    contact: {
      whatsappCta: 'تواصل مباشرة على واتساب',
      callCta: 'اتصل بنا',
      phoneLabel: 'الهاتف',
      facebookLabel: 'فيسبوك',
      replyNote: 'نرد على الرسائل بلغة العميل — عربيًا أو إنجليزيًا.',
    },

    footer: {
      blurb:
        'استوديو حلول رقمية وتطوير برمجيات — مواقع، تطبيقات، متاجر إلكترونية، وأنظمة إدارة. من الفكرة إلى الواقع الرقمي.',
      navigation: 'التنقل',
      services: 'الخدمات',
      contact: 'تواصل',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة',
      finalCta: 'هل لديك فكرة؟ لنحوّلها إلى واقع.',
      finalCtaButton: 'تحدث معنا',
    },

    wa: {
      generic: 'تواصل معنا',
    },

    chat: {
      launcher: 'افتح المساعد الذكي',
      title: 'مساعد GRAPH IOTTA',
      subtitle: 'متصل الآن — يرد فورًا',
      placeholder: 'اكتب سؤالك هنا…',
      send: 'إرسال',
      close: 'إغلاق المحادثة',
      handoff: 'اتكلم مع فريق بشري',
      disclaimer: 'مساعد آلي — للإجابات المؤكدة كلمنا على واتساب',
    },
  },

  en: {
    dir: 'ltr',
    pageTitle: 'GRAPH IOTTA — From Ideas to Digital Reality',
    skipLink: 'Skip to content',
    splashTagline: 'We deliver the strongest services for our clients\u2019 comfort',

    nav: {
      home: 'Home',
      services: 'Services',
      work: 'Work',
      about: 'About',
      process: 'Process',
      contact: 'Contact',
      startProject: 'Start a Project',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageToggle: 'Switch language to Arabic',
    },

    hero: {
      eyebrow: 'Digital solutions & software development studio',
      headline: 'We turn ambitious ideas into digital reality.',
      headlines: [
        'We turn ambitious ideas into digital reality.',
        'Websites and apps built around your goals.',
        'Design that draws eyes — engineering that earns trust.',
        'From a simple idea to a complete product.',
        'Your digital partner, from idea to launch.',
      ],
      supporting:
        'We design and build websites, applications, and digital solutions around your business goals.',
      ctaPrimary: 'Talk to us on WhatsApp',
      ctaSecondary: 'See our work',
      scroll: 'Scroll',
      tagline: 'From Ideas to Digital Reality.',
    },

    mobileWa: {
      cta: 'Chat with us on WhatsApp',
      sub: 'Fast reply, straight to the team',
    },

    sections: {
      servicesKicker: 'Services',
      servicesTitle: 'Digital solutions built around your goals',
      servicesSub:
        'From a single landing page to a full operational system — we build what your project actually needs.',
      workKicker: 'Work',
      workTitle: 'Selected Work',
      workSub:
        'Real websites and platforms we have published. Open any of them in a new tab.',
      aboutKicker: 'About',
      aboutTitle: 'A studio that turns ideas into useful digital products',
      aboutSub:
        'GRAPH IOTTA is a digital solutions and software development studio serving clients in Egypt and worldwide, with more than three years of experience in the field.',
      processKicker: 'Process',
      processTitle: 'From idea to launch — in clear steps',
      processSub:
        'A transparent method that defines what happens and when, with no surprises.',
      whyKicker: 'Why GRAPH IOTTA',
      whyTitle: 'A way of working built on clarity and precision',
      quoteKicker: 'Quotation',
      quoteTitle: 'Every project starts by understanding its requirements',
      quoteSub:
        'There are no fixed prices — a quotation depends on the project scope, complexity, and requirements.',
      quoteFactorsTitle: 'A quotation depends on:',
      faqKicker: 'FAQ',
      faqTitle: 'Straight answers, before you ask',
      contactKicker: 'Contact',
      contactTitle: "Let's start a conversation about your project",
      contactSub:
        'Fill the form and WhatsApp opens with your message ready — or reach out directly.',
    },

    services: {
      discussCta: 'Discuss this service',
    },

    work: {
      viewProject: 'View Project',
      inquireSimilar: 'I want something similar',
      externalNote: 'Opens in a new tab',
      screenshotNote: 'Screenshot of the published project',
      previewNote: 'Representative preview panel — not a screenshot',
      livePreview: 'Live Preview',
      openTab: 'Open in a new tab',
      loadingPreview: 'Loading preview...',
      framingNote: 'This preview loads directly from the published site. If nothing appears, the site may block embedded frames — open it in a new tab.',
      closePreview: 'Close preview',
    },

    builder: {
      kicker: 'Project Builder',
      title: 'Shape your project in one minute',
      sub: 'Pick the type, features, and timing — we turn your choices into a ready request that reaches us on WhatsApp.',
      steps: { type: 'Project type', features: 'Features', timeline: 'Timing', review: 'Review' },
      progressLabel: 'Builder steps',
      typeHint: 'Choose the service your project needs.',
      featuresHint: 'Select the features you want — pick as many as apply.',
      timelineHint: 'Choose the timing that suits you.',
      timelines: ['As soon as possible', 'Within a month', 'One to three months', 'No fixed deadline'],
      featureOptions: [
        'Custom design',
        'Responsive on all screens',
        'Admin dashboard',
        'WhatsApp integration',
        'Arabic & English support',
        'Search-engine visibility',
        'Online store',
        'Reports & dashboards',
      ],
      notesLabel: 'Additional notes (optional)',
      notesPlaceholder: 'Anything you would like us to know about your idea.',
      next: 'Next',
      back: 'Back',
      cardTitle: 'New project request',
      fieldType: 'Project type',
      fieldFeatures: 'Requested features',
      fieldTimeline: 'Preferred timing',
      fieldNotes: 'Notes',
      noneSelected: 'Not selected yet',
      editHint: 'Review the request — you can go back and change any step before sending.',
      sendWa: 'Send request on WhatsApp',
    },

    about: {
      experience: 'Experience of over',
      experienceValue: '3 years',
      experienceNote: 'In digital solutions and software development',
      markets: 'Serving',
      marketsValue: 'Egypt & the world',
      marketsNote: 'Local and international clients',
      delivery: 'Delivery',
      deliveryValue: 'Responsive',
      deliveryNote: 'A smooth experience on every size and device',
      paragraphs: [
        'We always start by understanding: your project goal, your audience, and the real constraints it operates within. We then design and build around those facts — not around ready-made templates.',
        'We care about thoughtful interface design, reliable engineering, and clear communication at every stage. Every technical decision is made to fit the project itself.',
      ],
    },

    process: {
      stepsNote: 'Process details vary with each project scope and agreement.',
    },

    quote: {
      cta: 'Request a Project Quote',
      builderCta: 'Build your project now',
      factors: [
        'Scope and complexity',
        'Required features',
        'Design requirements',
        'External integrations',
        'Timeline',
        'Hosting and support requirements',
      ],
    },

    why: {
      items: [
        {
          title: 'Solutions built around business requirements',
          body: 'Every decision — from page structure to database — comes from your goals and actual project requirements.',
        },
        {
          title: 'Attention to user experience',
          body: 'Clear, easy interfaces designed for the people who will actually use them, not for whoever built them.',
        },
        {
          title: 'Responsive implementation',
          body: 'One working experience across phone, tablet, and desktop at every screen size.',
        },
        {
          title: 'Clear scope and communication',
          body: "We agree on what is inside the project and what isn't before starting — transparently, with no ambiguity.",
        },
        {
          title: 'Tailored technical decisions',
          body: 'We choose the tools and technologies that fit your project, not the ones we personally prefer.',
        },
        {
          title: 'Transparent project quotations',
          body: 'A quote is tied to the agreed scope and requirements, with its breakdown explained on request.',
        },
      ],
    },

    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      contactMethod: 'Preferred contact method',
      contactOptions: { whatsapp: 'WhatsApp', email: 'Email', phone: 'Phone call' },
      contactPlaceholder: 'WhatsApp number or email address',
      category: 'Project category',
      categoryPlaceholder: 'Select a project type',
      description: 'Project description',
      descriptionPlaceholder:
        'Briefly explain your idea — the goal, the audience, and the features you want.',
      budget: 'Approximate budget (optional)',
      timeline: 'Preferred timeline (optional)',
      submit: 'Send via WhatsApp',
      langField: 'Preferred language of reply',
      errors: {
        name: 'Please enter your name.',
        contact: 'Please provide a reachable contact method.',
        category: 'Please select a project type.',
        description: 'Please write a short project description.',
      },
    },

    contact: {
      whatsappCta: 'Message us directly on WhatsApp',
      callCta: 'Call us',
      phoneLabel: 'Phone',
      facebookLabel: 'Facebook',
      replyNote: 'We reply in the client language — Arabic or English.',
    },

    footer: {
      blurb:
        'A digital solutions and software development studio — websites, apps, online stores, and management systems. From Ideas to Digital Reality.',
      navigation: 'Navigation',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow us',
      rights: 'All rights reserved',
      finalCta: 'Got an idea? Lets turn it into reality.',
      finalCtaButton: 'Talk to us',
      // kept plain ASCII fallback handled in component
    },

    wa: {
      generic: 'Contact us',
    },

    chat: {
      launcher: 'Open the smart assistant',
      title: 'GRAPH IOTTA Assistant',
      subtitle: 'Online now — instant replies',
      placeholder: 'Type your question…',
      send: 'Send',
      close: 'Close chat',
      handoff: 'Talk to a human',
      disclaimer: 'Automated assistant — for guaranteed answers, reach us on WhatsApp',
    },
  },
}
