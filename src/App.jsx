// VERSION: EQUIPMENT_MOBILE_IMAGES_20_PERCENT_SMALLER_20260616
import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Bike,
  ChevronRight,
  Clock,
  Gauge,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const brand = {
  name: "Эндурокайф",
  city: "Санкт-Петербург",
  shortPlace: "Медное озеро",
  address:
    "Ленинградская обл., Всеволожский р-н, Юкковское сельское поселение, д. Медный Завод, коттеджный пос. Медное озеро",
  since: "с 2019 года",
  telegram: "https://t.me/Manya_chopokayfu_spb",
  whatsapp: "https://wa.me/79119008922",
  phone: "tel:+79119008922",
  max: "https://max.ru/Manya_chopokayfu_spb",
};

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

function GlobalStyles() {
  return (
    <style>{`
      html, body, #root { background: #000; min-height: 100%; }
      body { margin: 0; overflow-x: hidden; }
    `}</style>
  );
}

const contacts = [
  { title: "Telegram", text: "@Manya_chopokayfu_spb", href: brand.telegram, primary: true, icon: MessageCircle },
  { title: "WhatsApp", text: "+7 911 900-89-22", href: brand.whatsapp, primary: false, icon: MessageCircle },
  { title: "Позвонить", text: "+7 911 900-89-22", href: brand.phone, primary: false, icon: Phone },
  { title: "MAX", text: "@Manya_chopokayfu_spb", href: brand.max, primary: false, icon: MessageCircle },
];

const fleet = [
  {
    title: "BSE Z5",
    type: "enduro",
    category: "Enduro",
    subtitle: "Полноразмерный эндуро для базового входа и уверенного роста",
    specs: "250 см³ · 21 л.с. · колёса 21/18 · полноразмерный эндуро",
    specsList: ["Двигатель: 250 см³", "Мощность: 21 л.с.", "Колёса: 21/18", "Класс: полноразмерный эндуро"],
    fit: "рост 170–195 см · вес 60–105 кг · новичок с базой / средний уровень",
    fitList: ["Рост: 170–195 см", "Вес: 60–105 кг", "Уровень: новичок с базовой подготовкой / средний уровень"],
    from: "от 5 500 ₽/час",
    accent: "from-yellow-300/35 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/bse-z5.png"),
  },
  {
    title: "STN R6",
    type: "enduro",
    category: "Enduro",
    subtitle: "Спокойный полноразмерный эндуро для новичка и ровных маршрутов",
    specs: "300 см³ · 25 л.с. · колёса 21/18 · полноразмерный эндуро",
    specsList: ["Двигатель: 300 см³", "Мощность: 25 л.с.", "Колёса: 21/18", "Класс: полноразмерный эндуро"],
    fit: "рост 170–190 см · вес 60–105 кг · новичок / спокойные маршруты",
    fitList: ["Рост: 170–190 см", "Вес: 60–105 кг", "Уровень: новичок / спокойные эндуро-маршруты"],
    from: "от 6 000 ₽/час",
    accent: "from-orange-500/35 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/stn-r6.png"),
  },
  {
    title: "STN V6",
    type: "enduro",
    category: "Enduro",
    subtitle: "Полноразмерный эндуро для новичка с небольшим опытом",
    specs: "300 см³ · 25 л.с. · колёса 21/18 · полноразмерный эндуро",
    specsList: ["Двигатель: 300 см³", "Мощность: 25 л.с.", "Колёса: 21/18", "Класс: полноразмерный эндуро"],
    fit: "рост 170–195 см · вес 60–105 кг · небольшой опыт / средний уровень",
    fitList: ["Рост: 170–195 см", "Вес: 60–105 кг", "Уровень: новичок с небольшим опытом / средний уровень"],
    from: "от 6 500 ₽/час",
    accent: "from-fuchsia-500/30 via-orange-500/20 to-cyan-300/20",
    image: asset("/images/stn-v6.png"),
  },
  {
    title: "Apex RMG / Apex 125",
    type: "pitbike",
    category: "Pitbike",
    subtitle: "Лёгкий питбайк для первого опыта, обучения и лёгких маршрутов",
    specs: "125 см³ · 12 л.с. · колёса 17/14 · питбайк",
    specsList: ["Двигатель: 125 см³", "Мощность: 12 л.с.", "Колёса: 17/14", "Класс: питбайк"],
    fit: "рост 150–175 см · вес 40–85 кг · первый опыт / обучение",
    fitList: ["Рост: 150–175 см", "Вес: 40–85 кг", "Уровень: первый опыт / обучение / лёгкие маршруты"],
    from: "от 4 500 ₽/час",
    accent: "from-orange-500/40 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/apex-rmg.png"),
  },
  {
    title: "Wels Team 125",
    type: "pitbike",
    category: "Pitbike",
    subtitle: "Компактный питбайк для новичков, подростков и лёгких маршрутов",
    specs: "125 см³ · 12 л.с. · колёса 17/14 · питбайк",
    specsList: ["Двигатель: 125 см³", "Мощность: 12 л.с.", "Колёса: 17/14", "Класс: питбайк"],
    fit: "рост 145–175 см · вес 40–85 кг · новичок / подросток",
    fitList: ["Рост: 145–175 см", "Вес: 40–85 кг", "Уровень: новичок / подросток / лёгкие маршруты"],
    from: "от 4 500 ₽/час",
    accent: "from-cyan-300/35 via-fuchsia-500/20 to-white/10",
    image: asset("/images/wels-team-125.png"),
  },
  {
    title: "XGZ GTS PR300",
    type: "enduro",
    category: "Enduro",
    subtitle: "Эндуро для уверенного новичка и среднего уровня",
    specs: "271 см³ · 25 л.с. · колёса 21/18 · полноразмерный эндуро",
    specsList: ["Двигатель: 271 см³", "Мощность: 25 л.с.", "Колёса: 21/18", "Класс: полноразмерный эндуро"],
    fit: "рост 175–195 см · вес 65–105 кг · уверенный новичок / средний уровень",
    fitList: ["Рост: 175–195 см", "Вес: 65–105 кг", "Уровень: уверенный новичок / средний уровень"],
    from: "от 5 500 ₽/час",
    accent: "from-cyan-300/35 via-fuchsia-500/20 to-yellow-200/10",
    image: asset("/images/xgz-gts-pr300.png"),
  },
  {
    title: "STN G9 Pro",
    type: "enduro",
    category: "Enduro Pro",
    subtitle: "Мощный полноразмерный эндуро для активного катания",
    specs: "300 см³ · 33 л.с. · колёса 21/18 · мощный полноразмерный эндуро",
    specsList: ["Двигатель: 300 см³", "Мощность: 33 л.с.", "Колёса: 21/18", "Класс: мощный полноразмерный эндуро"],
    fit: "рост 175–200 см · вес 70–110 кг · средний / опытный уровень",
    fitList: ["Рост: 175–200 см", "Вес: 70–110 кг", "Уровень: средний уровень / опытный райдер / активное эндуро"],
    from: "от 8 500 ₽/час",
    accent: "from-orange-500/35 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/stn-g9-pro.png"),
  },
  {
    title: "HISUN 750",
    type: "quad",
    category: "Квадроцикл",
    subtitle: "Полноприводный туристический квадроцикл для тура с инструктором",
    specs: "735 см³ · 53 л.с. · колёса 14″ · туристический 4x4 квадроцикл",
    specsList: ["Двигатель: 735 см³", "Мощность: 53 л.с.", "Колёса: 14″", "Класс: туристический полноприводный квадроцикл"],
    fit: "рост 165–200 см · нагрузка до 234 кг · 1–2 человека",
    fitList: ["Рост: 165–200 см", "Вес: до 234 кг общей нагрузки", "Уровень: новичок с инструктором / уверенный райдер", "Посадка: 1–2 человека"],
    from: "от 8 000 ₽/час",
    accent: "from-lime-400/35 via-cyan-300/20 to-fuchsia-500/20",
    image: asset("/images/hisun-750.png"),
  },
  {
    title: "Avantis 200",
    type: "quad",
    category: "Квадроцикл",
    subtitle: "Лёгкий утилитарный квадроцикл для новичка и спокойного маршрута",
    specs: "200 см³ · 16 л.с. · колёса 10 дюймов · лёгкий утилитарный квадроцикл",
    specsList: ["Двигатель: 200 см³", "Мощность: 16 л.с.", "Колёса: 10 дюймов", "Класс: лёгкий утилитарный квадроцикл"],
    fit: "рост 145–185 см · вес до 90–100 кг · 1 человек / 1 взрослый + ребёнок",
    fitList: ["Рост: 145–185 см", "Вес: до 90–100 кг", "Уровень: новичок / подросток / спокойные маршруты", "Посадка: 1 человек / 1 взрослый + ребёнок по согласованию"],
    from: "от 6 000 ₽/час",
    accent: "from-lime-300/35 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/avantis-200.png"),
  },
  {
    title: "IRBIS 180",
    type: "snowbike",
    category: "Сноубайк",
    subtitle: "Лёгкий сноубайк для зимних спокойных маршрутов",
    specs: "180 см³ · 12 л.с. · гусеница 2626 × 380 мм · лёгкий сноубайк",
    specsList: ["Двигатель: 180 см³", "Мощность: 12 л.с.", "Гусеница: 2626 × 380 мм", "Класс: лёгкий сноубайк / зимняя внедорожная техника"],
    fit: "рост 160–195 см · вес до 150 кг · новичок / зимние маршруты",
    fitList: ["Рост: 160–195 см", "Вес: до 150 кг", "Уровень: новичок / спокойные зимние маршруты", "Посадка: 1 человек"],
    from: "по запросу",
    accent: "from-white/25 via-cyan-300/25 to-fuchsia-500/15",
    image: asset("/images/irbis-180.png"),
  },
];


