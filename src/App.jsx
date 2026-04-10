import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  Gem,
  Globe,
  Layers3,
  Menu,
  MessageCircleMore,
  MonitorPlay,
  MoveRight,
  Orbit,
  Package2,
  PanelsTopLeft,
  Rocket,
  Sparkles,
  Star,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

const TG = "https://t.me/rivaldesign";

const CONTENT = {
  ru: {
    nav: [["Преимущества", "features"], ["Услуги", "services"], ["Кейсы", "portfolio"], ["Пакеты", "pricing"], ["FAQ", "faq"]],
    hero: {
      eyebrow: "Premium graphic identity for creators, brands and digital projects",
      titleA: "Rival Design создаёт",
      titleB: "аватарки, которые выглядят как статус",
      desc: "Космический дизайн-бренд для тех, кому нужен сильный визуальный образ: флагманские аватарки, премиальный брендинг, motion-графика и полная упаковка проекта под ключ.",
      primary: "Обсудить проект в Telegram",
      secondary: "Смотреть услуги",
      badges: [["Флагман", "Avatar Design"], ["Формат", "RU / EN • Telegram-first"], ["Подход", "Premium static + motion"]],
      side: ["Бренды и профили, которым нужен визуальный вес", "Точный, дорогой и технологичный стиль без шаблонности"],
    },
    featuresTitle: "Почему выбирают Rival Design",
    featuresLead: "Каждый блок сайта и каждый дизайн-артефакт работают на впечатление, узнаваемость и желание написать вам первым.",
    features: [
      [Crown, "Аватарки как флагман", "Основная специализация Rival Design — аватарки, которые усиливают образ бренда, автора, проекта или игрового профиля."],
      [Layers3, "Единый premium-образ", "От логотипа и баннера до оформления соцсетей и лендинга — всё собирается в цельную визуальную систему."],
      [Orbit, "Static + Motion", "Статичные и анимированные решения проектируются в одной эстетике, чтобы бренд смотрелся дорого в любой точке контакта."],
      [WandSparkles, "Кастомный арт-дирекшн", "Без потоковых шаблонов. Каждая работа строится вокруг задачи клиента, ниши и нужного уровня статуса."],
      [Rocket, "Упаковка под рост", "Дизайн работает на восприятие, доверие, кликабельность и более сильную презентацию проекта."],
      [Zap, "Коммуникация без шума", "Быстрый процесс через Telegram: запрос, направление, концепт, правки и финальная выдача без бюрократии."],
    ],
    servicesTitle: "Услуги Rival Design",
    servicesLead: "Флагман — аватарки. Но уровень бренда раскрывается полноценно, когда каждый носитель работает в одном дорогом визуальном коде.",
    serviceGroups: [
      ["Flagship: Avatars", "Ключевое направление", ["Статическая Аватарка", "Анимированная Аватарка"]],
      ["Static Design", "Чистая форма и сильная подача", ["Статический Баннер", "Превью", "Карточка товаров", "Статический Логотип", "Лендинг"]],
      ["Motion Design", "Движение, которое усиливает бренд", ["Анимированный Баннер", "Анимированный Логотип", "Анимированное Эмодзи"]],
      ["Full Project Packaging", "Под ключ и в едином стиле", ["Полная упаковка проекта под ключ", "Аватарка + баннер + оформление соцсетей / форума", "Брендинг и айдентика"]],
    ],
    statsTitle: "Цифры, которые поддерживают впечатление",
    statsLead: "Премиальный дизайн ощущается визуально, но уверенность клиента усиливают и реальные показатели процесса.",
    stats: [[180, "+", "Завершённых дизайн-проектов"], [96, "%", "Клиентов рекомендуют повторно"], [5, "+", "Лет в графическом дизайне"], [72, "%", "Повторных обращений и доупаковок"]],
    processTitle: "Как строится работа",
    processLead: "Процесс быстрый, прозрачный и заточен под результат: от первого сообщения до финальной выдачи в нужных форматах.",
    process: [
      [MessageCircleMore, "Запрос в Telegram", "Вы пишете задачу, отправляете референсы и описываете, какой уровень подачи нужен бренду, профилю или проекту."],
      [Sparkles, "Концепт и направление", "Фиксируется стиль, драматургия, настроение, визуальные акценты и формат: static, motion или полная упаковка."],
      [BadgeCheck, "Финализация и выдача", "После согласования и правок вы получаете готовый дизайн-пакет, адаптированный под ваши площадки и задачи."],
    ],
    portfolioTitle: "Кейсы и визуальные сценарии",
    portfolioLead: "Здесь важен не просто красивый рендер, а то, как дизайн повышает ощущение уровня, узнаваемость и уверенность клиента.",
    portfolio: [
      ["Nova Profile System", "Flagship Avatar + Banner", "Контент-креатор / gaming brand", "Собран агрессивно-чистый образ с кинематографичным светом и мощным силуэтом.", "Аватарка, статический баннер, набор адаптаций", "Профиль стал визуально цельным и заметно дороже по восприятию", "/cases/nova-cover.webp", "/cases/nova-detail.webp", "Avatar Focus"],
      ["Astra Forge Identity", "Logo + Motion Identity", "Digital studio / startup", "Разработана эмблема с футуристичной геометрией и короткая motion-версия для промо.", "Логотип, анимированный логотип, бренд-носители", "Бренд получил узнаваемый знак и более сильную презентацию перед клиентами", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Identity Frame"],
      ["Orbit Market Launch", "Landing + Product Cards", "E-commerce / digital product", "Создан лендинг и карточки товаров в единой high-end эстетике с упором на конверсию.", "Лендинг, карточки товаров, превью, баннеры", "Визуальная упаковка помогла поднять CTR и сделать бренд целостным", "/cases/orbit-cover.webp", "/cases/orbit-detail.webp", "Launch Preview"],
      ["Void Stream Persona", "Animated Avatar + Stream Pack", "Стример / creator brand", "Построен выразительный sci-fi образ для канала с акцентом на динамику, контраст и узнаваемый силуэт.", "Анимированная аватарка, стартовый stream pack, адаптации для соцсетей", "Бренд канала стал заметнее и сильнее считывался как премиальный", "/cases/nova-cover.webp", "/cases/nova-detail.webp", "Motion Pulse"],
      ["Helix Commerce Identity", "Product Cards + Banner System", "Marketplace / e-commerce", "Собрана система карточек и баннеров с технологичной подачей и чистой иерархией оффера.", "Карточки товаров, рекламные баннеры, превью и единый визуальный сет", "Упаковка усилила доверие к продукту и улучшила общее восприятие магазина", "/cases/orbit-cover.webp", "/cases/orbit-detail.webp", "Commerce Deck"],
      ["Zenith Guild Pack", "Full Project Packaging", "Gaming team / community", "Разработан полный набор оформления для команды: от аватарки до баннеров и стилистики профилей.", "Аватарка, баннер, логотип, оформление Discord и соцсетей", "Проект получил цельный стиль и стал выглядеть как серьёзный digital-бренд", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Guild System"],
      ["Pulse Motion Badge", "Animated Logo + Emoji", "Digital product / creator", "Создан лаконичный motion-знак и анимированные эмодзи для более живой и дорогой подачи бренда.", "Анимированный логотип, эмодзи, короткие motion-адаптации", "Коммуникация бренда стала более живой и визуально запоминающейся", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Motion Badge"],
      ["Nebula Seller Launch", "Landing + Banner Suite", "Marketplace seller / launch", "Сделан лендинг для запуска и связка баннеров под рекламу, карточки и соцсети.", "Лендинг, баннеры, превью, promo visuals", "Запуск получил более сильную визуальную упаковку и высокий уровень подачи", "/cases/orbit-cover.webp", "/cases/orbit-detail.webp", "Launch Grid"],
      ["Solaris Brand Frame", "Static Logo + Identity", "Boutique studio / service brand", "Разработан строгий знак и минималистичная айдентика с космическим premium-tech характером.", "Статический логотип, базовая айдентика, носители и style direction", "Бренд стал выглядеть дороже и увереннее в точках контакта", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Brand Frame"],
      ["Rift Profile Upgrade", "Avatar + Social Packaging", "Личный бренд / эксперт", "Переосмыслен визуальный образ профиля с упором на статус, чистоту и современный digital-вес.", "Аватарка, обложки, social packaging, адаптации", "Профиль стал целостным и заметно сильнее по первому впечатлению", "/cases/nova-cover.webp", "/cases/nova-detail.webp", "Profile Upgrade"],
    ],
    testimonialsTitle: "Что говорят клиенты",
    testimonialsLead: "Когда дизайн выглядит дорого, это чувствуют и аудитория, и сам владелец бренда. Ниже — тональность отзывов, с которой к Rival Design возвращаются снова.",
    testimonials: [
      ["Максим В.", "Streamer / personal brand", "Нужна была не просто аватарка, а образ, который считывается как сильный и дорогой. Rival Design попал ровно в это ощущение."],
      ["Elena R.", "Founder / niche studio", "Очень понравилось, что всё выглядело не как типичный шаблонный дизайн, а как продуманная система с характером."],
      ["Денис К.", "Marketplace seller", "После полной упаковки проект стал восприниматься намного серьёзнее. И карточки, и баннеры, и подача стали на другом уровне."],
    ],
    pricingTitle: "Форматы сотрудничества",
    pricingLead: "Пакеты собраны так, чтобы можно было зайти через одну ключевую услугу или сразу собрать полный визуальный апгрейд проекта.",
    pricing: [
      ["Orbit Start", "от $120", "Для быстрого входа", "Когда нужен один сильный носитель, который сразу поднимет восприятие профиля или бренда.", ["1 ключевая услуга на выбор", "Статическая аватарка или логотип", "Стилистическое направление под задачу", "Базовые правки"], false],
      ["Nebula Pro", "от $280", "Самый популярный", "Оптимальный пакет для тех, кто хочет сильную визуальную связку и готовую систему подачи.", ["Аватарка + баннер / логотип", "Можно включить motion-элемент", "Более глубокая проработка образа", "Приоритетный фокус на брендинге"], true],
      ["Rival Signature", "от $550", "Под ключ", "Полная упаковка проекта с единым визуальным кодом и сильной конверсионной эстетикой.", ["Полная упаковка проекта", "Аватарка, баннеры, соцсети, носители", "Landing / product cards / identity", "Расширенный пакет правок и адаптаций"], false],
    ],
    faqTitle: "FAQ",
    faqLead: "Ключевые вопросы, которые чаще всего появляются перед стартом работы с Rival Design.",
    faq: [
      ["Что нужно для старта?", "Достаточно написать в Telegram, кратко описать задачу, нишу, площадку, желаемый стиль и приложить референсы."],
      ["Сколько занимает работа?", "Срок зависит от объёма: отдельная аватарка делается быстрее, комплексная упаковка проекта занимает больше времени."],
      ["Есть ли правки?", "Да, правки предусмотрены. Процесс выстроен так, чтобы довести решение до сильного финала."],
      ["Делаете ли анимацию?", "Да. Rival Design делает анимированные аватарки, баннеры, логотипы и эмодзи."],
      ["Можно ли заказать проект под ключ?", "Да, можно собрать единую систему из аватарки, баннера, оформления соцсетей, логотипа, лендинга и других носителей."],
      ["Где идёт коммуникация?", "Основной и самый быстрый канал связи — Telegram."],
    ],
    ctaTitle: "Пора сделать визуал, который ощущается как уровень",
    ctaDesc: "Если вам нужен не просто дизайн, а сильный premium-образ с акцентом на аватарки, motion и статусную подачу — напишите в Telegram и обсудим ваш проект.",
    ctaPrimary: "Написать в Telegram",
    ctaSecondary: "Посмотреть кейсы",
    footer: ["Rival Design — космический premium-tech дизайн-бренд для аватарок, брендинга, motion-графики и полной визуальной упаковки.", "Услуги", "Навигация", "Контакты", "Основной канал — Telegram", "© 2026 Rival Design. All rights reserved."],
  },
  en: {
    nav: [["Features", "features"], ["Services", "services"], ["Cases", "portfolio"], ["Packages", "pricing"], ["FAQ", "faq"]],
    hero: {
      eyebrow: "Premium graphic identity for creators, brands and digital projects",
      titleA: "Rival Design creates",
      titleB: "avatars that feel like status",
      desc: "A cosmic design brand for clients who need a stronger visual presence: flagship avatars, premium branding, motion graphics and full-scope visual packaging.",
      primary: "Discuss the project in Telegram",
      secondary: "Explore services",
      badges: [["Flagship", "Avatar Design"], ["Workflow", "RU / EN • Telegram-first"], ["Approach", "Premium static + motion"]],
      side: ["For brands and profiles that need visual authority", "Precise, expensive-looking and technological by design"],
    },
    featuresTitle: "Why clients choose Rival Design",
    featuresLead: "Every section, asset and interaction is built to increase presence, trust and the urge to reach out before scrolling ends.",
    features: [
      [Crown, "Avatar-first expertise", "Rival Design is built around flagship avatar design that upgrades the perceived level of a brand, creator, project or profile."],
      [Layers3, "Premium visual consistency", "From logo and banner to social presence and landing pages, everything is aligned into one coherent high-end system."],
      [Orbit, "Static + motion in one language", "Still and animated assets are designed inside the same visual code, so the brand feels expensive everywhere."],
      [WandSparkles, "Custom creative direction", "No generic templates. Every concept is tailored to the client, niche, audience and the level of authority required."],
      [Rocket, "Packaging for growth", "The goal is not only to look beautiful, but to improve perception, credibility and presentation power."],
      [Zap, "Clear Telegram workflow", "Fast communication through Telegram keeps the process focused, responsive and easy from concept to final delivery."],
    ],
    servicesTitle: "What Rival Design delivers",
    servicesLead: "Avatars are the flagship. But the real premium effect happens when every visual touchpoint speaks the same elevated language.",
    serviceGroups: [
      ["Flagship: Avatars", "Core specialization", ["Static Avatar", "Animated Avatar"]],
      ["Static Design", "Pure form, premium presentation", ["Static Banner", "Preview", "Product Card", "Static Logo", "Landing Page"]],
      ["Motion Design", "Movement with purpose", ["Animated Banner", "Animated Logo", "Animated Emoji"]],
      ["Full Project Packaging", "End-to-end visual system", ["Full project packaging", "Avatar + banner + social/forum styling", "Branding and identity system"]],
    ],
    statsTitle: "Numbers that support the impression",
    statsLead: "Premium design is felt instantly, but confidence grows even more when the workflow is backed by strong metrics.",
    stats: [[180, "+", "Completed design projects"], [96, "%", "Clients willing to recommend again"], [5, "+", "Years in graphic design"], [72, "%", "Repeat requests and additional packaging"]],
    processTitle: "How the workflow works",
    processLead: "Fast, clear and result-driven from the first message to the final files prepared for your exact platforms and use cases.",
    process: [
      [MessageCircleMore, "Telegram request", "You send the brief, references and explain the visual level needed for your brand, project, profile or launch."],
      [Sparkles, "Concept direction", "We define style, intensity, mood, visual hierarchy and whether the best fit is static, motion or full packaging."],
      [BadgeCheck, "Final delivery", "After revisions and approval, you receive polished assets prepared for real use across your channels and formats."],
    ],
    portfolioTitle: "Selected cases and visual scenarios",
    portfolioLead: "The goal is not just to show a polished render, but to prove how design upgrades perceived quality, trust and memorability.",
    portfolio: [
      ["Nova Profile System", "Flagship Avatar + Banner", "Content creator / gaming brand", "Built an aggressive-clean identity with cinematic lighting and a strong silhouette.", "Avatar, static banner, adaptation set", "The profile became more cohesive and noticeably more premium in perception", "/cases/nova-cover.webp", "/cases/nova-detail.webp", "Avatar Focus"],
      ["Astra Forge Identity", "Logo + Motion Identity", "Digital studio / startup", "Designed a futuristic emblem and a short animated version for promos.", "Logo, animated logo, brand assets", "The brand gained a memorable mark and a stronger client-facing presentation", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Identity Frame"],
      ["Orbit Market Launch", "Landing + Product Cards", "E-commerce / digital product", "Created a landing page and product cards in one high-end aesthetic focused on conversion.", "Landing page, product cards, previews, banners", "The visual package helped increase CTR and made the brand feel fully assembled", "/cases/orbit-cover.webp", "/cases/orbit-detail.webp", "Launch Preview"],
      ["Void Stream Persona", "Animated Avatar + Stream Pack", "Streamer / creator brand", "Built a strong sci-fi identity for a channel with more motion, contrast and a memorable silhouette.", "Animated avatar, starter stream pack, social adaptations", "The channel brand became more distinctive and much more premium in perception", "/cases/nova-cover.webp", "/cases/nova-detail.webp", "Motion Pulse"],
      ["Helix Commerce Identity", "Product Cards + Banner System", "Marketplace / e-commerce", "Created a card and banner system with a technological feel and clean offer hierarchy.", "Product cards, advertising banners, previews and a unified visual set", "The packaging improved trust and elevated the perceived quality of the store", "/cases/orbit-cover.webp", "/cases/orbit-detail.webp", "Commerce Deck"],
      ["Zenith Guild Pack", "Full Project Packaging", "Gaming team / community", "Built a full visual package for a team, from avatar and banners to social and community styling.", "Avatar, banner, logo, Discord styling and social assets", "The project gained a cohesive style and started to feel like a serious digital brand", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Guild System"],
      ["Pulse Motion Badge", "Animated Logo + Emoji", "Digital product / creator", "Designed a concise motion mark and animated emoji for a sharper, more premium brand presence.", "Animated logo, emoji pack, short motion adaptations", "Brand communication became more lively and visually memorable", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Motion Badge"],
      ["Nebula Seller Launch", "Landing + Banner Suite", "Marketplace seller / launch", "Created a launch landing page and a supporting banner suite for ads, cards and socials.", "Landing page, banners, previews and promo visuals", "The launch gained stronger visual packaging and a more elevated presentation", "/cases/orbit-cover.webp", "/cases/orbit-detail.webp", "Launch Grid"],
      ["Solaris Brand Frame", "Static Logo + Identity", "Boutique studio / service brand", "Developed a strict mark and a minimal identity with a premium cosmic-tech character.", "Static logo, base identity, brand assets and style direction", "The brand started to look more expensive and confident across touchpoints", "/cases/astra-cover.webp", "/cases/astra-detail.webp", "Brand Frame"],
      ["Rift Profile Upgrade", "Avatar + Social Packaging", "Personal brand / expert", "Rebuilt the profile image around status, clarity and stronger digital presence.", "Avatar, covers, social packaging and format adaptations", "The profile became more cohesive and far stronger at first impression", "/cases/nova-cover.webp", "/cases/nova-detail.webp", "Profile Upgrade"],
    ],
    testimonialsTitle: "Client impressions",
    testimonialsLead: "When design feels expensive, both the audience and the brand owner notice it. That is why clients return to Rival Design.",
    testimonials: [
      ["Max V.", "Streamer / personal brand", "I did not need just another avatar. I needed something with authority. Rival Design nailed that exact feeling."],
      ["Elena R.", "Founder / niche studio", "Nothing felt generic. It looked like a real visual system with taste, clarity and character."],
      ["Denis K.", "Marketplace seller", "After the full package, the whole project felt more serious. The cards, banners and overall presentation moved to another level."],
    ],
    pricingTitle: "Collaboration formats",
    pricingLead: "You can start with one hero asset or choose a deeper package that upgrades the full visual system of the project.",
    pricing: [
      ["Orbit Start", "from $120", "Entry format", "Best when one high-impact asset is enough to immediately improve perception and presentation.", ["One core service of your choice", "Static avatar or logo", "Direction built around your goal", "Base revision cycle"], false],
      ["Nebula Pro", "from $280", "Most popular", "A strong choice for clients who want a connected system and a noticeably more premium brand image.", ["Avatar + banner / logo bundle", "Motion element can be included", "Deeper creative development", "Higher focus on brand presentation"], true],
      ["Rival Signature", "from $550", "Full packaging", "A complete project upgrade with a unified visual code and conversion-ready presentation.", ["Full visual packaging", "Avatar, banners, socials and assets", "Landing / product cards / identity", "Extended revisions and adaptations"], false],
    ],
    faqTitle: "FAQ",
    faqLead: "The key questions that usually come up before a project starts with Rival Design.",
    faq: [
      ["What do you need to start?", "A message in Telegram is enough. Describe the task, niche, platform, preferred style and send references if you have them."],
      ["How long does a project take?", "Timing depends on the scope. A single avatar is faster, while full packaging naturally takes longer."],
      ["Are revisions included?", "Yes. Revisions are part of the process, and the goal is always to reach a strong final result."],
      ["Do you create animated assets?", "Yes. Rival Design creates animated avatars, banners, logos and emoji when the project benefits from motion."],
      ["Can I order a full project package?", "Absolutely. A full package can include avatars, banners, social styling, identity, landing pages and more."],
      ["Where does communication happen?", "Telegram is the main communication channel."],
    ],
    ctaTitle: "Time to make your visuals feel like authority",
    ctaDesc: "If you need more than just design and want a premium visual identity with avatar focus, motion energy and high-end presentation, reach out in Telegram.",
    ctaPrimary: "Contact in Telegram",
    ctaSecondary: "View cases",
    footer: ["Rival Design is a premium cosmic design brand for avatars, branding, motion graphics and full visual packaging.", "Services", "Navigation", "Contacts", "Primary contact channel — Telegram", "© 2026 Rival Design. All rights reserved."],
  },
};

const STARS = Array.from({ length: 5 });

const initials = (name) => name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

const OrbitalMark = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    style={{ display: "block", filter: "drop-shadow(0 0 10px rgba(255,255,255,.22)) drop-shadow(0 0 18px rgba(103,232,249,.14))" }}
  >
    <circle cx="32" cy="32" r="15.5" fill="#050608" />
    <circle cx="32" cy="32" r="19.5" stroke="rgba(255,255,255,.14)" strokeWidth="1.25" />
    <path
      d="M32 11.5c-10.8 0-19.5 8.7-19.5 19.5S21.2 50.5 32 50.5 51.5 41.8 51.5 31 42.8 11.5 32 11.5Zm0 6.2c7.37 0 13.3 5.93 13.3 13.3S39.37 44.3 32 44.3 18.7 38.37 18.7 31 24.63 17.7 32 17.7Z"
      fill="#F6F8FB"
    />
    <path
      d="M10 53.4 49.6 10.6c1.5-1.62 3.95-1.79 5.66-.39 1.7 1.39 2.07 3.88.84 5.71L18.1 54.26c-1.48 1.81-4.11 2.13-5.98.73-1.88-1.41-2.26-4.08-.86-5.99Z"
      fill="url(#orbitalSlash)"
    />
    <path
      d="M15 51.8 52.8 13"
      stroke="rgba(255,255,255,.38)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="orbitalSlash" x1="13.2" y1="51.8" x2="53.9" y2="12.1" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" stopOpacity=".02" />
        <stop offset=".18" stopColor="#D6D9DE" />
        <stop offset=".5" stopColor="#636972" />
        <stop offset=".82" stopColor="#EEF2F7" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity=".04" />
      </linearGradient>
    </defs>
  </svg>
);

function Reveal({ as: Tag = "div", className = "", style, threshold = 0.18, children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  );
}

function SectionTitle({ id, title, lead }) {
  return (
    <section id={id} className="px-4 pb-6 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{title}</h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-white/[0.66]">{lead}</p>
      </Reveal>
    </section>
  );
}

function SectionShell({ tone = "cyan", className = "", children }) {
  const toneClass =
    tone === "violet"
      ? "from-violet-400/16 via-indigo-400/10 to-transparent"
      : tone === "mixed"
        ? "from-cyan-300/14 via-indigo-400/10 to-transparent"
        : "from-cyan-300/14 via-sky-300/10 to-transparent";

  return (
    <div className={`relative ${className}`}>
      <div className={`pointer-events-none absolute inset-x-0 top-10 h-40 rounded-[2.25rem] bg-gradient-to-br ${toneClass} blur-3xl`} />
      <div className="pointer-events-none absolute left-10 top-20 h-2 w-2 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.8)]" />
      <div className="pointer-events-none absolute right-16 top-16 h-3 w-3 rounded-full bg-cyan-300/70 shadow-[0_0_22px_rgba(103,232,249,0.6)]" />
      <div className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      {children}
    </div>
  );
}

function ShowcaseImage({ src, alt, className = "", fallbackSrc }) {
  const variants = [src];
  if (src?.startsWith("/cases/")) variants.push(src.replace("/cases/", "/"));
  if (fallbackSrc) {
    variants.push(fallbackSrc);
    if (fallbackSrc.startsWith("/cases/")) variants.push(fallbackSrc.replace("/cases/", "/"));
  }

  const uniqueVariants = variants.filter((value, index, arr) => value && arr.indexOf(value) === index);
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    setVariantIndex(0);
  }, [src, fallbackSrc]);

  const activeSrc = uniqueVariants[variantIndex];
  const failed = !activeSrc;

  if (!src || failed) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.18),transparent_30%),radial-gradient(circle_at_72%_18%,rgba(129,140,248,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
        <div className="stellar-ring absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" />
        <div className="absolute left-[18%] top-[24%] h-2.5 w-2.5 rounded-full bg-cyan-300/85 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
        <div className="absolute right-[20%] top-[34%] h-2.5 w-2.5 rounded-full bg-indigo-300/85 shadow-[0_0_18px_rgba(165,180,252,0.7)]" />
      </div>
    );
  }

  return (
    <img
      src={activeSrc}
      alt={alt}
      className={className}
      onError={() => {
        setVariantIndex((current) => {
          if (current < uniqueVariants.length - 1) return current + 1;
          return uniqueVariants.length;
        });
      }}
    />
  );
}

function CaseShowcase({ title, label, primaryImage, secondaryImage, featured }) {
  return (
    <div className={`case-stage relative overflow-hidden border-b border-white/10 ${featured ? "h-[25rem] sm:h-[30rem]" : "h-[21rem] sm:h-[24rem]"}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="planet-core absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55" />
      <div className="stellar-ring absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />
      <div className="stellar-ring absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
      <div className="ambient-beam absolute left-[8%] top-8 h-44 w-20 rotate-[16deg]" />
      <div className="ambient-beam absolute right-[12%] top-16 h-52 w-24 -rotate-[20deg]" />

      <div className="absolute left-5 top-5 z-20 rounded-full border border-cyan-300/15 bg-black/25 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/72 backdrop-blur-md">
        {label}
      </div>

      <div className={`case-window-main absolute left-5 top-12 z-10 overflow-hidden rounded-[1.7rem] p-3 ${featured ? "right-24 bottom-8 sm:right-28 sm:rotate-[-5deg]" : "right-16 bottom-7 sm:right-20 sm:rotate-[-4deg]"}`}>
        <ShowcaseImage src={primaryImage} fallbackSrc={secondaryImage} alt={title} className="h-full w-full rounded-[1.2rem] object-cover" />
        <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
          <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/45">{featured ? "Primary scene" : "Primary frame"}</p>
          <p className="mt-2 text-sm font-semibold text-white">{title}</p>
        </div>
      </div>

      <div className={`case-window-detail absolute right-4 top-9 z-20 w-[34%] overflow-hidden rounded-[1.45rem] p-2 ${featured ? "max-w-[13rem] sm:rotate-[7deg]" : "max-w-[10rem] sm:rotate-[6deg]"}`}>
        <ShowcaseImage src={secondaryImage} fallbackSrc={primaryImage} alt={`${title} detail`} className="aspect-[4/5] w-full rounded-[1rem] object-cover" />
        <div className="mt-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
          <p className="text-[0.54rem] uppercase tracking-[0.2em] text-cyan-100/60">Detail window</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-20 grid gap-3 sm:grid-cols-3">
        {[
          ["View", featured ? "Hero composition" : "Case scene"],
          ["Mode", "Layered preview"],
          ["Format", "Image-ready showcase"],
        ].map(([k, v], idx) => (
          <div key={k} className={`data-rail rounded-2xl px-4 py-3 ${idx === 1 ? "sm:translate-y-4" : ""}`}>
            <p className="text-[0.54rem] uppercase tracking-[0.2em] text-white/42">{k}</p>
            <p className="mt-2 text-xs font-semibold text-white/84">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);

    updateEnabled();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateEnabled);
      return () => media.removeEventListener("change", updateEnabled);
    }

    media.addListener(updateEnabled);
    return () => media.removeListener(updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("custom-cursor-active");
      return undefined;
    }

    document.body.classList.add("custom-cursor-active");

    const isInteractive = (target) =>
      Boolean(
        target?.closest(
          'a, button, [role="button"], input, textarea, select, summary, .cta-button, .interactive-ring',
        ),
      );

    const onMove = (event) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
      setHovered(isInteractive(event.target));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      setVisible(false);
      setHovered(false);
      setPressed(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[120] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div
        className={`custom-cursor-ring absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${hovered ? "is-hovered" : ""} ${pressed ? "is-pressed" : ""}`}
      >
        <span className="custom-cursor-cross custom-cursor-cross-x" />
        <span className="custom-cursor-cross custom-cursor-cross-y" />
        <span className="custom-cursor-core" />
      </div>
      <div className={`custom-cursor-aura absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${hovered ? "is-hovered" : ""}`} />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [statsOn, setStatsOn] = useState(false);
  const t = CONTENT[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const statsNode = document.getElementById("stats");
    if (!statsNode) return undefined;
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setStatsOn(true));
      },
      { threshold: 0.35 },
    );
    statsObserver.observe(statsNode);
    return () => statsObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!statsOn) return undefined;
    const timers = t.stats.map(([value], index) => {
      const steps = 80;
      const delta = value / steps;
      let step = 0;
      return window.setInterval(() => {
        step += 1;
        setCounts((prev) => {
          const next = [...prev];
          next[index] = step >= steps ? value : Math.round(step * delta);
          return next;
        });
      }, 25);
    });
    const stop = window.setTimeout(() => timers.forEach(clearInterval), 2100);
    return () => {
      timers.forEach(clearInterval);
      clearTimeout(stop);
    };
  }, [statsOn, t.stats]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const go = (id) => {
    const node = document.getElementById(id);
    if (!node) return;
    window.scrollTo({ top: node.getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="cursor-host min-h-screen overflow-x-hidden bg-[#08080f] text-white"
      style={{
        backgroundColor: "var(--bg-primary)",
        colorScheme: "dark",
        fontFamily: '"Plus Jakarta Sans", "Segoe UI", sans-serif',
        "--bg-primary": "#040816",
        "--accent-from": "#67e8f9",
        "--accent-to": "#8b5cf6",
        "--card-bg": "rgba(255,255,255,0.06)",
        "--border": "rgba(255,255,255,0.14)",
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        body { background: #040816; }
        .rival-grid { background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 120px 120px; mask-image: radial-gradient(circle at center, black 40%, transparent 92%); }
        .rival-starfield { background-image: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.75) 0 1px, transparent 1.5px), radial-gradient(circle at 80% 24%, rgba(255,255,255,0.55) 0 1px, transparent 1.4px), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.35) 0 1px, transparent 1.3px), radial-gradient(circle at 35% 65%, rgba(255,255,255,0.3) 0 1px, transparent 1.2px), radial-gradient(circle at 72% 52%, rgba(255,255,255,0.48) 0 1px, transparent 1.3px); opacity: 0.32; animation: drift 18s ease-in-out infinite alternate; }
        .hero-video-overlay { background: linear-gradient(180deg, rgba(4, 8, 22, 0.24), rgba(4, 8, 22, 0.82) 58%, #040816 100%), radial-gradient(circle at top center, rgba(103, 232, 249, 0.18), transparent 36%), radial-gradient(circle at 75% 20%, rgba(139, 92, 246, 0.16), transparent 24%), radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.08), transparent 18%); }
        .hero-shine::before { content: ""; position: absolute; inset: -20%; background: conic-gradient(from 180deg at 50% 50%, transparent, rgba(103,232,249,0.18), rgba(139,92,246,0.12), transparent 44%); filter: blur(22px); animation: spinSlow 16s linear infinite; }
        .cosmic-blob { animation: floatBlob 11s ease-in-out infinite; filter: blur(10px); }
        .hero-reveal { opacity: 0; transform: translateY(30px); animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .reveal { opacity: 0; transform: translateY(36px) scale(0.985); transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s ease; filter: blur(10px); }
        .reveal.is-visible { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        .glass-card { background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.045)); border: 1px solid rgba(255,255,255,0.12); box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.34); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease; }
        .glass-card:hover { transform: translateY(-6px) scale(1.02); border-color: rgba(103, 232, 249, 0.34); box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(103,232,249,0.12), 0 28px 90px rgba(0,0,0,0.46), 0 0 42px rgba(99,102,241,0.16); }
        .cta-button { transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, background-color 0.28s ease; }
        .cta-button:hover { transform: scale(1.05); box-shadow: 0 0 34px rgba(103, 232, 249, 0.24); }
        .cta-button:focus-visible, .interactive-ring:focus-visible { outline: none; box-shadow: 0 0 0 2px rgba(4, 8, 22, 0.95), 0 0 0 4px rgba(103, 232, 249, 0.75); }
        .border-glow { position: relative; overflow: hidden; }
        .border-glow::after { content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.24), rgba(103,232,249,0.34), rgba(129,140,248,0.24), transparent 70%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; opacity: 0.9; }
        .process-line { background: linear-gradient(90deg, rgba(103,232,249,0.45), rgba(129,140,248,0.3), rgba(255,255,255,0.14)); }
        .drawer-panel { transition: transform 0.36s cubic-bezier(0.22, 1, 0.36, 1); }
        .faq-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.35s ease; }
        .faq-panel.open { grid-template-rows: 1fr; }
        .faq-panel > div { overflow: hidden; }
        .nebula-panel { background: radial-gradient(circle at 20% 20%, rgba(103,232,249,0.16), transparent 30%), radial-gradient(circle at 80% 22%, rgba(129,140,248,0.18), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04)); }
        .orbital-ring { border: 1px solid rgba(103,232,249,0.24); box-shadow: 0 0 40px rgba(99,102,241,0.12), inset 0 0 18px rgba(103,232,249,0.08); animation: spinSlow 24s linear infinite; }
        .floating-chip { animation: floatChip 6.5s ease-in-out infinite; }
        .shooting-line { animation: meteor 7s linear infinite; }
        .cosmic-card {
          background:
            radial-gradient(circle at 10% 10%, rgba(103,232,249,0.1), transparent 24%),
            radial-gradient(circle at 90% 0%, rgba(129,140,248,0.12), transparent 26%),
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 20px 70px rgba(0,0,0,0.3);
          backdrop-filter: blur(18px);
        }
        .cosmic-card:hover {
          border-color: rgba(103,232,249,0.28);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.1),
            0 24px 84px rgba(0,0,0,0.34),
            0 0 42px rgba(99,102,241,0.14);
        }
        .section-divider {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
        }
        .stellar-ring {
          border: 1px dashed rgba(255,255,255,0.12);
          animation: spinSlow 28s linear infinite;
        }
        .cosmic-shell {
          background:
            radial-gradient(circle at top left, rgba(103,232,249,0.14), transparent 26%),
            radial-gradient(circle at top right, rgba(129,140,248,0.16), transparent 30%),
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 24px 80px rgba(0,0,0,0.34);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }
        .luxury-panel {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03)),
            radial-gradient(circle at 18% 18%, rgba(103,232,249,0.12), transparent 24%);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 18px 50px rgba(0,0,0,0.24);
          backdrop-filter: blur(16px);
        }
        .planet-core {
          background:
            radial-gradient(circle at 34% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.3) 9%, rgba(103,232,249,0.3) 20%, rgba(99,102,241,0.28) 42%, rgba(11,17,33,0.16) 60%, rgba(11,17,33,0) 72%);
          box-shadow:
            0 0 80px rgba(103,232,249,0.16),
            0 0 180px rgba(99,102,241,0.12);
          filter: saturate(115%);
        }
        .ambient-beam {
          background: linear-gradient(180deg, rgba(103,232,249,0.18), rgba(129,140,248,0.08), transparent 82%);
          filter: blur(18px);
          opacity: 0.7;
        }
        .service-orbit {
          background:
            radial-gradient(circle at center, rgba(103,232,249,0.08), transparent 45%),
            linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.1);
        }
        .case-stage {
          background:
            radial-gradient(circle at 20% 15%, rgba(103,232,249,0.22), transparent 24%),
            radial-gradient(circle at 76% 20%, rgba(129,140,248,0.22), transparent 26%),
            radial-gradient(circle at 50% 100%, rgba(255,255,255,0.06), transparent 34%),
            linear-gradient(180deg, rgba(6,11,24,0.86), rgba(4,7,16,0.98));
        }
        .case-window-main,
        .case-window-detail {
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 22px 60px rgba(0,0,0,0.32);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .case-window-main::after,
        .case-window-detail::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.14), transparent 34%, transparent 70%, rgba(103,232,249,0.08));
          pointer-events: none;
        }
        .data-rail {
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(16px);
        }
        .signal-dot {
          box-shadow: 0 0 16px currentColor;
        }
        .pulse-star { animation: pulseStar 4.2s ease-in-out infinite; }
        .custom-cursor-ring {
          position: relative;
          height: 1.7rem;
          width: 1.7rem;
          border-radius: 999px;
          border: 1px solid rgba(170, 226, 255, 0.7);
          background: radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,255,255,0.015) 52%, transparent 72%);
          box-shadow: 0 0 14px rgba(103,232,249,0.12), inset 0 0 8px rgba(129,140,248,0.07);
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
          backdrop-filter: blur(8px);
        }
        .custom-cursor-ring::before {
          content: "";
          position: absolute;
          inset: 5px;
          border-radius: inherit;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .custom-cursor-ring.is-hovered {
          transform: translate(-50%, -50%) scale(1.12);
          border-color: rgba(196, 208, 255, 0.92);
          box-shadow: 0 0 18px rgba(103,232,249,0.16), 0 0 32px rgba(129,140,248,0.08), inset 0 0 12px rgba(255,255,255,0.08);
        }
        .custom-cursor-ring.is-pressed {
          transform: translate(-50%, -50%) scale(0.86);
        }
        .custom-cursor-core {
          position: absolute;
          left: 50%;
          top: 50%;
          height: 4px;
          width: 4px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(103,232,249,0.92));
          box-shadow: 0 0 8px rgba(103,232,249,0.62);
        }
        .custom-cursor-cross {
          position: absolute;
          left: 50%;
          top: 50%;
          display: block;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(164,230,255,0.82), rgba(255,255,255,0.04));
          transform: translate(-50%, -50%);
          opacity: 0.78;
        }
        .custom-cursor-cross-x {
          height: 1px;
          width: 1.15rem;
        }
        .custom-cursor-cross-y {
          height: 1.15rem;
          width: 1px;
        }
        .custom-cursor-aura {
          height: 2.7rem;
          width: 2.7rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(103,232,249,0.12), rgba(103,232,249,0.03) 42%, transparent 72%);
          filter: blur(8px);
          transition: transform 180ms ease, opacity 180ms ease;
          opacity: 0.42;
        }
        .custom-cursor-aura.is-hovered {
          transform: translate(-50%, -50%) scale(1.08);
          opacity: 0.62;
        }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(26px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes floatBlob { 0%, 100% { transform: translate3d(0, 0, 0) scale(1); } 50% { transform: translate3d(20px, -26px, 0) scale(1.08); } }
        @keyframes drift { 0% { transform: translate3d(0, 0, 0) scale(1); } 100% { transform: translate3d(0, -18px, 0) scale(1.02); } }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes floatChip { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes meteor { 0% { transform: translateX(-20%) translateY(0); opacity: 0; } 15% { opacity: 1; } 100% { transform: translateX(110%) translateY(22px); opacity: 0; } }
        @keyframes pulseStar { 0%,100% { opacity: 0.45; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1.12); } }
        @media (hover: hover) and (pointer: fine) {
          .custom-cursor-active .cursor-host,
          .custom-cursor-active .cursor-host a,
          .custom-cursor-active .cursor-host button,
          .custom-cursor-active .cursor-host [role="button"] {
            cursor: none !important;
          }
        }
        @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } .hero-reveal, .reveal, .glass-card, .cta-button, .cosmic-blob, .rival-starfield, .hero-shine::before, .custom-cursor-ring, .custom-cursor-aura { animation: none !important; transition: none !important; transform: none !important; filter: none !important; opacity: 1 !important; } }
      `}</style>

      <CustomCursor />
      <BackgroundLayer />
      <Navbar t={t} lang={lang} setLang={setLang} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} go={go} />

      <main>
        <Hero hero={t.hero} go={go} />
        <SectionTitle id="features" title={t.featuresTitle} lead={t.featuresLead} />
        <Features items={t.features} />
        <SectionTitle id="services" title={t.servicesTitle} lead={t.servicesLead} />
        <Services groups={t.serviceGroups} lang={lang} />
        <SectionTitle id="stats" title={t.statsTitle} lead={t.statsLead} />
        <Stats items={t.stats} counts={counts} lang={lang} />
        <SectionTitle id="process" title={t.processTitle} lead={t.processLead} />
        <Process items={t.process} />
        <SectionTitle id="portfolio" title={t.portfolioTitle} lead={t.portfolioLead} />
        <Portfolio items={t.portfolio} lang={lang} />
        <SectionTitle id="testimonials" title={t.testimonialsTitle} lead={t.testimonialsLead} />
        <Testimonials items={t.testimonials} />
        <SectionTitle id="pricing" title={t.pricingTitle} lead={t.pricingLead} />
        <Pricing items={t.pricing} lang={lang} />
        <SectionTitle id="faq" title={t.faqTitle} lead={t.faqLead} />
        <Faq items={t.faq} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
        <Cta title={t.ctaTitle} desc={t.ctaDesc} primary={t.ctaPrimary} secondary={t.ctaSecondary} go={go} lang={lang} />
      </main>

      <Footer t={t} lang={lang} setLang={setLang} go={go} />
    </div>
  );
}

function BackgroundLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="rival-grid absolute inset-0" />
      <div className="rival-starfield absolute inset-0" />
      <div className="ambient-beam absolute left-[8%] top-0 h-[32rem] w-32 rotate-[14deg]" />
      <div className="ambient-beam absolute right-[10%] top-[18rem] h-[26rem] w-28 -rotate-[12deg]" />
      <div className="cosmic-blob absolute left-[-8%] top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.22),_rgba(34,211,238,0.02)_70%,_transparent_100%)]" />
      <div className="cosmic-blob absolute right-[-6%] top-[22rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(129,140,248,0.2),_rgba(129,140,248,0.02)_68%,_transparent_100%)]" />
      <div className="cosmic-blob absolute bottom-24 left-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_rgba(255,255,255,0.01)_65%,_transparent_100%)]" />
      <div className="planet-core absolute right-[-8rem] top-[-3rem] h-[28rem] w-[28rem] rounded-full opacity-40" />
      <div className="shooting-line absolute left-[-10%] top-[12%] h-px w-48 rotate-[14deg] bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
      <div className="shooting-line absolute top-[38%] h-px w-40 rotate-[-18deg] bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent" style={{ animationDelay: "2.8s" }} />
    </div>
  );
}

