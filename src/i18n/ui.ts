export const languages = {
  uk: 'Українська',
  en: 'English',
} as const;

export const defaultLang = 'uk' as const;

export type Lang = keyof typeof languages;

export const ui = {
  uk: {
    // Meta / SEO
    'meta.title': 'PRO STOPY — Професійний подолог у Києві | Подологічний догляд',
    'meta.description': 'PRO STOPY — професійний подологічний догляд у Києві. Педикюр, лікування врослих нігтів, мозолів, грибка, тріщин. ☎ +380 98 527 94 75',
    'meta.keywords': 'подолог Київ, подологічний педикюр, врослий ніготь Київ, грибок нігтів лікування, мозолі видалення, тріщини стоп, подологія Дніпровська набережна, PRO STOPY',
    'meta.ogSiteName': 'PRO STOPY — Професійна подологія',
    'meta.ogLocale': 'uk_UA',

    // JSON-LD
    'jsonld.description': 'Професійний подологічний догляд у Києві — PRO STOPY',
    'jsonld.streetAddress': 'ЖК Seven, Дніпровська набережна, 20а',
    'jsonld.city': 'Київ',

    // Nav
    'nav.home': 'Головна',
    'nav.services': 'Послуги',
    'nav.about': 'Про нас',
    'nav.contacts': 'Контакти',
    'nav.appointment': 'Записатися',
    'nav.openMenu': 'Відкрити меню',

    // Hero
    'hero.title': 'Професійний догляд за вашими стопами',
    'hero.subtitle': 'Подологічна студія в ЖК Seven — Позняки, Осокорки. Індивідуальний підхід, сучасні методики, бездоганний результат.',
    'hero.cta': 'Записатися на прийом',
    'hero.stat.services': 'послуг для здоров\'я стоп',
    'hero.stat.clients': 'задоволених клієнтів',
    'hero.stat.sterility': 'стерильність',
    'hero.stat.rating': 'рейтинг у Google',

    // Services
    'services.title': 'Наші послуги',
    'services.subtitle': 'Професійний підхід до кожної процедури. Підбираємо оптимальне рішення, виходячи зі стану ваших стоп.',
    'services.hygienicPedicure.title': 'Гігієнічний педикюр',
    'services.hygienicPedicure.desc': 'Базова процедура для підтримання чистоти та здоров\'я стоп. Делікатно видаляємо ороговілу шкіру, надаємо естетичний вигляд нігтям.',
    'services.podologicalPedicure.title': 'Подологічний педикюр',
    'services.podologicalPedicure.desc': 'Комплексна професійна обробка стопи з урахуванням індивідуальних проблем: гіперкератози, врослі чи деформовані нігті, мозолі та тріщини.',
    'services.calluses.title': 'Обробка мозолів',
    'services.calluses.desc': 'Безболісно та акуратно видаляємо мозолі будь-якої складності, усуваємо дискомфорт і допомагаємо запобігти їх повторному утворенню.',
    'services.cracks.title': 'Обробка тріщин',
    'services.cracks.desc': 'Догляд за пошкодженою шкірою стоп. М\'яке очищення, шліфування та професійний догляд, що сприяє швидшому загоєнню та відновленню.',
    'services.ingrownNail.title': 'Обробка врослого нігтя',
    'services.ingrownNail.desc': 'Акуратно усуваємо проблему без хірургічного втручання. Сучасні подологічні методи для зняття болю, корекції росту та профілактики.',
    'services.deformedNails.title': 'Деформовані нігті',
    'services.deformedNails.desc': 'Корекція нігтьових пластин, що змінили форму через травми, грибкові ураження чи інші причини. Надаємо нігтям природний вигляд.',
    'services.fungus.title': 'Грибок нігтів та мікоз',
    'services.fungus.desc': 'Комплексний підхід: апаратна обробка уражених нігтів і шкіри, поєднана з правильним підбором засобів для домашнього догляду.',
    'services.warts.title': 'Обробка бородавок',
    'services.warts.desc': 'Апаратна та професійна обробка бородавок на стопах із використанням спеціальних методів, що допомагають безпечно зняти дискомфорт.',
    'services.insoles.title': 'Розвантажувальні устілки',
    'services.insoles.desc': 'Індивідуальні устілки для зменшення надмірного тиску на окремі ділянки стопи. Підвищення комфорту під час ходьби.',
    'services.cosmeceuticals.title': 'Підбір та продаж космецевтики',
    'services.cosmeceuticals.desc': 'Рекомендуємо професійні засоби для догляду за стопами та нігтями. Підбираємо індивідуально для вирішення конкретних проблем: сухість, тріщини, грибкові ураження, надмірна пітливість.',

    // About
    'about.title': 'Чому обирають нас',
    'about.experience.title': 'Досвід та кваліфікація',
    'about.experience.desc': 'Постійне підвищення кваліфікації та сертифіковані методики догляду за стопами.',
    'about.sterility.title': 'Стерильність та безпека',
    'about.sterility.desc': 'Всі інструменти проходять повний цикл стерилізації. Одноразові матеріали для кожного клієнта.',
    'about.individual.title': 'Індивідуальний підхід',
    'about.individual.desc': 'Кожен клієнт отримує персональний план догляду з урахуванням стану стоп та потреб.',
    'about.equipment.title': 'Сучасне обладнання',
    'about.equipment.desc': 'Працюємо на професійному обладнанні європейських виробників. Тільки перевірені засоби та матеріали.',
    'about.quote': 'Здоров\'я ваших стоп — це наша відповідальність. Кожна процедура виконується з увагою до деталей та турботою про результат.',
    'about.team': 'Команда PRO STOPY',
    'about.statClients': 'клієнтів',
    'about.statRating': 'рейтинг Google',

    // Reviews
    'reviews.title': 'Відгуки клієнтів',
    'reviews.subtitle': 'Що кажуть про нас на Google Maps',
    'reviews.allReviews': 'Всі відгуки на Google Maps',
    'reviews.source': 'Google Maps',

    // Review content
    'reviews.1.text': 'Дуже вдячна Анні за чудову роботу! Професійний підхід, уважність і справжня турбота відчуваються з першої хвилини. Кабінет дуже затишний і комфортний — Анна не просто допомогла вирішити проблему, а й дала можливість відпочити в надійних професійних руках. Рекомендую від щирого серця!',
    'reviews.1.name': 'Анастасія',
    'reviews.1.initial': 'А',
    'reviews.2.text': 'Потрапила до чудового подолога Анни — лікували врослий нігтик та стрижневий мозоль. Все пройшло акуратно і абсолютно без болю! Анна все детально пояснила, дала рекомендації з догляду, дуже тепла та душевна атмосфера. Відчувається, що людина працює з любов\'ю до своєї справи. Величезне дякую, Анно!',
    'reviews.2.name': 'Анастасія',
    'reviews.2.initial': 'А',
    'reviews.3.text': 'Ходжу до Ані вже 2 роки. Дуже подобається її професійний підхід та уважність до деталей. Тільки після її роботи перестала використовувати гель лак на ногах. Дуже задоволена!',
    'reviews.3.name': 'Ліза',
    'reviews.3.initial': 'Л',
    'reviews.4.text': 'Другий рік ходжу і ні на кого не проміняю майстра! Все дуууже обережно, завжди максимально професійно. Без зайвих рекомендацій, але все по ділу і знаєш точно — якщо сказано, то все так і є і треба робити. Дякую!',
    'reviews.4.name': 'Світлана',
    'reviews.4.initial': 'С',

    // CTA
    'cta.title': 'Запишіться на прийом',
    'cta.subtitle': 'Зверніться сьогодні — і зробіть перший крок до здорових та красивих стоп',

    // Contact
    'contact.title': 'Контакти',
    'contact.subtitle': 'Зв\'яжіться з нами — ми з радістю відповімо на ваші запитання',
    'contact.address.title': 'Адреса',
    'contact.address.text': 'ЖК Seven, Дніпровська набережна, 20а, Київ',
    'contact.address.district': 'р-н Позняки / Осокорки',
    'contact.phone.title': 'Телефон',
    'contact.instagram.title': 'Instagram',
    'contact.schedule.title': 'Графік роботи',
    'contact.schedule.text': 'Щодня:',
    'contact.schedule.hours': '10:00 — 20:00',
    'contact.schedule.desc': 'Для запису на прийом зателефонуйте нам або напишіть в Instagram. Ми підберемо зручний для вас час.',
    'contact.callBtn': 'Зателефонувати',
    'contact.instagramBtn': 'Написати в Instagram',
    'contact.mapTitle': 'PRO STOPY на карті',

    // Footer
    'footer.about': 'Професійний подологічний догляд у Києві. Здоров\'я та краса ваших стоп — наша спеціалізація.',
    'footer.services': 'Послуги',
    'footer.service.1': 'Гігієнічний педикюр',
    'footer.service.2': 'Подологічний педикюр',
    'footer.service.3': 'Обробка врослого нігтя',
    'footer.service.4': 'Обробка мозолів та тріщин',
    'footer.service.5': 'Лікування грибка нігтів',
    'footer.service.6': 'Індивідуальні устілки',
    'footer.contacts': 'Контакти',
    'footer.copyright': 'PRO STOPY. Всі права захищені.',

    // Service placeholder pages
    'servicePage.comingSoon': 'Детальна інформація незабаром',
    'servicePage.ctaBook': 'Записатися на консультацію',
    'servicePage.ctaContact': 'Залишити заявку',
    'servicePage.back': '← Повернутися на головну',

    // Service page - aesthetic podiatry
    'servicePage.aesthetic.title': 'Краса та здоров\'я в кожному кроці | ПРО СТОПИ',
    'servicePage.aesthetic.description': 'Естетична подологія в подологічній студії PRO STOPY. Лікування без хірургічного втручання, корекція деформацій, догляд за шкірою стоп.',
    'servicePage.aesthetic.heroTitle': 'Краса та здоров\'я в кожному кроці',
    'servicePage.aesthetic.heroSubtitle': 'Поєднуємо медичний підхід з естетичними процедурами. Допомагаємо позбутися косметичних дефектів та дискомфорту, зберігаючи природну красу ваших ніг.',
    'servicePage.aesthetic.comingSoonSubtitle': 'Ми працюємо над створенням докладної інформації про наші послуги з естетичної подології. Зв\'яжіться з нами для консультації вже зараз!',

    // Service page - pediatric care
    'servicePage.pediatric.title': 'Здорові ніжки з дитинства | ПРО СТОПИ',
    'servicePage.pediatric.description': 'Педіатрична подологія в подологічній студії PRO STOPY. Корекція розвитку стопи, лікування плоскостопості, профілактика деформацій у дітей.',
    'servicePage.pediatric.heroTitle': 'Здорові ніжки з дитинства',
    'servicePage.pediatric.heroSubtitle': 'Правильний розвиток стопи - основа здоров\'я вашої дитини. Ми проводимо діагностику, корекцію та профілактику захворювань стоп у дітей всіх вікових груп.',
    'servicePage.pediatric.comingSoonSubtitle': 'Ми працюємо над створенням докладної інформації про наші послуги з педіатричної подології. Зв\'яжіться з нами для консультації вже зараз!',

    // Service page - post-surgical
    'servicePage.postSurgical.title': 'Професійне відновлення після операцій | ПРО СТОПИ',
    'servicePage.postSurgical.description': 'Реабілітація після хірургічних втручань на стопах в подологічній студії PRO STOPY. Програми відновлення, контроль загоєння, фізіотерапія.',
    'servicePage.postSurgical.heroTitle': 'Професійне відновлення після операцій',
    'servicePage.postSurgical.heroSubtitle': 'Комплексні програми реабілітації для швидкого та безпечного відновлення після хірургічних втручань на стопах. Індивідуальний підхід та постійний моніторинг прогресу.',
    'servicePage.postSurgical.comingSoonSubtitle': 'Ми працюємо над створенням докладної інформації про наші програми реабілітації. Зв\'яжіться з нами для консультації вже зараз!',

    // Service page - professional care
    'servicePage.professional.title': 'Подологія для зайнятих людей | ПРО СТОПИ',
    'servicePage.professional.description': 'Швидка та ефективна подологічна допомога для професіоналів в подологічній студії PRO STOPY. Гнучкий графік, експрес-консультації.',
    'servicePage.professional.heroTitle': 'Подологія для зайнятих людей',
    'servicePage.professional.heroSubtitle': 'Цінуємо ваш час! Пропонуємо ефективне лікування з мінімальними візитами, гнучкий графік та преміальний сервіс для професіоналів.',
    'servicePage.professional.comingSoonSubtitle': 'Ми працюємо над створенням докладної інформації про наші послуги для професіоналів. Зв\'яжіться з нами для консультації вже зараз!',

    // Service page - senior care
    'servicePage.senior.title': 'Геріатрична подологія - турбота про комфорт | ПРО СТОПИ',
    'servicePage.senior.description': 'Делікатний догляд за стопами літніх людей в подологічній студії PRO STOPY. Лікування діабетичної стопи, профілактика падінь.',
    'servicePage.senior.heroTitle': 'Геріатрична подологія - турбота про комфорт',
    'servicePage.senior.heroSubtitle': 'Делікатний та професійний догляд за стопами літніх людей. Ми допомагаємо зберегти мобільність, запобігти ускладненням та покращити якість життя.',
    'servicePage.senior.comingSoonSubtitle': 'Ми працюємо над створенням докладної інформації про наші послуги з геріатричної подології. Зв\'яжіться з нами для консультації вже зараз!',

    // Service page - sports medicine
    'servicePage.sports.title': 'Спортивна подологія - тримайте темп! | ПРО СТОПИ',
    'servicePage.sports.description': 'Спеціалізована допомога для спортсменів та активних людей в подологічній студії PRO STOPY. Біомеханічний аналіз, лікування травм, індивідуальні устілки.',
    'servicePage.sports.heroTitle': 'Спортивна подологія - тримайте темп!',
    'servicePage.sports.heroSubtitle': 'Ми розуміємо, наскільки важливе здоров\'я стоп для спортсменів. Наша команда спеціалізується на діагностиці та лікуванні спортивних травм, біомеханічному аналізі та профілактиці ушкоджень.',
    'servicePage.sports.comingSoonSubtitle': 'Ми працюємо над створенням докладної інформації про наші послуги зі спортивної подології. Зв\'яжіться з нами для консультації вже зараз!',
  },
  en: {
    // Meta / SEO
    'meta.title': 'PRO STOPY — Professional Podiatrist in Kyiv | Foot Care',
    'meta.description': 'PRO STOPY — professional podiatric care in Kyiv. Pedicure, ingrown nail treatment, callus and fungal care, cracked heels. ☎ +380 98 527 94 75',
    'meta.keywords': 'podiatrist Kyiv, podiatric pedicure, ingrown nail Kyiv, nail fungus treatment, callus removal, cracked heels, podiatry Dniprovska naberezhna, PRO STOPY',
    'meta.ogSiteName': 'PRO STOPY — Professional Podiatry',
    'meta.ogLocale': 'en_US',

    // JSON-LD
    'jsonld.description': 'Professional podiatric care in Kyiv — PRO STOPY',
    'jsonld.streetAddress': 'RC Seven, Dniprovska naberezhna, 20a',
    'jsonld.city': 'Kyiv',

    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contacts': 'Contacts',
    'nav.appointment': 'Book now',
    'nav.openMenu': 'Open menu',

    // Hero
    'hero.title': 'Professional care for your feet',
    'hero.subtitle': 'Podiatry studio in RC Seven — Pozniaky, Osokorky. Personalized approach, modern techniques, impeccable results.',
    'hero.cta': 'Book an appointment',
    'hero.stat.services': 'foot health services',
    'hero.stat.clients': 'satisfied clients',
    'hero.stat.sterility': 'sterility',
    'hero.stat.rating': 'Google rating',

    // Services
    'services.title': 'Our services',
    'services.subtitle': 'Professional approach to every procedure. We select the optimal solution based on the condition of your feet.',
    'services.hygienicPedicure.title': 'Hygienic pedicure',
    'services.hygienicPedicure.desc': 'Basic procedure to maintain clean and healthy feet. We gently remove callused skin and give nails an aesthetic appearance.',
    'services.podologicalPedicure.title': 'Podiatric pedicure',
    'services.podologicalPedicure.desc': 'Comprehensive professional foot treatment addressing individual issues: hyperkeratosis, ingrown or deformed nails, calluses and cracks.',
    'services.calluses.title': 'Callus treatment',
    'services.calluses.desc': 'We painlessly and carefully remove calluses of any complexity, eliminate discomfort and help prevent their recurrence.',
    'services.cracks.title': 'Cracked heel treatment',
    'services.cracks.desc': 'Care for damaged foot skin. Gentle cleansing, polishing and professional treatment to promote faster healing and recovery.',
    'services.ingrownNail.title': 'Ingrown nail treatment',
    'services.ingrownNail.desc': 'We carefully resolve the problem without surgery. Modern podiatric methods for pain relief, growth correction and prevention.',
    'services.deformedNails.title': 'Deformed nails',
    'services.deformedNails.desc': 'Correction of nail plates that have changed shape due to injuries, fungal infections or other causes. We restore the natural look of nails.',
    'services.fungus.title': 'Nail fungus & mycosis',
    'services.fungus.desc': 'Comprehensive approach: hardware treatment of affected nails and skin, combined with proper selection of home care products.',
    'services.warts.title': 'Wart treatment',
    'services.warts.desc': 'Hardware and professional wart treatment on feet using special methods that help safely relieve discomfort.',
    'services.insoles.title': 'Offloading insoles',
    'services.insoles.desc': 'Custom insoles to reduce excessive pressure on specific areas of the foot. Improved comfort while walking.',
    'services.cosmeceuticals.title': 'Cosmeceutical selection & sales',
    'services.cosmeceuticals.desc': 'We recommend professional foot and nail care products. Individually selected to address specific issues: dryness, cracks, fungal infections, excessive sweating.',

    // About
    'about.title': 'Why clients choose us',
    'about.experience.title': 'Experience & qualifications',
    'about.experience.desc': 'Continuous professional development and certified foot care techniques.',
    'about.sterility.title': 'Sterility & safety',
    'about.sterility.desc': 'All instruments undergo a full sterilization cycle. Disposable materials for every client.',
    'about.individual.title': 'Personalized approach',
    'about.individual.desc': 'Each client receives a personal care plan tailored to their foot condition and needs.',
    'about.equipment.title': 'Modern equipment',
    'about.equipment.desc': 'We work with professional European equipment. Only proven products and materials.',
    'about.quote': 'Your foot health is our responsibility. Every procedure is performed with attention to detail and care for the result.',
    'about.team': 'PRO STOPY Team',
    'about.statClients': 'clients',
    'about.statRating': 'Google rating',

    // Reviews
    'reviews.title': 'Client reviews',
    'reviews.subtitle': 'What our clients say on Google Maps',
    'reviews.allReviews': 'All reviews on Google Maps',
    'reviews.source': 'Google Maps',
    'reviews.showOriginal': 'Show original',
    'reviews.showTranslation': 'Show translation',

    // Review translations (EN page shows translated text with toggle)
    'reviews.1.text': 'Very grateful to Anna for the wonderful work! Professional approach, attentiveness and genuine care are felt from the very first minute. The office is very cozy and comfortable — Anna not only helped solve the problem, but also gave me the opportunity to relax in reliable professional hands. I recommend wholeheartedly!',
    'reviews.1.name': 'Anastasiia',
    'reviews.1.initial': 'A',
    'reviews.2.text': 'I went to the wonderful podiatrist Anna — we treated an ingrown nail and a core callus. Everything went neatly and absolutely painlessly! Anna explained everything in detail, gave care recommendations, very warm and soulful atmosphere. You can feel that the person works with love for their craft. Thank you so much, Anna!',
    'reviews.2.name': 'Anastasiia',
    'reviews.2.initial': 'A',
    'reviews.3.text': 'I have been going to Anna for 2 years now. I really like her professional approach and attention to detail. Only after her work did I stop using gel polish on my feet. Very satisfied!',
    'reviews.3.name': 'Liza',
    'reviews.3.initial': 'L',
    'reviews.4.text': 'Second year coming and I wouldn\'t trade this specialist for anyone! Everything is done very carefully, always as professional as possible. No unnecessary recommendations, but everything is to the point and you know for sure — if something is said, it\'s exactly how it is. Thank you!',
    'reviews.4.name': 'Svitlana',
    'reviews.4.initial': 'S',

    // CTA
    'cta.title': 'Book an appointment',
    'cta.subtitle': 'Reach out today — take the first step towards healthy and beautiful feet',

    // Contact
    'contact.title': 'Contacts',
    'contact.subtitle': 'Get in touch — we\'ll be happy to answer your questions',
    'contact.address.title': 'Address',
    'contact.address.text': 'RC Seven, Dniprovska naberezhna, 20a, Kyiv',
    'contact.address.district': 'Pozniaky / Osokorky area',
    'contact.phone.title': 'Phone',
    'contact.instagram.title': 'Instagram',
    'contact.schedule.title': 'Working hours',
    'contact.schedule.text': 'Daily:',
    'contact.schedule.hours': '10:00 AM — 8:00 PM',
    'contact.schedule.desc': 'To book an appointment, call us or message us on Instagram. We\'ll find a convenient time for you.',
    'contact.callBtn': 'Call us',
    'contact.instagramBtn': 'Message on Instagram',
    'contact.mapTitle': 'PRO STOPY on map',

    // Footer
    'footer.about': 'Professional podiatric care in Kyiv. The health and beauty of your feet is our specialty.',
    'footer.services': 'Services',
    'footer.service.1': 'Hygienic pedicure',
    'footer.service.2': 'Podiatric pedicure',
    'footer.service.3': 'Ingrown nail treatment',
    'footer.service.4': 'Callus & crack treatment',
    'footer.service.5': 'Nail fungus treatment',
    'footer.service.6': 'Custom insoles',
    'footer.contacts': 'Contacts',
    'footer.copyright': 'PRO STOPY. All rights reserved.',

    // Service placeholder pages
    'servicePage.comingSoon': 'Detailed information coming soon',
    'servicePage.ctaBook': 'Book a consultation',
    'servicePage.ctaContact': 'Leave a request',
    'servicePage.back': '← Back to homepage',

    // Service page - aesthetic podiatry
    'servicePage.aesthetic.title': 'Beauty & Health in Every Step | PRO STOPY',
    'servicePage.aesthetic.description': 'Aesthetic podiatry at PRO STOPY studio. Non-surgical treatment, deformity correction, foot skin care.',
    'servicePage.aesthetic.heroTitle': 'Beauty & health in every step',
    'servicePage.aesthetic.heroSubtitle': 'We combine a medical approach with aesthetic procedures. We help eliminate cosmetic defects and discomfort while preserving the natural beauty of your feet.',
    'servicePage.aesthetic.comingSoonSubtitle': 'We are working on creating detailed information about our aesthetic podiatry services. Contact us for a consultation now!',

    // Service page - pediatric care
    'servicePage.pediatric.title': 'Healthy Feet from Childhood | PRO STOPY',
    'servicePage.pediatric.description': 'Pediatric podiatry at PRO STOPY studio. Foot development correction, flat feet treatment, deformity prevention in children.',
    'servicePage.pediatric.heroTitle': 'Healthy feet from childhood',
    'servicePage.pediatric.heroSubtitle': 'Proper foot development is the foundation of your child\'s health. We provide diagnostics, correction and prevention of foot conditions in children of all age groups.',
    'servicePage.pediatric.comingSoonSubtitle': 'We are working on creating detailed information about our pediatric podiatry services. Contact us for a consultation now!',

    // Service page - post-surgical
    'servicePage.postSurgical.title': 'Professional Post-Surgery Recovery | PRO STOPY',
    'servicePage.postSurgical.description': 'Post-surgical foot rehabilitation at PRO STOPY studio. Recovery programs, healing monitoring, physiotherapy.',
    'servicePage.postSurgical.heroTitle': 'Professional post-surgery recovery',
    'servicePage.postSurgical.heroSubtitle': 'Comprehensive rehabilitation programs for fast and safe recovery after foot surgery. Personalized approach and continuous progress monitoring.',
    'servicePage.postSurgical.comingSoonSubtitle': 'We are working on creating detailed information about our rehabilitation programs. Contact us for a consultation now!',

    // Service page - professional care
    'servicePage.professional.title': 'Podiatry for Busy People | PRO STOPY',
    'servicePage.professional.description': 'Fast and effective podiatric care for professionals at PRO STOPY studio. Flexible schedule, express consultations.',
    'servicePage.professional.heroTitle': 'Podiatry for busy people',
    'servicePage.professional.heroSubtitle': 'We value your time! We offer effective treatment with minimal visits, flexible schedule and premium service for professionals.',
    'servicePage.professional.comingSoonSubtitle': 'We are working on creating detailed information about our services for professionals. Contact us for a consultation now!',

    // Service page - senior care
    'servicePage.senior.title': 'Geriatric Podiatry — Comfort Care | PRO STOPY',
    'servicePage.senior.description': 'Gentle foot care for elderly people at PRO STOPY studio. Diabetic foot treatment, fall prevention.',
    'servicePage.senior.heroTitle': 'Geriatric podiatry — comfort care',
    'servicePage.senior.heroSubtitle': 'Gentle and professional foot care for elderly people. We help maintain mobility, prevent complications and improve quality of life.',
    'servicePage.senior.comingSoonSubtitle': 'We are working on creating detailed information about our geriatric podiatry services. Contact us for a consultation now!',

    // Service page - sports medicine
    'servicePage.sports.title': 'Sports Podiatry — Keep Your Pace! | PRO STOPY',
    'servicePage.sports.description': 'Specialized care for athletes and active people at PRO STOPY studio. Biomechanical analysis, injury treatment, custom insoles.',
    'servicePage.sports.heroTitle': 'Sports podiatry — keep your pace!',
    'servicePage.sports.heroSubtitle': 'We understand how important foot health is for athletes. Our team specializes in diagnosing and treating sports injuries, biomechanical analysis and injury prevention.',
    'servicePage.sports.comingSoonSubtitle': 'We are working on creating detailed information about our sports podiatry services. Contact us for a consultation now!',
  },
} as const;