const fleetFilters = [
  { key: "all", label: "Все" },
  { key: "enduro", label: "Enduro" },
  { key: "pitbike", label: "Pitbike" },
  { key: "quad", label: "Квадроцикл" },
  { key: "snowbike", label: "Сноубайк" },
];

const packages = {
  training: {
    title: "Занятие с тренером",
    short: "Новичкам",
    label: "для новичков",
    hook: "Никогда не ездил? Начинай здесь.",
    note: "Обязательно для всех без опыта. Подбираем технику по росту, весу и уровню, чтобы первый выезд был безопасным и понятным.",
    items: [
      { name: "Apex RMG / Apex 125", price: "6 000 ₽/час", details: "125 см³, 12 л.с., колёса 17/14. Лучший вариант для первого опыта, обучения и лёгких маршрутов." },
      { name: "Wels Team 125", price: "6 000 ₽/час", details: "125 см³, 12 л.с., колёса 17/14. Подходит новичкам, подросткам и компактным райдерам." },
      { name: "BSE Z5", price: "7 000 ₽/час", details: "250 см³, 21 л.с., полноразмерный эндуро. Для новичка с базовой подготовкой и среднего уровня." },
      { name: "XGZ GTS PR300", price: "7 000 ₽/час", details: "271 см³, 25 л.с., полноразмерный эндуро. Для уверенного новичка и среднего уровня." },
      { name: "STN R6", price: "7 500 ₽/час", details: "300 см³, 25 л.с. Спокойный полноразмерный эндуро для обучения и ровных маршрутов." },
      { name: "STN V6", price: "8 000 ₽/час", details: "300 см³, 25 л.с. Для новичка с небольшим опытом и среднего уровня." },
      { name: "STN G9 Pro", price: "9 000 ₽/час", details: "300 см³, 33 л.с. Мощный полноразмерный эндуро для среднего уровня и опытных райдеров." },
    ],
  },
  guided: {
    title: "Мото-тур",
    short: "Опытным",
    label: "с гидом",
    hook: "Уже ездил? Поехали в маршрут.",
    note: "Формат для тех, кто уже уверенно управляет техникой. Гид ведёт маршрут, а ты получаешь эндуро-кайф без навигационной головной боли.",
    items: [
      { name: "Apex RMG / Apex 125", price: "5 500 ₽/час", details: "125 см³, 12 л.с., колёса 17/14. Лёгкий мото-тур на питбайке." },
      { name: "Wels Team 125", price: "5 500 ₽/час", details: "125 см³, 12 л.с., колёса 17/14. Компактный питбайк для лёгкого темпа." },
      { name: "BSE Z5", price: "6 500 ₽/час", details: "250 см³, 21 л.с., полноразмерный эндуро." },
      { name: "XGZ GTS PR300", price: "6 500 ₽/час", details: "271 см³, 25 л.с., полноразмерный эндуро." },
      { name: "STN R6", price: "7 000 ₽/час", details: "300 см³, 25 л.с., спокойный полноразмерный эндуро." },
      { name: "STN V6", price: "7 500 ₽/час", details: "300 см³, 25 л.с., полноразмерный эндуро." },
      { name: "STN G9 Pro", price: "8 500 ₽/час", details: "300 см³, 33 л.с., мощный полноразмерный эндуро для активного маршрута." },
    ],
  },
  quad: {
    title: "Квадро-тур",
    short: "Компаниям",
    label: "с гидом",
    hook: "Хочешь с друзьями, парой или ребёнком?",
    note: "Квадро-тур проходит с гидом на отдельной технике. Подходит новичкам, парам, компаниям и спокойным маршрутам.",
    items: [
      {
        name: "Avantis 200",
        price: "6 000 ₽ — 1-й час · далее 5 000 ₽/час",
        details:
          "200 см³, 16 л.с., лёгкий утилитарный квадроцикл. Рост 145–185 см, вес до 90–100 кг. Посадка: 1 человек или 1 взрослый + ребёнок по согласованию. Доп. пассажир — 500 ₽/час.",
      },
      {
        name: "HISUN 750",
        price: "8 000 ₽/час",
        details:
          "735 см³, 53 л.с., туристический полноприводный квадроцикл. Рост 165–200 см, общая нагрузка до 234 кг. Посадка: 1–2 человека. Доп. пассажир — 1 000 ₽/час.",
      },
    ],
  },
  free: {
    title: "Свободное катание",
    short: "Самостоятельно",
    label: "без сопровождения",
    hook: "Только если реально умеешь ездить.",
    note: "Только для опытных райдеров. Аренда от 1 часа, без нашего сопровождения.",
    items: [
      { name: "Apex RMG / Apex 125", price: "4 500 ₽/час", details: "125 см³, 12 л.с., колёса 17/14. Лёгкий питбайк для самостоятельного катания." },
      { name: "Wels Team 125", price: "4 500 ₽/час", details: "125 см³, 12 л.с., колёса 17/14. Компактный питбайк." },
      { name: "BSE Z5", price: "5 500 ₽/час", details: "250 см³, 21 л.с., полноразмерный эндуро." },
      { name: "XGZ GTS PR300", price: "5 500 ₽/час", details: "271 см³, 25 л.с., полноразмерный эндуро." },
      { name: "STN R6", price: "6 000 ₽/час", details: "300 см³, 25 л.с., полноразмерный эндуро." },
      { name: "STN V6", price: "6 500 ₽/час", details: "300 см³, 25 л.с., полноразмерный эндуро." },
    ],
  },
};