function Navbar({ t, lang, setLang, scrolled, menuOpen, setMenuOpen, go }) {
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[rgba(9,10,17,0.78)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="interactive-ring group relative flex items-center p-0 text-left transition hover:scale-[1.03]"
            aria-label="Rival Design"
          >
            <span className="relative flex h-14 w-14 items-center justify-center">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.16),rgba(103,232,249,0.03)_48%,transparent_74%)] blur-md opacity-80" />
              <OrbitalMark size={28} />
            </span>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md lg:flex">
            {t.nav.map(([label, id]) => (
              <button key={id} type="button" onClick={() => go(id)} className="interactive-ring rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/[0.08] hover:text-white">{label}</button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              {["ru", "en"].map((locale) => (
                <button key={locale} type="button" onClick={() => setLang(locale)} className={`interactive-ring rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${lang === locale ? "bg-white text-[#08080f]" : "text-white/70 hover:text-white"}`}>{locale}</button>
              ))}
            </div>
            <a href={TG} target="_blank" rel="noreferrer" className="cta-button rounded-full border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(99,102,241,0.34))] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(56,189,248,0.16)]">Telegram</a>
          </div>

          <button type="button" onClick={() => setMenuOpen((p) => !p)} className="interactive-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/[0.55] backdrop-blur-md transition duration-300 lg:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen}>
        <aside className={`drawer-panel absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-white/10 bg-[rgba(12,13,20,0.92)] p-6 shadow-[0_0_60px_rgba(0,0,0,0.45)] ${menuOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="relative flex items-center">
              <span className="relative flex h-14 w-14 items-center justify-center">
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.16),rgba(103,232,249,0.03)_48%,transparent_74%)] blur-md opacity-80" />
                <OrbitalMark size={28} />
              </span>
            </div>
            <button type="button" onClick={() => setMenuOpen(false)} className="interactive-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"><X className="h-5 w-5" /></button>
          </div>
          <div className="mb-6 flex rounded-full border border-white/10 bg-white/5 p-1">
            {["ru", "en"].map((locale) => (
              <button key={locale} type="button" onClick={() => setLang(locale)} className={`interactive-ring flex-1 rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition ${lang === locale ? "bg-white text-[#08080f]" : "text-white/70"}`}>{locale}</button>
            ))}
          </div>
          <div className="space-y-2">
            {t.nav.map(([label, id]) => (
              <button key={id} type="button" onClick={() => go(id)} className="interactive-ring flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-left text-base font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white">
                {label}
                <MoveRight className="h-4 w-4" />
              </button>
            ))}
          </div>
          <a href={TG} target="_blank" rel="noreferrer" className="cta-button mt-8 flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(99,102,241,0.34))] px-5 py-4 text-sm font-semibold text-white shadow-[0_0_28px_rgba(56,189,248,0.16)]">
            Telegram
            <ArrowRight className="h-4 w-4" />
          </a>
        </aside>
      </div>
    </>
  );
}

function Hero({ hero, go }) {
  return (
    <section className="relative isolate min-h-dvh overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover" src="/space-bg.mp4" autoPlay muted loop playsInline />
        <div className="hero-video-overlay absolute inset-0" />
      </div>
      <div className="hero-shine pointer-events-none absolute left-1/2 top-40 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-90" />
      <div className="planet-core pointer-events-none absolute right-[-8rem] top-20 h-[34rem] w-[34rem] rounded-full opacity-60" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="cosmic-blob absolute left-[8%] top-[26%] h-36 w-36 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_rgba(255,255,255,0.02)_70%,_transparent_100%)]" />
        <div className="cosmic-blob absolute right-[12%] top-[22%] h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.18),_rgba(56,189,248,0.02)_70%,_transparent_100%)]" />
        <div className="cosmic-blob absolute bottom-[18%] left-[20%] h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_rgba(255,255,255,0.01)_70%,_transparent_100%)]" />
        <div className="ambient-beam absolute left-[16%] top-[18%] h-[24rem] w-24 rotate-[18deg]" />
        <div className="ambient-beam absolute right-[18%] top-[16%] h-[28rem] w-28 -rotate-[16deg]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-end gap-14 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:pt-16">
        <div className="max-w-3xl">
          <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80 backdrop-blur-md" style={{ animationDelay: "0.05s" }}>
            <Sparkles className="h-4 w-4 text-cyan-300" />
            {hero.eyebrow}
          </div>
          <h1 className="hero-reveal mt-6 text-[2.85rem] font-semibold leading-[0.93] tracking-[-0.04em] text-white sm:text-[4.6rem] lg:text-[6.25rem]" style={{ animationDelay: "0.14s", fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>
            <span className="block">{hero.titleA}</span>
            <span className="mt-2 block bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">{hero.titleB}</span>
          </h1>
          <p className="hero-reveal mt-6 max-w-2xl text-base leading-8 text-white/[0.72] sm:text-lg" style={{ animationDelay: "0.24s" }}>{hero.desc}</p>
          <div className="hero-reveal mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.34s" }}>
            <a href={TG} target="_blank" rel="noreferrer" className="cta-button inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.26),rgba(99,102,241,0.36))] px-7 py-4 text-sm font-semibold text-white shadow-[0_0_36px_rgba(56,189,248,0.18)] sm:text-base">
              {hero.primary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={() => go("services")} className="cta-button inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.08] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md sm:text-base">
              {hero.secondary}
              <PanelsTopLeft className="h-4 w-4" />
            </button>
          </div>
          <div className="hero-reveal mt-10 grid gap-3 sm:grid-cols-3" style={{ animationDelay: "0.44s" }}>
            {hero.badges.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/[0.45]">{label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="hero-reveal mt-8 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 backdrop-blur-xl" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.26em] text-cyan-100/60">Deep-Space Signature</p>
                <p className="mt-2 max-w-xl text-sm leading-7 text-white/72">
                  {hero.titleB}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="cosmic-card rounded-2xl px-4 py-3">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/40">Mood</p>
                  <p className="mt-2 text-sm font-semibold text-white">Cinematic</p>
                </div>
                <div className="cosmic-card rounded-2xl px-4 py-3">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/40">Tone</p>
                  <p className="mt-2 text-sm font-semibold text-white">Luxury Cosmic</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-reveal relative" style={{ animationDelay: "0.54s" }}>
          <div className="cosmic-shell relative overflow-hidden rounded-[2.3rem] p-6 md:p-7">
            <div className="absolute right-5 top-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100">Rival Orbit</div>
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.7),rgba(5,8,18,0.96))] p-5 sm:p-6">
              <div className="planet-core absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90" />
              <div className="orbital-ring absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />
              <div className="orbital-ring absolute left-1/2 top-1/2 h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55" style={{ animationDirection: "reverse", animationDuration: "18s" }} />
              <div className="ambient-beam absolute left-10 top-4 h-44 w-20 rotate-[18deg]" />
              <div className="ambient-beam absolute bottom-0 right-10 h-44 w-20 -rotate-[20deg]" />

              <div className="case-window-main relative z-10 mr-10 overflow-hidden rounded-[1.8rem] p-3 sm:mr-16 sm:rotate-[-4deg]">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.92),rgba(7,10,20,0.96))] p-6 sm:p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(103,232,249,0.15),transparent_22%),radial-gradient(circle_at_74%_26%,rgba(129,140,248,0.18),transparent_28%)]" />
                  <div className="relative flex min-h-[15rem] flex-col justify-between sm:min-h-[18rem]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[0.62rem] uppercase tracking-[0.24em] text-cyan-100/60">Hero visual scene</p>
                        <p className="mt-2 text-xl font-semibold text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>Cosmic avatar authority</p>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.06]">
                        <Gem className="h-7 w-7 text-cyan-200" />
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        ["Field", "Avatar lead"],
                        ["Depth", "Premium glow"],
                        ["Mode", "Static + motion"],
                      ].map(([label, value], index) => (
                        <div key={label} className={`luxury-panel rounded-2xl px-4 py-3 ${index === 1 ? "sm:-translate-y-4" : ""}`}>
                          <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/42">{label}</p>
                          <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-window-detail absolute right-0 top-10 z-20 w-[42%] max-w-[12rem] overflow-hidden rounded-[1.4rem] p-2 sm:right-3 sm:rotate-[6deg]">
                <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,28,0.92),rgba(7,10,20,0.96))] p-4">
                  <p className="text-[0.56rem] uppercase tracking-[0.2em] text-cyan-100/60">Detail window</p>
                  <div className="mt-3 h-24 rounded-2xl bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.82),rgba(103,232,249,0.26)_18%,rgba(99,102,241,0.24)_42%,rgba(6,11,24,0.88)_68%)]" />
                  <p className="mt-3 text-xs leading-5 text-white/68">Glow, contour and premium framing tuned for stronger first impression.</p>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 grid gap-3 sm:grid-cols-3">
                {[
                  ["Signal", "Premium cosmic positioning"],
                  ["Focus", "Avatar-driven visual hierarchy"],
                  ["Result", "High-end brand perception"],
                ].map(([label, value], idx) => (
                  <div key={label} className={`data-rail rounded-2xl px-4 py-3 ${idx === 1 ? "sm:translate-y-4" : ""}`}>
                    <div className="flex items-center gap-2">
                      <span className={`signal-dot h-2.5 w-2.5 rounded-full ${idx === 2 ? "bg-white/90 text-white/90" : idx === 1 ? "bg-indigo-300 text-indigo-300" : "bg-cyan-300 text-cyan-300"}`} />
                      <p className="text-[0.56rem] uppercase tracking-[0.22em] text-white/42">{label}</p>
                    </div>
                    <p className="mt-2 text-xs font-semibold leading-5 text-white/84">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.95fr]">
              <div className="luxury-panel rounded-[1.6rem] p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-100/55">Navigation map</p>
                <div className="mt-4 space-y-3">
                  {hero.side.map((item, idx) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                      <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300 shadow-[0_0_14px_rgba(103,232,249,0.7)]" />
                      <div>
                        <p className="text-[0.66rem] uppercase tracking-[0.24em] text-white/35">0{idx + 1}</p>
                        <p className="mt-1 text-sm font-semibold text-white">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <div className="luxury-panel rounded-[1.6rem] p-5">
                  <p className="text-[0.66rem] uppercase tracking-[0.24em] text-cyan-100/70">Output</p>
                  <p className="mt-3 text-2xl font-semibold text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>Static, motion and full packaging in one visual orbit</p>
                </div>
                <div className="luxury-panel rounded-[1.6rem] p-5">
                  <p className="text-[0.66rem] uppercase tracking-[0.24em] text-white/45">Atmosphere</p>
                  <p className="mt-3 text-sm leading-7 text-white/72">The layout now leans into deep-space light, orbital depth and studio-grade presentation instead of looking like a generic landing card stack.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-10 max-w-7xl">
        <div className="section-divider h-px w-full" />
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            ["Cosmic direction", "Avatar systems with cinematic digital gravity"],
            ["Signal clarity", "Luxury presentation without noisy gamer styling"],
            ["Orbit workflow", "Telegram-first communication and quick iteration"],
            ["Visual field", "Identity, motion and packaging under one atmosphere"],
          ].map(([k, v], idx) => (
            <div key={k} className={`cosmic-card rounded-[1.4rem] px-5 py-4 ${idx === 0 ? "md:-translate-y-3" : idx === 2 ? "md:translate-y-3" : ""}`}>
              <div className="flex items-center gap-3">
                <span className={`pulse-star h-2.5 w-2.5 rounded-full ${idx % 2 === 0 ? "bg-cyan-300" : "bg-indigo-300"}`} />
                <p className="text-[0.64rem] uppercase tracking-[0.22em] text-white/45">{k}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/78">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features({ items }) {
  return (
    <SectionShell tone="mixed" className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-6">
        {items.map(([Icon, title, desc], i) => (
          <Reveal as="article" key={title} className={`cosmic-card rounded-[1.75rem] p-6 ${i === 0 ? "xl:col-span-3 xl:row-span-2" : i === 3 ? "xl:col-span-2" : "xl:col-span-2"}`} style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/18 via-sky-300/8 to-indigo-400/16 text-cyan-200 shadow-[0_0_24px_rgba(56,189,248,0.12)]"><Icon className="h-6 w-6" /></div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/45">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/[0.68]">{desc}</p>
            {i === 0 ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.22em] text-cyan-100/70">Positioning</p>
                  <p className="mt-2 text-sm font-semibold text-white">Avatar design as the dominant entry point into the brand</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.22em] text-white/45">Visual effect</p>
                  <p className="mt-2 text-sm font-semibold text-white">Cleaner hierarchy, richer depth, more cosmic authority</p>
                </div>
              </div>
            ) : null}
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Services({ groups, lang }) {
  return (
    <SectionShell tone="cyan" className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.98fr_1.02fr]">
        <Reveal className="cosmic-shell overflow-hidden rounded-[2.2rem] p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">Flagship Focus</span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/50">Avatar-first positioning</span>
          </div>
          <div className="service-orbit relative mt-6 overflow-hidden rounded-[1.9rem] p-6">
            <div className="planet-core absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80" />
            <div className="orbital-ring absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />
            <div className="orbital-ring absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50" style={{ animationDirection: "reverse", animationDuration: "18s" }} />
            <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-100/70">Service atlas</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{lang === "ru" ? "Аватарки задают гравитацию всей визуальной системы" : "Avatars define the gravity of the full visual system"}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/68">{lang === "ru" ? "От главной аватарки дальше собирается весь остальной слой бренда: баннеры, логотип, соцсети, лендинг, карточки и motion-элементы." : "The hero avatar becomes the center point from which banners, logos, socials, landing pages, product cards and motion pieces inherit one coherent premium mood."}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  lang === "ru" ? ["01", "Флагманский акцент"] : ["01", "Hero-level focus"],
                  lang === "ru" ? ["02", "Система носителей"] : ["02", "System-level delivery"],
                  lang === "ru" ? ["03", "Motion-ready подача"] : ["03", "Motion-ready output"],
                  lang === "ru" ? ["04", "Telegram-first процесс"] : ["04", "Telegram-first flow"],
                ].map(([num, label], idx) => (
                  <div key={num} className={`luxury-panel rounded-2xl p-4 ${idx % 2 === 1 ? "translate-y-4" : ""}`}>
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-white/40">{num}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              lang === "ru" ? ["Avatar Core", "Статусный первый контакт"] : ["Avatar Core", "Status-first impression"],
              lang === "ru" ? ["Motion Layer", "Движение усиливает подачу"] : ["Motion Layer", "Motion amplifies presence"],
              lang === "ru" ? ["Full Pack", "Единый код на всех носителях"] : ["Full Pack", "One code across every touchpoint"],
            ].map(([title, text], idx) => (
              <div key={title} className={`luxury-panel rounded-[1.45rem] p-4 ${idx === 1 ? "sm:-translate-y-3" : ""}`}>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-cyan-100/58">{title}</p>
                <p className="mt-2 text-sm font-semibold text-white">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(([title, accent, items], idx) => (
            <Reveal
              key={title}
              className={`overflow-hidden rounded-[1.9rem] p-6 ${idx === 0 || idx === 3 ? "cosmic-shell md:col-span-2" : "cosmic-card"}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/[0.45]">{accent}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{title}</h3>
                </div>
                <div className={`rounded-full border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${idx === 0 ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100" : idx === 2 ? "border-indigo-300/20 bg-indigo-300/10 text-indigo-100" : "border-white/10 bg-white/[0.05] text-white/58"}`}>
                  {idx === 0 ? "Flagship" : idx === 2 ? "Motion" : idx === 3 ? "Full System" : "Static"}
                </div>
              </div>
              <div className={`mt-6 grid gap-3 ${idx === 0 || idx === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
                {items.map((item, itemIndex) => (
                  <div key={item} className={`flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/[0.16] px-4 py-3 ${idx === 0 && itemIndex === 1 ? "sm:translate-y-4" : ""}`}>
                    <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                    <span className="text-sm leading-6 text-white/[0.8]">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal className="nebula-panel rounded-[2rem] border border-white/10 p-6 backdrop-blur-2xl md:col-span-2">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/18 to-indigo-400/14 text-cyan-200"><MonitorPlay className="h-6 w-6" /></div>
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>Premium presentation across every touchpoint</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/[0.68]">Rival Design builds not isolated visuals but a full atmosphere, so the audience instantly reads quality, confidence and visual authority.</p>
              </div>
              <a href={TG} target="_blank" rel="noreferrer" className="cta-button inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white">Telegram<ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-white/40">Field</p>
                <p className="mt-2 text-sm font-semibold text-white">{lang === "ru" ? "Аватарка + логотип + social skin" : "Avatar + logo + social skin"}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-white/40">Mode</p>
                <p className="mt-2 text-sm font-semibold text-white">{lang === "ru" ? "Static / Motion / Full pack" : "Static / Motion / Full pack"}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(34,211,238,0.14),rgba(99,102,241,0.12),rgba(255,255,255,0.03))] p-6 shadow-[0_0_46px_rgba(56,189,248,0.1)] backdrop-blur-xl md:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-cyan-100/80">Telegram-first</p>
              <Globe className="h-5 w-5 text-cyan-200" />
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{lang === "ru" ? "Быстро обсуждаем, точно собираем, сильно выдаём" : "Discuss fast, build precisely, deliver with impact"}</p>
              <div className="flex flex-wrap gap-3">
                {["Brief", "Direction", "Delivery"].map((chip) => (
                  <div key={chip} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/74">{chip}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

function Stats({ items, counts, lang }) {
  return (
    <SectionShell tone="violet" className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-12">
        {items.map(([, suffix, label], i) => (
          <Reveal as="div" key={label} className={`rounded-[1.75rem] p-6 ${i === 0 ? "nebula-panel border border-cyan-300/15 xl:col-span-6" : "glass-card xl:col-span-2"}`} style={{ transitionDelay: `${i * 80}ms` }}>
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/[0.45]">{lang === "ru" ? "Показатель" : "Metric"}</p>
            <div className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{counts[i]}{suffix}</div>
            <p className="mt-4 text-sm leading-7 text-white/[0.68]">{label}</p>
            {i === 0 ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.22em] text-cyan-100/60">Velocity</p>
                  <p className="mt-2 text-sm font-semibold text-white">{lang === "ru" ? "Быстрый старт по Telegram" : "Fast Telegram-driven kickoff"}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.22em] text-cyan-100/60">Depth</p>
                  <p className="mt-2 text-sm font-semibold text-white">{lang === "ru" ? "От одной аватарки до полной системы" : "From one avatar to a full visual system"}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.22em] text-cyan-100/60">Signal</p>
                  <p className="mt-2 text-sm font-semibold text-white">{lang === "ru" ? "Работы ориентированы на восприятие уровня" : "Design tuned for perceived authority"}</p>
                </div>
              </div>
            ) : null}
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Process({ items }) {
  return (
    <SectionShell tone="cyan" className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="cosmic-card rounded-[1.8rem] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-100/65">Orbit flow</p>
            <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>
              Three steps, one clean trajectory from Telegram brief to premium-ready delivery.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl">
            <div className="stellar-ring absolute right-4 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full opacity-50" />
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/45">Delivery logic</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Brief", "Direction", "Final pack"].map((label, idx) => (
                <div key={label} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/80">
                  {idx + 1}. {label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map(([Icon, title, desc], i) => (
            <div key={title} className="relative">
              {i < items.length - 1 ? <div className="process-line absolute left-[calc(50%+3.5rem)] top-12 hidden h-px w-[calc(100%-1rem)] lg:block" /> : null}
              <Reveal as="article" className="cosmic-card relative rounded-[1.75rem] p-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-cyan-300/20 to-indigo-400/14 text-cyan-200"><Icon className="h-7 w-7" /></div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">0{i + 1}</div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.68]">{desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Portfolio({ items, lang }) {
  const [page, setPage] = useState(0);
  const pages = [];

  for (let index = 0; index < items.length; index += 2) {
    pages.push(items.slice(index, index + 2));
  }

  useEffect(() => {
    if (page > pages.length - 1) {
      setPage(Math.max(0, pages.length - 1));
    }
  }, [page, pages.length]);

  const prevPage = () => setPage((current) => (current === 0 ? pages.length - 1 : current - 1));
  const nextPage = () => setPage((current) => (current === pages.length - 1 ? 0 : current + 1));

  return (
    <SectionShell tone="mixed" className="px-4 pb-6 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-white/50">
              {lang === "ru" ? "Case builder" : "Case builder"}
            </span>
            <span className="text-sm font-semibold text-white">
              {String(page + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prevPage}
              className="interactive-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/78 backdrop-blur-md transition hover:border-cyan-300/20 hover:text-white"
              aria-label={lang === "ru" ? "Предыдущие кейсы" : "Previous cases"}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextPage}
              className="interactive-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/78 backdrop-blur-md transition hover:border-cyan-300/20 hover:text-white"
              aria-label={lang === "ru" ? "Следующие кейсы" : "Next cases"}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={prevPage}
            className="interactive-ring absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] text-white/82 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-cyan-300/20 hover:text-white lg:flex"
            aria-label={lang === "ru" ? "Предыдущие кейсы" : "Previous cases"}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden rounded-[2.35rem]">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, groupIndex) => (
                <div key={`page-${groupIndex}`} className="min-w-full">
                  <div className="grid gap-5 xl:grid-cols-2">
                    {group.map(([title, category, niche, desc, deliverables, result, primaryImage, secondaryImage, imageLabel], itemIndex) => (
                      <article key={title} className="cosmic-card overflow-hidden rounded-[2.2rem]">
                        <div className="grid">
                          <CaseShowcase title={title} label={imageLabel} primaryImage={primaryImage} secondaryImage={secondaryImage} featured={false} />
                          <div className="p-6 sm:p-7">
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <p className="text-[0.66rem] uppercase tracking-[0.24em] text-cyan-100/70">{category}</p>
                                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{title}</h3>
                                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/[0.42]">{niche}</p>
                              </div>
                              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                                {lang === "ru" ? "Case" : "Case"}
                              </span>
                            </div>

                            <p className="mt-5 text-sm leading-7 text-white/[0.68]">{desc}</p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                              {[
                                { label: lang === "ru" ? "Ниша" : "Niche", value: niche.split(" / ")[0] || niche },
                                { label: lang === "ru" ? "Фокус" : "Focus", value: category.split(" + ")[0] || category },
                                { label: lang === "ru" ? "Эффект" : "Effect", value: lang === "ru" ? "Premium feel" : "Premium feel" },
                              ].map((panel, panelIndex) => (
                                <div key={`${title}-${panel.label}`} className={`luxury-panel rounded-2xl px-4 py-3 ${panelIndex === 1 ? "sm:-translate-y-3" : ""}`}>
                                  <div className="flex items-center gap-2">
                                    <span className={`h-2.5 w-2.5 rounded-full ${panelIndex === 0 ? "bg-cyan-300" : panelIndex === 1 ? "bg-indigo-300" : "bg-white/80"} shadow-[0_0_12px_rgba(103,232,249,0.5)]`} />
                                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/45">{panel.label}</p>
                                  </div>
                                  <p className="mt-3 text-[0.78rem] font-semibold leading-5 text-white/88">{panel.value}</p>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-white/[0.45]">{lang === "ru" ? "Что было сделано" : "What was delivered"}</p>
                                <p className="mt-2 text-sm font-medium leading-7 text-white/[0.82]">{deliverables}</p>
                              </div>
                              <div className="rounded-2xl border border-cyan-300/18 bg-cyan-300/10 p-4">
                                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/75">{lang === "ru" ? "Результат" : "Result"}</p>
                                <p className="mt-2 text-sm font-medium leading-7 text-white">{result}</p>
                              </div>
                            </div>

                            <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                              <span className="text-[0.64rem] uppercase tracking-[0.22em] text-white/42">{lang === "ru" ? "Visual orbit" : "Visual orbit"}</span>
                              <span className="text-sm font-semibold text-cyan-100/85">
                                {groupIndex === 0 && itemIndex === 0 ? "Hero Case" : "Selected Case"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={nextPage}
            className="interactive-ring absolute right-0 top-1/2 z-20 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] text-white/82 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-cyan-300/20 hover:text-white lg:flex"
            aria-label={lang === "ru" ? "Следующие кейсы" : "Next cases"}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function Testimonials({ items }) {
  return (
    <SectionShell tone="violet" className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 xl:grid-cols-3">
        {items.map(([name, role, quote], i) => (
          <Reveal as="article" key={name} className={`${i === 0 ? "cosmic-shell xl:col-span-2" : "cosmic-card"} rounded-[2rem] p-6 sm:p-7`} style={{ transitionDelay: `${i * 90}ms` }}>
            <div className={`grid gap-6 ${i === 0 ? "lg:grid-cols-[0.92fr_1.08fr] lg:items-center" : ""}`}>
              <div className={`${i === 0 ? "luxury-panel rounded-[1.8rem] p-6" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-indigo-500 text-sm font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.22)] ${i === 0 ? "h-16 w-16 text-base" : "h-14 w-14"}`}>{initials(name)}</div>
                  <div>
                    <p className="text-lg font-semibold text-white">{name}</p>
                    <p className="text-sm text-white/[0.48]">{role}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-1.5 text-cyan-200">{STARS.map((_, x) => <Star key={`${name}-${x}`} className="h-4 w-4 fill-current" />)}</div>
                {i === 0 ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Luxury feel", "Clear communication"].map((chip, idx) => (
                      <div key={chip} className={`rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-white/78 ${idx === 1 ? "sm:translate-y-4" : ""}`}>{chip}</div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div>
                <p className={`${i === 0 ? "text-lg leading-9 sm:text-[1.35rem]" : "text-sm leading-7"} text-white/[0.8]`}>“{quote}”</p>
                <div className="mt-6 flex items-center gap-3 text-[0.64rem] uppercase tracking-[0.22em] text-white/42">
                  <span className="pulse-star h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{i === 0 ? "Prime signal" : i === 1 ? "Studio trust" : "Repeat impact"}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Pricing({ items, lang }) {
  return (
    <SectionShell tone="violet" className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 xl:grid-cols-12">
        {items.map(([title, price, badge, desc, features, popular], i) => (
          <Reveal as="article" key={title} className={`rounded-[2rem] border p-6 backdrop-blur-xl ${popular ? "cosmic-shell xl:col-span-5 border-cyan-300/30 shadow-[0_0_60px_rgba(56,189,248,0.14)]" : "glass-card xl:col-span-3"} ${!popular && i === 2 ? "xl:col-span-4" : ""}`} style={{ transitionDelay: `${i * 90}ms` }}>
            {popular ? <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-cyan-100">Best visual entry</div> : null}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`text-[0.68rem] uppercase tracking-[0.24em] ${popular ? "text-cyan-100/80" : "text-white/[0.45]"}`}>{badge}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{title}</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">{popular ? <Crown className="h-5 w-5 text-cyan-200" /> : <Package2 className="h-5 w-5 text-white/[0.72]" />}</div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                popular ? "Premium depth" : "Focused entry",
                popular ? "Avatar + system" : "One hero asset",
                popular ? "High-end presentation" : "Fast launch",
              ].map((point, idx) => (
                <div key={point} className={`luxury-panel rounded-2xl px-4 py-3 text-sm font-medium text-white/78 ${idx === 1 ? "sm:-translate-y-3" : ""}`}>{point}</div>
              ))}
            </div>
            <div className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{price}</div>
            <p className="mt-4 text-sm leading-7 text-white/[0.68]">{desc}</p>
            <div className="mt-6 space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/[0.18] px-4 py-3">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                  <span className="text-sm leading-6 text-white/[0.78]">{feature}</span>
                </div>
              ))}
            </div>
            <a href={TG} target="_blank" rel="noreferrer" className={`cta-button mt-8 flex min-h-[50px] items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${popular ? "border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(99,102,241,0.34))] text-white" : "border-white/[0.12] bg-white/[0.07] text-white"}`}>
              {lang === "ru" ? "Выбрать формат" : "Choose package"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Faq({ items, activeFaq, setActiveFaq }) {
  return (
    <SectionShell tone="mixed" className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-4">
        {items.map(([q, a], i) => {
          const open = activeFaq === i;
          return (
            <Reveal key={q} className="glass-card rounded-[1.6rem] p-2" style={{ transitionDelay: `${i * 70}ms` }}>
              <button type="button" onClick={() => setActiveFaq(open ? -1 : i)} className="interactive-ring flex w-full items-center justify-between gap-4 rounded-[1.25rem] px-5 py-5 text-left" aria-expanded={open}>
                <span className="text-base font-semibold text-white sm:text-lg">{q}</span>
                <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 transition ${open ? "rotate-180 border-cyan-300/25 text-cyan-200" : "text-white/60"}`}><ChevronDown className="h-4 w-4" /></span>
              </button>
              <div className={`faq-panel ${open ? "open" : ""}`}><div><p className="px-5 pb-5 text-sm leading-7 text-white/[0.68]">{a}</p></div></div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

function Cta({ title, desc, primary, secondary, go, lang }) {
  return (
    <section id="contact" className="px-4 pb-16 sm:px-6 lg:px-8">
      <Reveal className="cosmic-shell mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] p-7 shadow-[0_0_60px_rgba(56,189,248,0.1)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/80">Rival Design</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74]">{desc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Avatar Direction", "Identity Upgrade", "Motion Pack"].map((chip) => (
                <div key={chip} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/78">
                  {chip}
                </div>
              ))}
            </div>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="planet-core absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-45" />
            <a href={TG} target="_blank" rel="noreferrer" className="cta-button flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(99,102,241,0.34))] px-6 py-4 text-sm font-semibold text-white">{primary}<ArrowRight className="h-4 w-4" /></a>
            <button type="button" onClick={() => go("portfolio")} className="cta-button flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-white/[0.14] bg-white/[0.08] px-6 py-4 text-sm font-semibold text-white">{secondary}<PanelsTopLeft className="h-4 w-4" /></button>
            <div className="luxury-panel rounded-[1.8rem] p-5 sm:col-span-2">
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/[0.45]">{lang === "ru" ? "Основной сценарий" : "Primary conversion path"}</p>
              <p className="mt-2 text-lg font-semibold text-white">{lang === "ru" ? "Telegram как главная точка входа для обсуждения, брифа и запуска проекта" : "Telegram as the main entry point for discussion, briefing and launch"}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  lang === "ru" ? "Запрос" : "Brief",
                  lang === "ru" ? "Концепт" : "Direction",
                  lang === "ru" ? "Финал" : "Delivery",
                ].map((step, idx) => (
                  <div key={step} className={`rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-white/78 ${idx === 1 ? "sm:-translate-y-3" : ""}`}>{step}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer({ t, lang, setLang, go }) {
  const [desc, servicesTitle, navTitle, contactsTitle, telegramText, copyright] = t.footer;
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="cosmic-shell mx-auto max-w-7xl rounded-[2.2rem] p-7 sm:p-8">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="luxury-panel rounded-[1.7rem] p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-cyan-100/72">Rival Design</p>
            <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>
              {lang === "ru" ? "Космический premium-tech бренд для тех, кому нужен визуальный уровень, а не просто оформление." : "A cosmic premium-tech brand for clients who need visual authority, not just decoration."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Avatar", "Motion", "Packaging"].map((chip, idx) => (
              <div key={chip} className={`luxury-panel rounded-[1.4rem] px-4 py-4 text-sm font-semibold text-white/82 ${idx === 1 ? "sm:-translate-y-3" : ""}`}>{chip}</div>
            ))}
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/14 via-sky-400/10 to-indigo-500/18 shadow-[0_0_24px_rgba(56,189,248,0.18)] backdrop-blur-md">
              <OrbitalMark size={20} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/[0.45]">Rival Design</p>
              <p className="text-lg font-semibold text-white" style={{ fontFamily: '"Space Grotesk", "Segoe UI", sans-serif' }}>Premium cosmic identity</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/[0.62]">{desc}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">{navTitle}</p>
          <div className="mt-4 space-y-3">{t.nav.map(([label, id]) => <button key={id} type="button" onClick={() => go(id)} className="interactive-ring block text-sm text-white/70 transition hover:text-white">{label}</button>)}</div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">{servicesTitle}</p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>{lang === "ru" ? "Аватарки" : "Avatars"}</p>
            <p>{lang === "ru" ? "Логотипы и айдентика" : "Logos & identity"}</p>
            <p>Motion design</p>
            <p>{lang === "ru" ? "Лендинги и упаковка" : "Landing pages & packaging"}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/[0.48]">{contactsTitle}</p>
          <div className="mt-4 space-y-4">
            <a href={TG} target="_blank" rel="noreferrer" className="cta-button inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">Telegram<ArrowRight className="h-4 w-4" /></a>
            <p className="max-w-xs text-sm leading-7 text-white/[0.62]">{telegramText}</p>
            <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1">
              {["ru", "en"].map((locale) => <button key={locale} type="button" onClick={() => setLang(locale)} className={`interactive-ring rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${lang === locale ? "bg-white text-[#08080f]" : "text-white/60"}`}>{locale}</button>)}
            </div>
          </div>
        </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/[0.42]">{copyright}</div>
      </div>
    </footer>
  );
}
