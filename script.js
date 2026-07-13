/* ===================================================================
   NOVACUISI — LANDING PAGE SCRIPT
   Vanilla JS, no dependencies.
   =================================================================== */
(function () {
  "use strict";

  /* =================================================================
     0. CONFIG — edit these three values for your store
     ================================================================= */
  const CONFIG = {
    // Paste the URL you get after deploying the Google Apps Script as a Web App (see README).
    GOOGLE_SHEETS_URL: "https://script.google.com/macros/s/AKfycbz-N9-PSByTzMgoGLsSmFv9-d9XD6gpBvdEBvimOQPOYLJ-VPFtvz1F8JNDLtNdwI0M/exec",

    // Your WhatsApp business number in international format, digits only (e.g. Morocco: 2126XXXXXXXX).
    WHATSAPP_NUMBER: "2126XXXXXXXX",

    // Your Meta Pixel ID from Events Manager. Leave as-is to skip pixel tracking.
    FACEBOOK_PIXEL_ID: "YOUR_PIXEL_ID",
  };

  /* =================================================================
     1. TRANSLATIONS (FR / AR)
     ================================================================= */
  const I18N = {
    fr: {
      "nav.benefits": "Avantages",
      "nav.how": "Comment ça marche",
      "nav.reviews": "Avis",
      "nav.faq": "FAQ",
      "nav.cta": "Commander",

      "hero.eyebrow": "NovaCuisi — Innovation culinaire",
      "hero.title": "La fraîcheur,<br>scellée en une seconde.",
      "hero.subtitle": "La mini scelleuse qui garde vos aliments frais jusqu'à 3x plus longtemps. Simple, rapide, portable.",
      "hero.price": "195 DH",
      "hero.priceBadge": "-20%",
      "hero.cta": "Commander Maintenant",
      "hero.ctaSecondary": "Voir comment ça marche",
      "hero.trust1": "Paiement à la livraison",
      "hero.trust2": "Livraison partout au Maroc",
      "hero.trust3": "Satisfait ou remboursé",
      "hero.stock": "Stock disponible",

      "trustbar.cod": "Paiement à la livraison",
      "trustbar.delivery": "Livraison 48–72h",
      "trustbar.secure": "Commande sécurisée",
      "trustbar.guarantee": "Satisfait ou remboursé",

      "benefits.eyebrow": "Pourquoi NovaCuisi",
      "benefits.title": "Pensée pour votre cuisine.<br>Conçue pour durer.",
      "benefits.item1.title": "Fraîcheur prolongée",
      "benefits.item1.desc": "Garde vos aliments frais jusqu'à 3x plus longtemps qu'un sac ouvert.",
      "benefits.item2.title": "Scellage en 3 secondes",
      "benefits.item2.desc": "Fermeture hermétique instantanée, à chaque utilisation.",
      "benefits.item3.title": "Rechargeable USB-C",
      "benefits.item3.desc": "Une charge complète tient des semaines d'utilisation quotidienne.",
      "benefits.item4.title": "Ultra portable",
      "benefits.item4.desc": "Se glisse dans un tiroir, un sac ou une valise sans effort.",
      "benefits.item5.title": "Universelle",
      "benefits.item5.desc": "Chips, biscuits, surgelés, épices : elle scelle presque tous les sacs.",
      "benefits.item6.title": "Un seul bouton",
      "benefits.item6.desc": "Aucune notice nécessaire. Toute la famille sait s'en servir.",

      "comparison.eyebrow": "La différence NovaCuisi",
      "comparison.title": "Avant / Après",
      "comparison.beforeTag": "Sans NovaCuisi",
      "comparison.before1": "Sacs qui prennent l'humidité",
      "comparison.before2": "Chips et biscuits ramollis",
      "comparison.before3": "Nourriture gaspillée chaque semaine",
      "comparison.before4": "Pinces et élastiques qui ne tiennent pas",
      "comparison.afterTag": "Avec NovaCuisi",
      "comparison.after1": "Fraîcheur scellée hermétiquement",
      "comparison.after2": "Zéro gaspillage alimentaire",
      "comparison.after3": "Sacs et placards organisés",
      "comparison.after4": "Tranquillité d'esprit au quotidien",

      "how.eyebrow": "Simplicité totale",
      "how.title": "Trois étapes. Rien d'autre.",
      "how.step1.title": "Placez le sac",
      "how.step1.desc": "Positionnez l'ouverture du sac dans la scelleuse.",
      "how.step2.title": "Appuyez sur le bouton",
      "how.step2.desc": "Le scellement se fait tout seul, en 3 secondes.",
      "how.step3.title": "C'est scellé",
      "how.step3.desc": "Vos aliments restent frais, protégés hermétiquement.",

      "video.eyebrow": "En mouvement",
      "video.title": "Voyez-la en action.",

      "features.eyebrow": "Caractéristiques",
      "features.title": "Pensée dans les moindres détails.",
      "features.f1.title": "Format compact",
      "features.f1.desc": "Tient dans une main, se range n'importe où.",
      "features.f2.title": "USB-C",
      "features.f2.desc": "Charge rapide, câble inclus.",
      "features.f3.title": "Scellage hermétique",
      "features.f3.desc": "Zéro air, zéro humidité.",
      "features.f4.title": "Multi-usage",
      "features.f4.desc": "Cuisine, voyage, congélateur.",
      "features.f5.title": "Arrêt automatique",
      "features.f5.desc": "Sécurisée pour toute la famille.",
      "features.f6.title": "Finition premium",
      "features.f6.desc": "Design épuré, noir mat.",

      "why.eyebrow": "Pourquoi nous faire confiance",
      "why.title": "Un service pensé pour le Maroc.",
      "why.lead": "NovaCuisi n'est pas une simple boutique en ligne. C'est un service pensé pour vous simplifier la vie, du clic à votre porte.",
      "why.item1.title": "Qualité contrôlée",
      "why.item1.desc": "Chaque produit est vérifié avant expédition.",
      "why.item2.title": "Livraison rapide",
      "why.item2.desc": "48 à 72h, partout au Maroc.",
      "why.item3.title": "Paiement en confiance",
      "why.item3.desc": "Réglez uniquement à la réception de votre colis.",
      "why.item4.title": "Support réactif",
      "why.item4.desc": "Une question ? Nous répondons rapidement, 7j/7.",

      "stats.clients": "Clients satisfaits",
      "stats.recommend": "recommandent NovaCuisi",
      "stats.delivery": "Livraison partout au Maroc",
      "stats.codLabel": "À la livraison",
      "stats.payment": "Mode de paiement",

      "reviews.eyebrow": "Témoignages",
      "reviews.title": "Ce que nos clients en disent.",
      "reviews.verified": "Achat vérifié",
      "reviews.r1": "Je ne pensais pas qu'un si petit appareil ferait autant de différence. Mes chips restent croustillantes une semaine après ouverture.",
      "reviews.r2": "Livraison en 2 jours à Rabat, paiement à la réception comme promis. L'appareil est simple et vraiment efficace.",
      "reviews.r3": "Le design est magnifique, se recharge vite, et j'ai enfin arrêté de jeter des sacs de fruits secs à moitié ouverts.",
      "reviews.r4": "J'ai pris le pack de 3 pour toute la famille. Facile à utiliser, même ma mère l'adopte tous les jours.",
      "reviews.r5": "Commande simple, service client très réactif sur WhatsApp. Le produit tient toutes ses promesses.",

      "faq.eyebrow": "Questions fréquentes",
      "faq.title": "Tout ce qu'il faut savoir.",
      "faq.q1": "Combien de temps prend la livraison ?",
      "faq.a1": "La livraison prend généralement entre 48 et 72 heures, partout au Maroc.",
      "faq.q2": "Puis-je payer à la livraison ?",
      "faq.a2": "Oui. Vous payez en espèces directement à notre livreur, à la réception de votre colis.",
      "faq.q3": "Fonctionne-t-elle sur tous les sacs ?",
      "faq.a3": "Elle fonctionne sur la plupart des sacs plastiques standards : chips, biscuits, surgelés, épices et plus encore.",
      "faq.q4": "Quelle est la garantie ?",
      "faq.a4": "Votre produit est couvert par notre garantie satisfait ou remboursé, avec échange possible en cas de défaut.",
      "faq.q5": "Comment se recharge la scelleuse ?",
      "faq.a5": "Via le câble USB-C inclus. Une charge complète offre une autonomie de plusieurs semaines.",
      "faq.q6": "Puis-je annuler ma commande ?",
      "faq.a6": "Oui, contactez-nous avant l'expédition et nous annulerons votre commande sans frais.",

      "offer.eyebrow": "Offre limitée",
      "offer.title": "Choisissez votre pack.",
      "offer.sub": "Plus vous en prenez, plus vous économisez.",
      "offer.b1.name": "1 Produit",
      "offer.b2.name": "2 Produits",
      "offer.b2.flag": "⭐ Le plus populaire",
      "offer.b2.save": "Économisez 20 DH",
      "offer.b3.name": "3 Produits",
      "offer.b3.flag": "🔥 Meilleure valeur",
      "offer.b3.save": "Économisez 40 DH",
      "offer.select": "Choisir",
      "offer.stock": "Stock disponible",
      "offer.updated": "Mise à jour aujourd'hui",
"timer.label": "L'offre du jour se termine dans",
"timer.hours": "h",
"timer.minutes": "min",
"timer.seconds": "s",
"timer.note": "Nouvelle offre chaque jour à minuit.",
      "order.eyebrow": "Dernière étape",
      "order.title": "Finalisez votre commande.",
      "order.sub": "Aucun paiement en ligne. Vous réglez à la réception de votre colis.",
      "order.name": "Nom complet",
      "order.phone": "Numéro de téléphone",
      "order.city": "Ville",
      "order.neighborhood": "Quartier",
      "order.address": "Adresse complète",
      "order.qty": "Quantité",
      "order.submit": "Commander Maintenant",
      "order.disclaimer": "🔒 Vos informations restent confidentielles et ne servent qu'à traiter votre commande.",
      "order.errRequired": "Ce champ est requis",
      "order.errPhone": "Numéro de téléphone invalide",

      "footer.tagline": "La fraîcheur, scellée en une seconde.",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "Conditions générales",
      "footer.contact": "Contact",
      "footer.rights": "Tous droits réservés.",

      "stickyCta.cta": "🛒 Commander Maintenant",

      "success.title": "Commande confirmée !",
      "success.body": "Merci ! Notre équipe vous contactera très bientôt pour confirmer la livraison.",
      "success.close": "Fermer",

      "exit.eyebrow": "Avant de partir",
      "exit.title": "N'oubliez pas votre pack.",
      "exit.body": "Le pack de 2 à 370 DH est notre offre la plus demandée — profitez-en avant qu'il ne soit à nouveau en rupture.",
      "exit.cta": "Voir les packs",

      "common.currency": "DH",
    },

    ar: {
      "nav.benefits": "المميزات",
      "nav.how": "كيف تعمل",
      "nav.reviews": "الآراء",
      "nav.faq": "الأسئلة الشائعة",
      "nav.cta": "اطلب الآن",

      "hero.eyebrow": "نوفا كويزي — ابتكار في عالم المطبخ",
      "hero.title": "النضارة،<br>مختومة في ثانية واحدة.",
      "hero.subtitle": "آلة اللحام المصغّرة التي تحافظ على نضارة أطعمتك لفترة أطول تصل إلى 3 مرات. بسيطة، سريعة، ومحمولة.",
      "hero.price": "195 درهم",
      "hero.priceBadge": "-20%",
      "hero.cta": "اطلب الآن",
      "hero.ctaSecondary": "شاهد كيف تعمل",
      "hero.trust1": "الدفع عند الاستلام",
      "hero.trust2": "التوصيل لجميع أنحاء المغرب",
      "hero.trust3": "استرجاع الأموال إن لم تكن راضيًا",
      "hero.stock": "المنتج متوفر",

      "trustbar.cod": "الدفع عند الاستلام",
      "trustbar.delivery": "التوصيل خلال 48–72 ساعة",
      "trustbar.secure": "طلب آمن",
      "trustbar.guarantee": "استرجاع الأموال مضمون",

      "benefits.eyebrow": "لماذا نوفا كويزي",
      "benefits.title": "صُممت لمطبخك.<br>مصنوعة لتدوم.",
      "benefits.item1.title": "نضارة أطول",
      "benefits.item1.desc": "حافظ على أطعمتك طازجة لفترة أطول تصل إلى 3 مرات مقارنة بكيس مفتوح.",
      "benefits.item2.title": "لحام في 3 ثوانٍ",
      "benefits.item2.desc": "إغلاق محكم وفوري في كل استخدام.",
      "benefits.item3.title": "قابلة للشحن عبر USB-C",
      "benefits.item3.desc": "شحنة واحدة كاملة تكفي لأسابيع من الاستخدام اليومي.",
      "benefits.item4.title": "محمولة بالكامل",
      "benefits.item4.desc": "تنزلق داخل درج أو حقيبة أو حتى حقيبة سفر بسهولة.",
      "benefits.item5.title": "متعددة الاستخدامات",
      "benefits.item5.desc": "شيبس، بسكويت، مجمدات، توابل: تلحم تقريبًا جميع الأكياس.",
      "benefits.item6.title": "زر واحد فقط",
      "benefits.item6.desc": "لا حاجة لأي تعليمات. كل أفراد العائلة يستطيعون استخدامها.",

      "comparison.eyebrow": "الفرق مع نوفا كويزي",
      "comparison.title": "قبل / بعد",
      "comparison.beforeTag": "بدون نوفا كويزي",
      "comparison.before1": "أكياس تفقد نضارتها بسرعة",
      "comparison.before2": "شيبس وبسكويت طري",
      "comparison.before3": "هدر في الطعام كل أسبوع",
      "comparison.before4": "مشابك ولوازم لا تُغلق جيدًا",
      "comparison.afterTag": "مع نوفا كويزي",
      "comparison.after1": "نضارة محفوظة بإحكام تام",
      "comparison.after2": "صفر هدر في الطعام",
      "comparison.after3": "أكياس وخزائن منظمة",
      "comparison.after4": "راحة بال يومية",

      "how.eyebrow": "بساطة تامة",
      "how.title": "ثلاث خطوات فقط.",
      "how.step1.title": "ضع الكيس",
      "how.step1.desc": "ضع فتحة الكيس داخل آلة اللحام.",
      "how.step2.title": "اضغط على الزر",
      "how.step2.desc": "يتم اللحام تلقائيًا في 3 ثوانٍ فقط.",
      "how.step3.title": "تم الختم",
      "how.step3.desc": "يبقى طعامك طازجًا ومحميًا بإحكام.",

      "video.eyebrow": "شاهدها تعمل",
      "video.title": "شاهدها أثناء الاستخدام.",

      "features.eyebrow": "المواصفات",
      "features.title": "مدروسة في أدق التفاصيل.",
      "features.f1.title": "حجم مضغوط",
      "features.f1.desc": "تُمسك بيد واحدة، وتوضع في أي مكان.",
      "features.f2.title": "USB-C",
      "features.f2.desc": "شحن سريع، والكابل متوفر مع المنتج.",
      "features.f3.title": "لحام محكم",
      "features.f3.desc": "بدون هواء، بدون رطوبة.",
      "features.f4.title": "متعددة الاستخدامات",
      "features.f4.desc": "المطبخ، السفر، الفريزر.",
      "features.f5.title": "إيقاف تلقائي",
      "features.f5.desc": "آمنة لجميع أفراد العائلة.",
      "features.f6.title": "تشطيب فاخر",
      "features.f6.desc": "تصميم أنيق بلون أسود مطفي.",

      "why.eyebrow": "لماذا تثق بنا",
      "why.title": "خدمة مصممة خصيصًا للمغرب.",
      "why.lead": "نوفا كويزي ليست مجرد متجر إلكتروني، بل خدمة مصممة لتسهيل حياتك، من الطلب إلى باب منزلك.",
      "why.item1.title": "جودة مراقبة",
      "why.item1.desc": "كل منتج يتم فحصه قبل الشحن.",
      "why.item2.title": "توصيل سريع",
      "why.item2.desc": "من 48 إلى 72 ساعة، في جميع أنحاء المغرب.",
      "why.item3.title": "دفع بكل ثقة",
      "why.item3.desc": "ادفع فقط عند استلام طردك.",
      "why.item4.title": "دعم متجاوب",
      "why.item4.desc": "لديك سؤال؟ نجيبك بسرعة، طوال أيام الأسبوع.",

      "stats.clients": "عميل راضٍ",
      "stats.recommend": "ينصحون بنوفا كويزي",
      "stats.delivery": "التوصيل لجميع أنحاء المغرب",
      "stats.codLabel": "عند الاستلام",
      "stats.payment": "طريقة الدفع",

      "reviews.eyebrow": "آراء العملاء",
      "reviews.title": "ماذا يقول عملاؤنا.",
      "reviews.verified": "عملية شراء موثقة",
      "reviews.r1": "لم أكن أتوقع أن جهازًا بهذا الحجم الصغير سيُحدث كل هذا الفرق. الشيبس يبقى مقرمشًا حتى بعد أسبوع من الفتح.",
      "reviews.r2": "التوصيل استغرق يومين إلى الرباط، والدفع عند الاستلام كما وُعدت. الجهاز بسيط وفعال جدًا.",
      "reviews.r3": "التصميم أنيق جدًا، يشحن بسرعة، وأخيرًا توقفت عن رمي أكياس الفواكه المجففة نصف المفتوحة.",
      "reviews.r4": "اقتنيت باقة الثلاث قطع لجميع أفراد العائلة. سهلة الاستخدام، حتى والدتي تستعملها يوميًا.",
      "reviews.r5": "الطلب كان بسيطًا، وخدمة العملاء متجاوبة جدًا عبر واتساب. المنتج يفي بكل وعوده.",

      "faq.eyebrow": "الأسئلة الشائعة",
      "faq.title": "كل ما تحتاج معرفته.",
      "faq.q1": "كم يستغرق التوصيل؟",
      "faq.a1": "يستغرق التوصيل عادة من 48 إلى 72 ساعة، في جميع أنحاء المغرب.",
      "faq.q2": "هل يمكنني الدفع عند الاستلام؟",
      "faq.a2": "نعم، تدفع نقدًا مباشرة لمندوب التوصيل عند استلام طردك.",
      "faq.q3": "هل تعمل على جميع أنواع الأكياس؟",
      "faq.a3": "تعمل على معظم الأكياس البلاستيكية القياسية: شيبس، بسكويت، مجمدات، توابل وأكثر.",
      "faq.q4": "ما هو الضمان المتوفر؟",
      "faq.a4": "منتجك مشمول بضمان استرجاع الأموال، مع إمكانية الاستبدال في حال وجود عيب.",
      "faq.q5": "كيف تُشحن آلة اللحام؟",
      "faq.a5": "عبر كابل USB-C المرفق. الشحنة الكاملة توفر استقلالية لعدة أسابيع.",
      "faq.q6": "هل يمكنني إلغاء طلبي؟",
      "faq.a6": "نعم، تواصل معنا قبل الشحن وسنقوم بإلغاء طلبك دون أي رسوم.",

      "offer.eyebrow": "عرض محدود",
      "offer.title": "اختر باقتك.",
      "offer.sub": "كلما طلبت أكثر، وفّرت أكثر.",
      "offer.b1.name": "قطعة واحدة",
      "offer.b2.name": "قطعتان",
      "offer.b2.flag": "⭐ الأكثر طلبًا",
      "offer.b2.save": "وفّر 20 درهم",
      "offer.b3.name": "ثلاث قطع",
      "offer.b3.flag": "🔥 أفضل قيمة",
      "offer.b3.save": "وفّر 40 درهم",
      "offer.select": "اختر",
      "offer.stock": "المنتج متوفر",
      "offer.updated": "آخر تحديث اليوم",
"timer.label": "عرض اليوم ينتهي خلال",
"timer.hours": "س",
"timer.minutes": "د",
"timer.seconds": "ث",
"timer.note": "عرض جديد كل يوم عند منتصف الليل.",
      "order.eyebrow": "الخطوة الأخيرة",
      "order.title": "أكمل طلبك.",
      "order.sub": "لا حاجة للدفع الإلكتروني. تدفع فقط عند استلام طردك.",
      "order.name": "الاسم الكامل",
      "order.phone": "رقم الهاتف",
      "order.city": "المدينة",
      "order.neighborhood": "الحي",
      "order.address": "العنوان الكامل",
      "order.qty": "الكمية",
      "order.submit": "اطلب الآن",
      "order.disclaimer": "🔒 معلوماتك تبقى سرية ولا تُستخدم إلا لمعالجة طلبك.",
      "order.errRequired": "هذا الحقل مطلوب",
      "order.errPhone": "رقم الهاتف غير صحيح",

      "footer.tagline": "النضارة، مختومة في ثانية واحدة.",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "الشروط والأحكام",
      "footer.contact": "اتصل بنا",
      "footer.rights": "جميع الحقوق محفوظة.",

      "stickyCta.cta": "🛒 اطلب الآن",

      "success.title": "تم تأكيد طلبك!",
      "success.body": "شكرًا لك! سيتواصل معك فريقنا قريبًا جدًا لتأكيد التوصيل.",
      "success.close": "إغلاق",

      "exit.eyebrow": "قبل أن تغادر",
      "exit.title": "لا تنسَ باقتك.",
      "exit.body": "باقة القطعتين بسعر 370 درهم هي الأكثر طلبًا — اغتنم الفرصة قبل نفاد الكمية.",
      "exit.cta": "شاهد الباقات",

      "common.currency": "درهم",
    },
  };

  const QTY_NAME_KEY = { 1: "offer.b1.name", 2: "offer.b2.name", 3: "offer.b3.name" };

  let currentLang = localStorage.getItem("novacuisi_lang") || "fr";

  /* =================================================================
     2. i18n APPLY
     ================================================================= */
  function applyTranslations(lang) {
    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.body.classList.toggle("lang-ar", lang === "ar");

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    updateOrderSummary();
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("novacuisi_lang", lang);
    applyTranslations(lang);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
  });
/* =================================================================
   DAILY DEAL COUNTDOWN — genuinely counts down to real midnight,
   resets naturally each day. Not tied to session/refresh, so it's honest.
   ================================================================= */
const tHours = document.getElementById("tHours");
const tMinutes = document.getElementById("tMinutes");
const tSeconds = document.getElementById("tSeconds");

function pad(n) { return String(n).padStart(2, "0"); }

function updateDealTimer() {
  if (!tHours) return;
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  const diff = Math.max(0, midnight - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  tHours.textContent = pad(h);
  tMinutes.textContent = pad(m);
  tSeconds.textContent = pad(s);
}
if (tHours) {
  updateDealTimer();
  setInterval(updateDealTimer, 1000);
}
  /* =================================================================
     3. PRELOADER
     ================================================================= */
  window.addEventListener("load", () => {
    const pre = document.getElementById("preloader");
    setTimeout(() => pre && pre.classList.add("is-hidden"), 400);
  });

  /* =================================================================
     4. SCROLL PROGRESS + NAVBAR STATE
     ================================================================= */
  const progressBar = document.getElementById("scrollProgress");
  const navbar = document.getElementById("navbar");
  const stickyCta = document.getElementById("stickyCta");
  const heroEl = document.getElementById("hero");
  const orderEl = document.getElementById("order");

  let orderInView = false;
  if (orderEl && "IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((e) => (orderInView = e.isIntersecting));
    }, { threshold: 0.25 }).observe(orderEl);
  }

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + "%";
    if (navbar) navbar.classList.toggle("is-scrolled", scrollTop > 60);

    if (stickyCta) {
      const heroHeight = heroEl ? heroEl.offsetHeight : 600;
      const show = scrollTop > heroHeight * 0.7 && !orderInView;
      stickyCta.classList.toggle("is-visible", show);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* =================================================================
     5. SMOOTH ANCHOR SCROLL (accounts for fixed navbar height)
     ================================================================= */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navH = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* =================================================================
     6. SCROLL REVEAL
     ================================================================= */
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal-up").forEach((el) => revealObserver.observe(el));
  } else {
    document.querySelectorAll(".reveal-up").forEach((el) => el.classList.add("is-visible"));
  }

  /* =================================================================
     7. STAT COUNTERS
     ================================================================= */
  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const statNums = document.querySelectorAll(".stat-number");
  if (statNums.length && "IntersectionObserver" in window) {
    const statObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    statNums.forEach((el) => statObserver.observe(el));
  }

  /* =================================================================
     8. PRODUCT VIDEO — lazy load + play in view + sound toggle
     ================================================================= */
  const video = document.getElementById("productVideo");
  const soundBtn = document.getElementById("videoSoundBtn");

  if (video) {
    const source = video.getAttribute("data-src");
    let loaded = false;

    if ("IntersectionObserver" in window) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!loaded) {
              video.src = source;
              loaded = true;
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.4 });
      videoObserver.observe(video);
    } else {
      video.src = source;
    }

    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        soundBtn.classList.toggle("is-on", !video.muted);
        soundBtn.setAttribute("aria-label", video.muted ? "Activer le son" : "Couper le son");
      });
    }
  }

  /* =================================================================
     9. FAQ ACCORDION
     ================================================================= */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
        openItem.classList.remove("is-open");
        openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* =================================================================
     10. REVIEWS CAROUSEL
     ================================================================= */
  const track = document.getElementById("reviewsTrack");
  const dotsWrap = document.getElementById("reviewsDots");
  if (track && dotsWrap) {
    const cards = Array.from(track.children);
    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Avis " + (i + 1));
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => {
        cards[i].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      });
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    if ("IntersectionObserver" in window) {
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const idx = cards.indexOf(entry.target);
            if (entry.isIntersecting && idx > -1) {
              dots.forEach((d) => d.classList.remove("is-active"));
              dots[idx].classList.add("is-active");
            }
          });
        },
        { root: track, threshold: 0.6 }
      );
      cards.forEach((c) => cardObserver.observe(c));
    }
  }

  /* =================================================================
     11. BUNDLE SELECTOR <-> ORDER FORM SYNC
     ================================================================= */
  const bundleCards = document.querySelectorAll(".bundle-card");
  const qtyRadios = document.querySelectorAll('input[name="bundle"]');
  const orderSummaryLabel = document.getElementById("orderSummaryLabel");
  const orderSummaryPrice = document.getElementById("orderSummaryPrice");

  function selectBundle(qty, scrollToOrder) {
    bundleCards.forEach((card) => card.classList.toggle("is-selected", card.getAttribute("data-qty") === String(qty)));
    qtyRadios.forEach((radio) => {
      radio.checked = radio.value === String(qty);
      // class fallback for browsers without :has() support
      radio.closest(".qty-option").classList.toggle("is-checked", radio.checked);
    });
    updateOrderSummary();
    if (scrollToOrder) {
      const target = document.getElementById("order");
      const navH = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  function updateOrderSummary() {
    const checked = document.querySelector('input[name="bundle"]:checked');
    if (!checked || !orderSummaryLabel || !orderSummaryPrice) return;
    const qty = checked.value;
    const price = checked.getAttribute("data-price");
    const key = QTY_NAME_KEY[qty];
    orderSummaryLabel.textContent = I18N[currentLang][key] || "";
    orderSummaryPrice.textContent = price + " " + I18N[currentLang]["common.currency"];
    bundleCards.forEach((card) => card.classList.toggle("is-selected", card.getAttribute("data-qty") === qty));
  }

  bundleCards.forEach((card) => {
    card.addEventListener("click", () => selectBundle(card.getAttribute("data-qty"), true));
  });
  qtyRadios.forEach((radio) => radio.addEventListener("change", () => selectBundle(radio.value, false)));
  selectBundle(2, false); // "2 products" is pre-selected as the featured/default offer

  /* =================================================================
     12. BUTTON RIPPLE EFFECT
     ================================================================= */
  document.querySelectorAll(".btn-ripple").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* =================================================================
     13. ORDER FORM — validation, Google Sheets, Pixel, WhatsApp
     ================================================================= */
  const orderForm = document.getElementById("orderForm");
  const submitBtn = document.getElementById("orderSubmitBtn");
  const successModal = document.getElementById("successModal");
  const successOverlay = document.getElementById("successOverlay");
  const successClose = document.getElementById("successClose");

  function showError(fieldRow, show) {
    fieldRow.classList.toggle("has-error", show);
  }

  function validateForm(data) {
    let valid = true;
    const nameRow = document.getElementById("fullName").closest(".form-row");
    const phoneRow = document.getElementById("phone").closest(".form-row");
    const cityRow = document.getElementById("city").closest(".form-row");
    const addressRow = document.getElementById("address").closest(".form-row");

    const nameOk = data.fullName.trim().length > 1;
    showError(nameRow, !nameOk);
    valid = valid && nameOk;

    const phoneOk = /^0[5-7][0-9]{8}$/.test(data.phone.replace(/\s|-/g, ""));
    showError(phoneRow, !phoneOk);
    valid = valid && phoneOk;

    const cityOk = data.city.trim().length > 1;
    showError(cityRow, !cityOk);
    valid = valid && cityOk;

    const addressOk = data.address.trim().length > 4;
    showError(addressRow, !addressOk);
    valid = valid && addressOk;

    return valid;
  }

  function openSuccessModal() {
    successOverlay.classList.add("is-visible");
    successModal.classList.add("is-visible");
  }
  function closeSuccessModal() {
    successOverlay.classList.remove("is-visible");
    successModal.classList.remove("is-visible");
  }
  if (successClose) successClose.addEventListener("click", closeSuccessModal);
  if (successOverlay) successOverlay.addEventListener("click", closeSuccessModal);

  function fireMetaPurchaseEvent(value, qty) {
    if (typeof fbq === "function" && CONFIG.FACEBOOK_PIXEL_ID !== "YOUR_PIXEL_ID") {
      fbq("track", "Purchase", { value: value, currency: "MAD", contents: [{ id: "novacuisi-bag-sealer", quantity: qty }] });
    }
  }

  function openWhatsAppRecap(data) {
    if (!CONFIG.WHATSAPP_NUMBER || CONFIG.WHATSAPP_NUMBER.indexOf("X") > -1) return;
    const lines = [
      "Nouvelle commande NovaCuisi",
      "Nom: " + data.fullName,
      "Téléphone: " + data.phone,
      "Ville: " + data.city,
      "Quartier: " + (data.neighborhood || "-"),
      "Adresse: " + data.address,
      "Offre: " + data.offerLabel,
      "Total: " + data.total + " DH",
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open("https://wa.me/" + CONFIG.WHATSAPP_NUMBER + "?text=" + text, "_blank");
  }

  if (orderForm) {
    orderForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const checkedBundle = document.querySelector('input[name="bundle"]:checked');
      const data = {
        fullName: document.getElementById("fullName").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        neighborhood: document.getElementById("neighborhood").value,
        address: document.getElementById("address").value,
        qty: checkedBundle ? checkedBundle.value : "1",
        total: checkedBundle ? checkedBundle.getAttribute("data-price") : "195",
        offerLabel: I18N[currentLang][QTY_NAME_KEY[checkedBundle ? checkedBundle.value : "1"]],
        date: new Date().toLocaleDateString("fr-FR"),
        lang: currentLang,
      };

      if (!validateForm(data)) return;

      orderForm.classList.add("is-submitting");
      submitBtn.disabled = true;

      try {
        if (CONFIG.GOOGLE_SHEETS_URL && CONFIG.GOOGLE_SHEETS_URL.indexOf("PASTE_") === -1) {
          // Apps Script web apps don't send CORS headers for cross-origin fetch reads,
          // so we send as text/plain (a "simple request") with mode:no-cors and treat
          // a resolved fetch as success. The Apps Script side parses e.postData.contents.
          await fetch(CONFIG.GOOGLE_SHEETS_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(data),
          });
        }

        fireMetaPurchaseEvent(Number(data.total), Number(data.qty));
        openWhatsAppRecap(data);
        openSuccessModal();
        orderForm.reset();
        selectBundle(2, false);
      } catch (err) {
        console.error("NovaCuisi order submission failed:", err);
        alert(currentLang === "ar" ? "حدث خطأ. حاول مرة أخرى من فضلك." : "Une erreur est survenue. Merci de réessayer.");
      } finally {
        orderForm.classList.remove("is-submitting");
        submitBtn.disabled = false;
      }
    });
  }

  /* =================================================================
     14. EXIT INTENT (desktop only, once per session)
     ================================================================= */
  const exitModal = document.getElementById("exitModal");
  const exitOverlay = document.getElementById("exitOverlay");
  const exitClose = document.getElementById("exitClose");

  if (exitModal && window.matchMedia("(min-width: 901px)").matches) {
    let shown = sessionStorage.getItem("novacuisi_exit_shown") === "1";
    document.addEventListener("mouseleave", (e) => {
      if (!shown && e.clientY <= 0) {
        exitModal.classList.add("is-visible");
        exitOverlay.classList.add("is-visible");
        shown = true;
        sessionStorage.setItem("novacuisi_exit_shown", "1");
      }
    });
    function closeExit() {
      exitModal.classList.remove("is-visible");
      exitOverlay.classList.remove("is-visible");
    }
    if (exitClose) exitClose.addEventListener("click", closeExit);
    if (exitOverlay) exitOverlay.addEventListener("click", closeExit);
    document.getElementById("exitCta") && document.getElementById("exitCta").addEventListener("click", closeExit);
  }

  /* =================================================================
     15. FOOTER YEAR
     ================================================================= */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =================================================================
     16. INIT
     ================================================================= */
  applyTranslations(currentLang);
})();