const packageOrder = ["training", "guided", "quad", "free"];

const picker = [
  { title: "Я новичок", text: "Хочу попробовать без риска", result: "Занятие с тренером", key: "training" },
  { title: "Я уже ездил", text: "Хочу маршрут, грязь и темп", result: "Мото-тур с гидом", key: "guided" },
  { title: "Едем компанией", text: "Друзья, пара, ребёнок, корпоратив", result: "Квадро-тур", key: "quad" },
  { title: "Хочу сам", text: "Есть опыт и нужен свободный формат", result: "Свободное катание", key: "free" },
];

const included = [
  "Вводный инструктаж по безопасности",
  "Подготовленная техника",
  "Комплект экипировки",
  "Бак бензина",
  "Вода + перекус",
  "Фото/видео на память",
  "Гид на отдельной технике для туров",
];

const gear = [
  "Шлем",
  "Очки",
  "Балаклава",
  "Черепаха",
  "Налокотники",
  "Перчатки",
  "Наколенники",
  "Мото боты",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Новичкам — через тренера",
    text: "Без опыта не выпускаем человека просто “кататься”. Сначала база, безопасность и контроль.",
  },
  {
    icon: Mountain,
    title: "Маршруты под уровень",
    text: "Подбираем формат: спокойнее, бодрее, грязнее, для компании или для опытного райдера.",
  },
  {
    icon: Wrench,
    title: "Техника готова к выезду",
    text: "Перед стартом проверяем базовые узлы, выдаём экипировку и объясняем правила эксплуатации.",
  },
  {
    icon: Trophy,
    title: "Эмоции + контент",
    text: "В программу входят фото/видео на память, вода, перекус и беспроигрышная лотерея.",
  },
];

const steps = [
  "Пишешь в Telegram или удобный мессенджер",
  "Выбираем технику, формат и время",
  "Проходишь инструктаж и получаешь экипировку",
  "Выезжаешь на маршрут или занятие",
];

function NoiseLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-screen [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.2)_0,transparent_17%),radial-gradient(circle_at_80%_10%,rgba(255,0,128,.24)_0,transparent_18%),linear-gradient(115deg,transparent_0_46%,rgba(0,229,255,.24)_46%_47%,transparent_47%_100%)]" />
  );
}

function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <video className="absolute inset-0 h-full w-full object-cover opacity-75" autoPlay muted loop playsInline poster={asset("/hero-poster.jpg")}>
        <source src={asset("/hero-bg.mp4")} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/62" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(236,72,153,.34),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,.28),transparent_28%),linear-gradient(90deg,rgba(0,0,0,.92),rgba(0,0,0,.36),rgba(0,0,0,.88))]" />
      <motion.div
        className="absolute left-[-20%] top-[24%] h-24 w-[145%] -rotate-12 bg-fuchsia-600/34 blur-xl"
        animate={{ x: ["-10%", "8%", "-10%"], opacity: [0.18, 0.46, 0.18] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-20%] top-[60%] h-20 w-[135%] rotate-12 bg-cyan-400/24 blur-xl"
        animate={{ x: ["8%", "-8%", "8%"], opacity: [0.14, 0.34, 0.14] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <NoiseLayer />
    </div>
  );
}

function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 7,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
      <motion.div className="absolute -left-44 top-[-90px] h-[620px] w-[620px] rounded-full bg-fuchsia-600/32 blur-3xl" animate={{ x: [0, 130, 30, 0], y: [0, 60, 150, 0], scale: [1, 1.12, 0.9, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute right-[-190px] top-20 h-[670px] w-[670px] rounded-full bg-cyan-400/22 blur-3xl" animate={{ x: [0, -120, -30, 0], y: [0, 150, 40, 0], scale: [1, 0.84, 1.1, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,.42)_35%,rgba(0,0,0,.96)_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:68px_68px]" />
      <NoiseLayer />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(34,211,238,.9)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -70, 0], x: [0, 24, -10, 0], opacity: [0.12, 0.9, 0.12], scale: [1, 1.7, 1] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">{text}</p>}
    </div>
  );
}

function CTAButton({ children, variant = "primary", href = "#booking" }) {
  const base = "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-fuchsia-600 text-white shadow-[0_0_40px_rgba(217,70,239,.38)] hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_42px_rgba(34,211,238,.4)]"
      : "border border-white/20 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function ContactCards({ compact = false }) {
  return (
    <div className={`grid gap-3 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
      {contacts.map((contact) => {
        const Icon = contact.icon;
        return (
          <a
            key={contact.title}
            href={contact.href}
            className={`group relative overflow-hidden rounded-[1.7rem] border p-5 text-left transition-all ${
              contact.primary
                ? "border-fuchsia-400 bg-fuchsia-600 text-white shadow-[0_0_42px_rgba(217,70,239,.3)] hover:bg-cyan-300 hover:text-black"
                : "border-white/10 bg-white/[0.05] text-white hover:border-cyan-300/50 hover:bg-cyan-300/[0.08]"
            }`}
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
            <div className="relative mb-5 flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${contact.primary ? "bg-black text-cyan-300" : "bg-white/10 text-cyan-300"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="relative text-xl font-black">{contact.title}</div>
            <div className={`relative mt-1 text-sm ${contact.primary ? "text-white/80 group-hover:text-black/70" : "text-zinc-400"}`}>{contact.text}</div>
          </a>
        );
      })}
    </div>
  );
}

function DiagonalDivider() {
  return <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-black [clip-path:polygon(0_58%,100%_18%,100%_100%,0_100%)]" />;
}

function LocationMap() {
  const mapSrc = `https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(brand.address)}&z=12`;

  return (
    <section id="location" className="relative overflow-hidden bg-black px-5 py-20 md:px-8 md:py-28">
      <AnimatedBackground />
      <div className="relative mx-auto w-full max-w-7xl">
        <SectionTitle eyebrow="точка старта" title="Стартуем у Медного озера" />
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-black">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="relative text-3xl font-black uppercase tracking-[-0.04em]">Где находимся</h3>
            <p className="relative mt-4 text-lg leading-8 text-zinc-300">{brand.address}</p>
            <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`https://yandex.ru/maps/?text=${encodeURIComponent(brand.address)}`} target="_blank" rel="noreferrer" className="rounded-full bg-fuchsia-600 px-5 py-3 text-center text-sm font-black uppercase text-white transition hover:bg-cyan-300 hover:text-black">
                Открыть Яндекс.Карты
              </a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.address)}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-black uppercase text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
                Google Maps
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
            <iframe
              title="Карта точки старта Эндурокайф"
              src={mapSrc}
              className="absolute inset-0 h-full w-full grayscale-[.25] invert-0"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 border border-cyan-300/15 shadow-[inset_0_0_70px_rgba(34,211,238,.16)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function RealRideGallery() {
  const photos = [
    { src: asset("/images/ride-real-1.jpg"), title: "Техника в лесу" },
    { src: asset("/images/ride-real-2.jpg"), title: "Питбайк и характер" },
    { src: asset("/images/ride-real-3.jpg"), title: "Компания на маршруте" },
    { src: asset("/images/ride-real-4.jpg"), title: "Квадро + эндуро" },
    { src: asset("/images/ride-real-5.jpg"), title: "Квадро-тур крупным планом" },
    { src: asset("/images/ride-real-6.jpg"), title: "Зимний кайф" },
    { src: asset("/images/gallery/ride-gallery-07.jpg"), title: "Покатушка #7" },
    { src: asset("/images/gallery/ride-gallery-08.jpg"), title: "Покатушка #8" },
    { src: asset("/images/gallery/ride-gallery-09.jpg"), title: "Покатушка #9" },
    { src: asset("/images/gallery/ride-gallery-10.jpg"), title: "Покатушка #10" },
    { src: asset("/images/gallery/ride-gallery-11.jpg"), title: "Покатушка #11" },
    { src: asset("/images/gallery/ride-gallery-12.jpg"), title: "Покатушка #12" },
    { src: asset("/images/gallery/ride-gallery-13.jpg"), title: "Покатушка #13" },
    { src: asset("/images/gallery/ride-gallery-14.jpg"), title: "Покатушка #14" },
    { src: asset("/images/gallery/ride-gallery-15.jpg"), title: "Покатушка #15" },
    { src: asset("/images/gallery/ride-gallery-16.jpg"), title: "Покатушка #16" },
    { src: asset("/images/gallery/ride-gallery-17.jpg"), title: "Покатушка #17" },
    { src: asset("/images/gallery/ride-gallery-18.jpg"), title: "Покатушка #18" },
    { src: asset("/images/gallery/ride-gallery-19.jpg"), title: "Покатушка #19" },
    { src: asset("/images/gallery/ride-gallery-20.jpg"), title: "Покатушка #20" },
    { src: asset("/images/gallery/ride-gallery-21.jpg"), title: "Покатушка #21" },
    { src: asset("/images/gallery/ride-gallery-22.jpg"), title: "Покатушка #22" },
    { src: asset("/images/gallery/ride-gallery-23.jpg"), title: "Покатушка #23" },
  ];

  const previewPhotos = photos.slice(0, 6);

  const [activePhoto, setActivePhoto] = useState(null);
  const pointerStartX = useRef(null);

  const openPhoto = (index) => setActivePhoto(index);
  const closePhoto = () => setActivePhoto(null);

  const showPhoto = (offset) => {
    if (activePhoto === null) return;
    setActivePhoto((activePhoto + offset + photos.length) % photos.length);
  };

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStartX.current === null) return;

    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(deltaX) < 44) return;
    showPhoto(deltaX < 0 ? 1 : -1);
  };

  return (
    <section id="photos" className="relative overflow-hidden bg-[#050505] px-5 py-20 md:px-8 md:py-28">
      <AnimatedBackground />
      <div className="relative mx-auto w-full max-w-7xl">
        <SectionTitle eyebrow="реальные покатушки" title="Живой оффроуд без постановки" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {previewPhotos.map((photo, index) => (
            <motion.button
              type="button"
              key={photo.src}
              onClick={() => openPhoto(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.04 }}
              className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] text-left md:min-h-[380px]"
            >
              <img src={photo.src} alt={photo.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute left-5 right-5 top-5 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Эндурокайф</div>
                <div className="mt-2 text-2xl font-black">{photo.title}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {activePhoto !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-xl" onClick={closePhoto}>
          <button
            type="button"
            onClick={closePhoto}
            className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20"
            aria-label="Закрыть галерею"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPhoto(-1);
            }}
            className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/65 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,.16)] backdrop-blur transition hover:border-cyan-300/45 hover:bg-cyan-300/10 md:left-8 md:h-14 md:w-14"
            aria-label="Предыдущее фото"
          >
            <ChevronRight className="h-6 w-6 rotate-180" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPhoto(1);
            }}
            className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/65 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,.16)] backdrop-blur transition hover:border-cyan-300/45 hover:bg-cyan-300/10 md:right-8 md:h-14 md:w-14"
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative z-20 flex h-full max-h-[88vh] w-full max-w-6xl touch-pan-y flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              pointerStartX.current = null;
            }}
          >
            <img
              src={photos[activePhoto].src}
              alt={photos[activePhoto].title}
              className="max-h-[78vh] w-full rounded-[1.5rem] object-contain shadow-[0_40px_120px_rgba(0,0,0,.75)]"
            />
            <div className="mt-4 text-center">
              <div className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                {activePhoto + 1} / {photos.length}
              </div>
              <div className="mt-1 text-xl font-black text-white">{photos[activePhoto].title}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


function FleetCarousel({ items, selected, onSelect }) {
  const pointerStartX = useRef(null);

  if (!items.length) {
    return null;
  }

  const selectedIndex = Math.max(0, items.findIndex((item) => item.title === selected.title));
  const canMove = items.length > 1;

  const selectByOffset = (offset) => {
    if (!canMove) return;
    const nextIndex = (selectedIndex + offset + items.length) % items.length;
    onSelect(items[nextIndex]);
  };

  const getItemByOffset = (offset) => {
    const index = (selectedIndex + offset + items.length) % items.length;
    return items[index];
  };

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (pointerStartX.current === null) return;

    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(deltaX) < 42) return;
    selectByOffset(deltaX < 0 ? 1 : -1);
  };

  const sideCards = [
    { item: getItemByOffset(-1), offset: -1, label: "Предыдущая модель" },
    { item: getItemByOffset(1), offset: 1, label: "Следующая модель" },
  ];

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStartX.current = null;
      }}
      className="relative mx-auto max-w-6xl touch-pan-y select-none"
    >
      <div className="pointer-events-none absolute inset-y-8 left-0 z-0 hidden w-1/3 rounded-[2rem] bg-fuchsia-600/10 blur-2xl md:block" />
      <div className="pointer-events-none absolute inset-y-8 right-0 z-0 hidden w-1/3 rounded-[2rem] bg-cyan-300/10 blur-2xl md:block" />

      {sideCards.map(({ item, offset, label }) => (
        <button
          type="button"
          key={`${item.title}-${offset}`}
          onPointerDown={(event) => event.stopPropagation()}
          onPointerUp={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            selectByOffset(offset);
          }}
          className={`absolute top-16 z-10 hidden w-[30%] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 text-left opacity-55 blur-[0.5px] transition hover:opacity-80 hover:blur-0 md:block ${
            offset < 0 ? "left-0" : "right-0"
          }`}
          aria-label={label}
        >
          <div className={`relative h-[340px] overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${item.accent}`}>
            <div className="absolute inset-0 bg-black/55" />
            <motion.img
              src={item.image}
              alt={item.title}
              className="relative z-10 mx-auto h-[255px] w-full scale-110 object-contain opacity-80 drop-shadow-[0_28px_35px_rgba(0,0,0,.75)]"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-x-4 bottom-4 z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100">{item.category}</div>
              <div className="mt-1 truncate text-xl font-black text-white">{item.title}</div>
            </div>
          </div>
        </button>
      ))}

      <button
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        onPointerUp={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          selectByOffset(-1);
        }}
        disabled={!canMove}
        className="absolute left-2 top-[220px] z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,.18)] backdrop-blur transition hover:border-cyan-300/45 hover:bg-cyan-300/10 disabled:opacity-30 md:left-4 md:top-[270px] md:h-12 md:w-12"
        aria-label="Предыдущая техника"
      >
        <ChevronRight className="h-5 w-5 rotate-180" />
      </button>

      <button
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        onPointerUp={(event) => event.stopPropagation()}
        onClick={(event) => {
          event.stopPropagation();
          selectByOffset(1);
        }}
        disabled={!canMove}
        className="absolute right-2 top-[220px] z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,.18)] backdrop-blur transition hover:border-cyan-300/45 hover:bg-cyan-300/10 disabled:opacity-30 md:right-4 md:top-[270px] md:h-12 md:w-12"
        aria-label="Следующая техника"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <motion.div
        key={selected.title}
        initial={{ opacity: 0, scale: 0.96, x: 24 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-20 mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_40px_120px_rgba(0,0,0,.58)] md:w-[68%]"
      >
        <TechPreview selected={selected} compact />
      </motion.div>

      <div className="mt-5 flex justify-center gap-2">
        {items.map((item) => (
          <button
            type="button"
            key={item.title}
            onPointerDown={(event) => event.stopPropagation()}
            onPointerUp={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              onSelect(item);
            }}
            className={`h-2.5 rounded-full transition-all ${
              item.title === selected.title ? "w-8 bg-fuchsia-500 shadow-[0_0_18px_rgba(217,70,239,.65)]" : "w-2.5 bg-white/20 hover:bg-cyan-300/60"
            }`}
            aria-label={item.title}
          />
        ))}
      </div>
    </div>
  );
}

function InfoLines({ items }) {
  return (
    <ul className="mt-3 space-y-2 text-sm font-bold leading-5 text-zinc-100 md:text-base md:leading-6">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.75)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TechPreview({ selected, compact = false }) {
  const specs = selected.specsList || selected.specs.split(" · ");
  const fit = selected.fitList || selected.fit.split(" · ");

  return (
    <>
      <div className={`relative overflow-hidden bg-gradient-to-br ${selected.accent} ${compact ? "min-h-[360px] p-4 md:min-h-[540px] md:p-6" : "min-h-[540px] p-6"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,.16),transparent_32%),linear-gradient(135deg,rgba(0,0,0,.18),rgba(0,0,0,.92))]" />
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:46px_46px]" />
        <motion.img
          src={selected.image}
          alt={selected.title}
          className={`relative z-10 mx-auto w-full object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,.75)] ${compact ? "h-[285px] scale-[1.22] md:h-[430px] md:scale-[1.16]" : "h-[430px] scale-[1.16]"}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mt-3">
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-fuchsia-200 md:text-xs">{selected.category}</div>
          <div className={`${compact ? "text-2xl" : "text-4xl"} mt-2 font-black tracking-tight`}>{selected.title}</div>
          <div className="mt-2 max-w-xl text-sm text-zinc-300 md:text-base">{selected.subtitle}</div>
        </div>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-3 md:p-5">
        <div className="rounded-3xl border border-white/10 bg-black/35 p-4 md:p-5">
          <Gauge className="mb-3 h-5 w-5 text-cyan-300" />
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">характеристики</div>
          <InfoLines items={specs} />
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/35 p-4 md:p-5">
          <Star className="mb-3 h-5 w-5 text-fuchsia-400" />
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">кому подходит</div>
          <InfoLines items={fit} />
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/35 p-4 md:p-5">
          <Zap className="mb-3 h-5 w-5 text-yellow-200" />
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">стоимость</div>
          <div className="mt-3 text-sm font-bold leading-5 text-zinc-100 md:text-base md:leading-6">{selected.from}</div>
        </div>
      </div>
    </>
  );
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/82 p-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={brand.telegram} className="rounded-full bg-fuchsia-600 px-4 py-3 text-center text-sm font-black uppercase text-white shadow-[0_0_30px_rgba(217,70,239,.35)]">Telegram</a>
        <a href={brand.phone} className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-3 text-center text-sm font-black uppercase text-cyan-100">Позвонить</a>
      </div>
    </div>
  );
}

export default function EndurokaifLanding() {
  const [selected, setSelected] = useState(fleet[0]);
  const [activeFleetFilter, setActiveFleetFilter] = useState("all");
  const [activePackage, setActivePackage] = useState("training");
  const [expanded, setExpanded] = useState(null);
  const currentPackage = packages[activePackage];
  const displayedFleet = activeFleetFilter === "all" ? fleet : fleet.filter((item) => item.type === activeFleetFilter);

  const handleFleetFilter = (key) => {
    setActiveFleetFilter(key);
    const nextItem = key === "all" ? fleet[0] : fleet.find((item) => item.type === key);
    if (nextItem && (key === "all" || selected.type !== key)) {
      setSelected(nextItem);
    }
  };

  const choosePackage = (key) => {
    setActivePackage(key);
    setExpanded(null);
    setTimeout(() => document.getElementById("prices")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return (
    <main className="min-h-screen bg-black pb-20 text-white antialiased selection:bg-fuchsia-500 selection:text-white md:pb-0">
      <GlobalStyles />
      <section className="relative min-h-screen overflow-hidden">
        <HeroVideoBackground />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-black/55 text-fuchsia-400 shadow-[0_0_30px_rgba(236,72,153,.35)] backdrop-blur-xl">
              <Bike className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-[0.24em] text-white">{brand.name}</div>
              <div className="text-xs text-cyan-200">прокат · сервис · продажа</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide text-zinc-300 md:flex">
            <a className="hover:text-fuchsia-300" href="#picker">Что выбрать</a>
            <a className="hover:text-fuchsia-300" href="#fleet">Техника</a>
            <a className="hover:text-fuchsia-300" href="#prices">Цены</a>
            <a className="hover:text-fuchsia-300" href="#photos">Фото</a>
            <a className="hover:text-fuchsia-300" href="#booking">Запись</a>
            <a className="hover:text-fuchsia-300" href="#location">Карта</a>
          </nav>
        </header>

        <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100svh-86px)] max-w-7xl items-center px-5 pb-20 pt-4 md:min-h-[calc(100vh-96px)] md:px-8 md:pb-28 md:pt-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-5xl">
            <div className="mb-6 hidden items-center gap-2 rounded-full border border-fuchsia-400/35 bg-fuchsia-500/15 px-4 py-2 text-sm font-black uppercase tracking-wide text-fuchsia-100 shadow-[0_0_34px_rgba(236,72,153,.18)] md:inline-flex">
              <Zap className="h-4 w-4" />
              {brand.city} · {brand.shortPlace} · {brand.since}
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] text-white sm:text-6xl md:text-8xl lg:text-9xl">
              Грязь. Газ. <span className="text-fuchsia-500 drop-shadow-[0_0_18px_rgba(236,72,153,.55)]">Кайф.</span>
            </h1>

            <p className="mt-5 max-w-[18rem] text-xs font-medium leading-5 tracking-normal text-zinc-300 sm:max-w-md md:mt-7 md:max-w-2xl md:text-xl md:leading-8">
              {brand.name} — эндуро, питбайки и квадроциклы в СПб.
            </p>

            <div className="mt-7 hidden flex-col gap-3 sm:flex-row md:flex">
              <CTAButton href="#booking">Записаться в Telegram</CTAButton>
              <CTAButton href="#picker" variant="secondary">Подобрать формат</CTAButton>
            </div>

            <div className="mt-7 grid max-w-2xl grid-cols-3 gap-2 md:mt-10 md:gap-3">
              {[
                ["2019", "работаем на рынке"],
                ["4", "формата катания"],
                ["Тренер", "новичкам рядом"],
              ].map(([value, label]) => (
                <div key={label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 p-2.5 backdrop-blur-xl md:rounded-3xl md:p-4">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
                  <div className="text-lg font-black text-white md:text-3xl">{value}</div>
                  <div className="mt-1 text-[10px] leading-4 text-zinc-400 md:text-sm md:leading-5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <DiagonalDivider />
      </section>

      <section id="picker" className="relative overflow-hidden bg-black px-5 py-14 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="relative mx-auto w-full max-w-7xl">
          <SectionTitle eyebrow="быстрый выбор" title="Не знаешь, что выбрать?" />
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            {picker.map((item, index) => (
              <motion.button
                key={item.title}
                onClick={() => choosePackage(item.key)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 text-center transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.08] md:min-h-[310px] md:rounded-[2rem] md:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600 text-lg font-black text-white shadow-[0_0_30px_rgba(217,70,239,.28)] md:mb-7 md:h-12 md:w-12 md:rounded-2xl md:text-xl">{index + 1}</div>
                <h3 className="text-lg font-black md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-zinc-400 md:text-sm md:leading-6">{item.text}</p>
                <div className="mx-auto mt-auto inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-2 text-xs font-black text-cyan-100 md:px-4 md:text-sm">
                  {item.result}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section id="fleet" className="relative overflow-hidden bg-[#050505] px-5 py-16 md:px-8 md:py-28">
        <div className="absolute left-0 top-0 h-28 w-full bg-fuchsia-600/15 [clip-path:polygon(0_0,100%_0,100%_20%,0_80%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <SectionTitle eyebrow="техника" title="Железо под твой сценарий" text="Эндуро, питбайки, квадроциклы и сноубайк — выбирай формат под опыт, сезон и компанию." />

          <div className="mb-6 flex flex-wrap justify-center gap-2 pb-2">
            {fleetFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleFleetFilter(filter.key)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wide transition md:text-sm ${
                  activeFleetFilter === filter.key
                    ? "border-cyan-300 bg-cyan-300 text-black shadow-[0_0_28px_rgba(34,211,238,.25)]"
                    : "border-white/10 bg-white/[0.04] text-white hover:border-fuchsia-400/50 hover:bg-fuchsia-500/[0.08]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <FleetCarousel items={displayedFleet} selected={selected} onSelect={setSelected} />
        </div>
      </section>

      <section id="prices" className="relative overflow-hidden bg-black px-5 py-14 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="relative mx-auto w-full max-w-7xl">
          <SectionTitle eyebrow="цены и форматы" title="Выбери пакет под свой опыт" />

          <div className="grid gap-3 md:hidden">
            {packageOrder.map((key) => {
              const item = packages[key];
              const isActive = activePackage === key;
              return (
                <div key={key}>
                  <button
                    onClick={() => { setActivePackage(key); setExpanded(null); }}
                    className={`w-full rounded-3xl border p-4 text-left transition-all ${isActive ? "border-cyan-300 bg-cyan-300 text-black shadow-[0_0_35px_rgba(34,211,238,.25)]" : "border-white/10 bg-white/[0.04] text-white"}`}
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.22em] opacity-70">{item.label}</div>
                    <div className="mt-1 text-xl font-black">{item.title}</div>
                    <div className="mt-2 text-xs opacity-75">{item.hook}</div>
                  </button>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="mb-4 text-sm leading-6 text-zinc-300">{item.note}</p>
                      <div className="grid gap-3">
                        {item.items.map((service, index) => {
                          const isOpen = expanded === `${key}-${index}`;
                          return (
                            <div key={`${item.title}-${service.name}`} className="rounded-2xl border border-white/10 bg-black/45 p-4">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <div className="text-base font-black">{service.name}</div>
                                  <div className="mt-2 inline-flex rounded-full bg-fuchsia-600 px-3 py-1.5 text-xs font-black text-white">{service.price}</div>
                                </div>
                                <button onClick={() => setExpanded(isOpen ? null : `${key}-${index}`)} className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs font-black text-cyan-100">
                                  {isOpen ? "−" : "+"}
                                </button>
                              </div>
                              {isOpen && <p className="mt-3 text-xs leading-5 text-zinc-400">{service.details}</p>}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden md:block">
            <div className="mb-6 grid gap-3 md:grid-cols-4">
              {packageOrder.map((key) => {
                const item = packages[key];
                return (
                  <button key={key} onClick={() => { setActivePackage(key); setExpanded(null); }} className={`rounded-3xl border p-5 text-left transition-all ${activePackage === key ? "border-cyan-300 bg-cyan-300 text-black shadow-[0_0_35px_rgba(34,211,238,.25)]" : "border-white/10 bg-white/[0.04] text-white hover:border-fuchsia-400/50 hover:bg-fuchsia-500/[0.08]"}`}>
                    <div className="text-xs font-black uppercase tracking-[0.22em] opacity-70">{item.label}</div>
                    <div className="mt-2 text-xl font-black">{item.title}</div>
                    <div className="mt-3 text-sm opacity-75">{item.hook}</div>
                  </button>
                );
              })}
            </div>

            <motion.div key={activePackage} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-7">
              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.28em] text-fuchsia-300">{currentPackage.short} · {currentPackage.label}</div>
                  <h3 className="mt-2 text-3xl font-black md:text-5xl">{currentPackage.title}</h3>
                  <p className="mt-3 max-w-3xl text-zinc-300">{currentPackage.note}</p>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-black text-zinc-300">
                  <Clock className="h-4 w-4 text-cyan-300" />
                  от 1 часа
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {currentPackage.items.map((item, index) => {
                  const isOpen = expanded === `${activePackage}-${index}`;
                  return (
                    <div key={`${currentPackage.title}-${item.name}`} className="rounded-3xl border border-white/10 bg-black/45 p-5 transition hover:border-cyan-300/40">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div>
                          <div className="text-xl font-black">{item.name}</div>
                          <div className="mt-3 inline-flex rounded-full bg-fuchsia-600 px-4 py-2 text-sm font-black text-white">{item.price}</div>
                        </div>
                        <button onClick={() => setExpanded(isOpen ? null : `${activePackage}-${index}`)} className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
                          {isOpen ? "Скрыть" : "Подробнее"}
                        </button>
                      </div>
                      {isOpen && <p className="mt-4 text-sm leading-6 text-zinc-400">{item.details}</p>}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="included" className="relative overflow-hidden bg-[#050505] px-5 py-14 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="relative mx-auto w-full max-w-7xl">
          <SectionTitle eyebrow="что входит" title="В цене не только техника" />
          <div className="grid items-stretch gap-8 lg:grid-cols-[.86fr_1.14fr]">
            <div
              className="grid h-full gap-3"
              style={{ gridTemplateRows: `repeat(${included.length}, minmax(0, 1fr))` }}
            >
              {included.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[72px] items-center gap-3 rounded-[1.6rem] border border-white/10 bg-black/50 p-4 transition hover:border-fuchsia-400/45 md:min-h-[86px] md:rounded-3xl md:p-5 lg:min-h-0"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-black">
                    ✓
                  </div>
                  <div className="text-base font-bold leading-snug text-zinc-100 md:text-lg">{item}</div>
                </div>
              ))}
            </div>

            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-4 pb-5 pt-5 md:px-6 md:pb-6 md:pt-6">
              <h3 className="text-3xl font-black">Экипировка</h3>

              <div className="relative mt-4 flex flex-1 flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-transparent px-2 pt-2">
                <div className="relative flex min-h-[430px] flex-1 items-center justify-center sm:min-h-[500px] md:min-h-[560px]">
                  <div className="flex h-full w-full items-end justify-center">
                    <div className="inline-flex items-end justify-center -space-x-6 sm:-space-x-10 md:-space-x-24">
                      <img
                        src={asset("/images/equipment-rider-front.png")}
                        alt="Экипировка райдера спереди"
                        className="pointer-events-none h-[59%] max-h-[312px] w-auto translate-x-6 object-contain drop-shadow-[0_34px_80px_rgba(0,0,0,.55)] sm:h-[66%] sm:max-h-[368px] sm:translate-x-9 md:h-[100%] md:max-h-[760px] md:translate-x-[5.75rem]"
                      />
                      <img
                        src={asset("/images/equipment-rider-back.png")}
                        alt="Экипировка райдера сзади"
                        className="pointer-events-none h-[59%] max-h-[312px] w-auto -translate-x-1 object-contain drop-shadow-[0_34px_80px_rgba(0,0,0,.55)] sm:h-[66%] sm:max-h-[368px] sm:-translate-x-3 md:h-[100%] md:max-h-[760px] md:-translate-x-8"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative pb-3">
                  <div className="flex flex-wrap justify-center gap-2">
                    {gear.map((item) => (
                      <span
                        key={item}
                        className="inline-flex min-h-[32px] items-center rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-100 shadow-[0_0_18px_rgba(0,0,0,.18)] sm:text-xs md:min-h-[36px] md:px-3.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="format" className="relative overflow-hidden bg-black px-5 py-20 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl">
          <SectionTitle eyebrow="почему мы" title="Мотокайф с нормальной организацией" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: index * 0.06 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-cyan-300/50">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-5 py-20 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="relative mx-auto w-full max-w-7xl">
          <SectionTitle eyebrow="как всё проходит" title="Путь до старта" />

          <div className="relative">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-1 rounded-full bg-white/10 md:block" />
            <motion.div
              className="absolute left-[12.5%] top-8 hidden h-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200 shadow-[0_0_30px_rgba(34,211,238,.35)] md:block"
              initial={{ width: "0%" }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 2.1, ease: "easeInOut" }}
            />

            <div className="grid gap-4 md:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative z-10 flex min-h-[190px] flex-col items-center rounded-[2rem] border border-white/10 bg-black/55 p-6 text-center backdrop-blur-xl"
                >
                  <motion.div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white text-2xl font-black text-black shadow-[0_0_34px_rgba(255,255,255,.18)]"
                    animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 22px rgba(236,72,153,.22)", "0 0 34px rgba(34,211,238,.34)", "0 0 22px rgba(236,72,153,.22)"] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25, ease: "easeInOut" }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="text-lg font-black leading-snug">{step}</div>
                  <div className="mt-auto pt-5 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                    шаг {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RealRideGallery />

      <section id="booking" className="relative overflow-hidden bg-black px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(236,72,153,.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,.18),transparent_32%)]" />
        <NoiseLayer />
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl md:p-12">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-fuchsia-600 text-white shadow-[0_0_45px_rgba(236,72,153,.35)]">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">Готов ехать? Напиши нам.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">Скажи дату, количество человек, опыт и желаемый формат. Мы подберём технику, маршрут и свободное время.</p>
              <div className="mt-7 space-y-3 text-sm text-zinc-400">
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" /> <span>{brand.address}</span></div>
                <div className="flex items-center gap-3"><Snowflake className="h-4 w-4 text-cyan-300" /> <span>Летние и зимние форматы</span></div>
              </div>
            </div>
            <ContactCards compact />
          </div>
        </div>
      </section>


      <LocationMap />

      <footer className="border-t border-white/10 bg-black px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 md:flex-row md:items-center">
          <div>© 2026 {brand.name}. Прокат внедорожной техники в Санкт-Петербурге.</div>
          <div className="flex gap-5">
            <a className="hover:text-fuchsia-300" href="#picker">Что выбрать</a>
            <a className="hover:text-fuchsia-300" href="#fleet">Техника</a>
            <a className="hover:text-fuchsia-300" href="#prices">Цены</a>
            <a className="hover:text-fuchsia-300" href="#photos">Фото</a>
            <a className="hover:text-fuchsia-300" href="#location">Карта</a>
            <a className="hover:text-fuchsia-300" href="#booking">Запись</a>
          </div>
        </div>
      </footer>

      <MobileStickyCta />
    </main>
  );
}
