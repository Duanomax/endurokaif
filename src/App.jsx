import React, { useMemo, useState } from "react";
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
  telegram: "https://t.me/endurokaif",
  whatsapp: "https://wa.me/79819547442",
  phone: "tel:+79819547442",
  max: "https://max.ru/endurokaif",
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
  { title: "Telegram", text: "Основная запись", href: brand.telegram, primary: true, icon: MessageCircle },
  { title: "WhatsApp", text: "Быстрый вопрос", href: brand.whatsapp, primary: false, icon: MessageCircle },
  { title: "Позвонить", text: "+7 981 954-74-42", href: brand.phone, primary: false, icon: Phone },
  { title: "MAX", text: "Написать в мессенджер", href: brand.max, primary: false, icon: MessageCircle },
];

const fleet = [
  {
    title: "Питбайк 125",
    category: "Pitbike",
    subtitle: "Лёгкий старт для новичков и базовой тренировки",
    specs: "125 кубов · 12 лс · колёса 17/14",
    fit: "рост 155–175 см · вес 50–90 кг",
    from: "от 4 500 ₽/час",
    accent: "from-orange-500/40 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/pitbike-125-cutout.png"),
  },
  {
    title: "BSE Z5 250",
    category: "Enduro",
    subtitle: "Полноразмерный эндуро для опытных райдеров",
    specs: "250 кубов · 21 лс · 172 мотор · МКПП",
    fit: "колёса 21/18 · электростартер",
    from: "от 5 500 ₽/час",
    accent: "from-yellow-300/35 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/bse-z5-cutout.png"),
  },
  {
    title: "XGZ 300",
    category: "Enduro",
    subtitle: "Среднеразмерный эндуро с баланс-валом",
    specs: "300 кубов · 25 лс · 175 мотор · МКПП",
    fit: "колёса 21/18 · электростартер",
    from: "от 5 500 ₽/час",
    accent: "from-cyan-300/35 via-fuchsia-500/20 to-white/10",
    image: asset("/images/xgz-300-cutout.png"),
  },
  {
    title: "STN R6 / V6 / G9 PRO",
    category: "Enduro Pro",
    subtitle: "Мощная техника для уверенного наката",
    specs: "300 кубов · 25–33 лс · МКПП",
    fit: "полноразмерники · есть водянка G9 PRO",
    from: "от 6 000 ₽/час",
    accent: "from-orange-500/35 via-fuchsia-500/20 to-cyan-300/20",
    image: asset("/images/stn-r6-cutout.png"),
  },
  {
    title: "Квадроциклы 200 / 650–750",
    category: "ATV",
    subtitle: "Тур с гидом, экипировкой, маршрутом и фото/видео",
    specs: "200–750 кубов · АКПП · гид на отдельной технике",
    fit: "для одного, пары или компактной компании",
    from: "от 6 000 ₽/час",
    accent: "from-lime-400/35 via-cyan-300/20 to-fuchsia-500/20",
    image: asset("/images/quad-200-cutout.png"),
  },
  {
    title: "Сноубайки",
    category: "Winter",
    subtitle: "Зимний формат для тех, кто хочет новый опыт",
    specs: "сезонный формат · снежные маршруты",
    fit: "условия и цена зависят от сезона",
    from: "по запросу",
    accent: "from-white/25 via-cyan-300/25 to-fuchsia-500/15",
    image: asset("/images/snowbike-cutout.png"),
  },
];

const packages = {
  training: {
    title: "Занятие с тренером",
    short: "Новичкам",
    label: "для новичков",
    hook: "Никогда не ездил? Начинай здесь.",
    note: "Обязательно для всех без опыта. Также подходит опытным райдерам для роста навыка.",
    items: [
      { name: "Питбайк 125", price: "6 000 ₽/час", details: "Базовая посадка, газ, торможение, повороты. Лучший вход для новичка." },
      { name: "BSE Z5 250", price: "7 000 ₽/час", details: "Полноразмерный эндуро, МКПП. Для тех, кто уже готов к большей технике." },
      { name: "XGZ 300", price: "7 000 ₽/час", details: "Среднеразмерник с баланс-валом. Мягче по ощущениям, но уже серьёзный эндуро." },
      { name: "STN R6 300", price: "7 500 ₽/час", details: "Полноразмерник, 25 лс. Для уверенного занятия с тренером." },
      { name: "STN V6 300", price: "8 000 ₽/час", details: "Полноразмерник, 25 лс. Больше техники и нагрузки." },
      { name: "STN G9 PRO 300", price: "9 000 ₽/час", details: "33 лс, водяное охлаждение, Loncin 176. Самый бодрый вариант в занятии." },
    ],
  },
  guided: {
    title: "Мото-тур",
    short: "Опытным",
    label: "с гидом",
    hook: "Уже ездил? Поехали в маршрут.",
    note: "Только для опытных райдеров. Гид ведёт маршрут, ты получаешь эндуро-кайф без навигационной головной боли.",
    items: [
      { name: "Питбайк 125", price: "5 500 ₽/час", details: "125 кубов, 12 лс, колёса 17/14." },
      { name: "BSE Z5 250", price: "6 500 ₽/час", details: "250 кубов, 21 лс, полноразмерник." },
      { name: "XGZ 300", price: "6 500 ₽/час", details: "300 кубов, 25 лс, среднеразмерник." },
      { name: "STN R6 300", price: "7 000 ₽/час", details: "300 кубов, 25 лс, полноразмерник." },
      { name: "STN V6 300", price: "7 500 ₽/час", details: "300 кубов, 25 лс, полноразмерник." },
      { name: "STN G9 PRO 300", price: "8 500 ₽/час", details: "300 кубов, 33 лс, водяное охлаждение, Loncin 176." },
    ],
  },
  quad: {
    title: "Квадро-тур",
    short: "Компаниям",
    label: "с гидом",
    hook: "Хочешь с друзьями, парой или ребёнком?",
    note: "Подходит для новичков, пар и компаний. Гид едет на отдельной технике, маршрут готов заранее.",
    items: [
      {
        name: "Квадроцикл 200 кубов",
        price: "6 000 ₽ — 1-й час · далее 5 000 ₽/час",
        details:
          "Среднеразмерный, АКПП. Идеален для 1 человека 60–100 кг и ростом 150–180 см или 1 взрослый + ребёнок общей массой до 120 кг. Доп. пассажир — 500 ₽/час.",
      },
      {
        name: "Квадроцикл 650–750 кубов",
        price: "8 000 ₽/час",
        details:
          "Полноразмерная база, АКПП, 44–52 лс. Без ограничений по максимальному росту и весу. Доп. пассажир — 1 000 ₽/час.",
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
      { name: "Питбайк 125", price: "4 500 ₽/час", details: "125 кубов, 12 лс, колёса 17/14." },
      { name: "BSE Z5 250", price: "5 500 ₽/час", details: "250 кубов, 21 лс, полноразмерник, колёса 21/18." },
      { name: "XGZ 300", price: "5 500 ₽/час", details: "300 кубов, 25 лс, среднеразмерник, баланс-вал." },
      { name: "STN R6 300", price: "6 000 ₽/час", details: "300 кубов, 25 лс, полноразмерник." },
      { name: "STN V6 300", price: "6 500 ₽/час", details: "300 кубов, 25 лс, полноразмерник." },
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
  "Тур или занятие по выбранному формату",
  "Гид на отдельной технике для туров",
  "Подготовленная техника",
  "Бак бензина",
  "Комплект экипировки",
  "Вводный инструктаж по безопасности",
  "Подготовленные маршруты",
  "Вода + перекус",
  "Фото/видео на память",
  "Участие в беспроигрышной лотерее",
];

const gear = ["Шлем", "Очки", "Балаклава", "Джерси", "Перчатки"];

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
      <div className="relative mx-auto max-w-7xl">
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
  ];

  return (
    <section id="photos" className="relative overflow-hidden bg-[#050505] px-5 py-20 md:px-8 md:py-28">
      <AnimatedBackground />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle eyebrow="реальные покатушки" title="Живой оффроуд без постановки" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] md:min-h-[420px]"
            >
              <img src={photo.src} alt={photo.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute left-5 right-5 top-5 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">Эндурокайф</div>
                <div className="mt-2 text-2xl font-black">{photo.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechPreview({ selected, compact = false }) {
  return (
    <>
      <div className={`relative overflow-hidden bg-gradient-to-br ${selected.accent} p-4 ${compact ? "min-h-[330px]" : "min-h-[460px] p-6"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,.16),transparent_32%),linear-gradient(135deg,rgba(0,0,0,.18),rgba(0,0,0,.92))]" />
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:46px_46px]" />
        <motion.img
          src={selected.image}
          alt={selected.title}
          className={`relative z-10 mx-auto w-full object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,.75)] ${compact ? "h-[210px]" : "h-[350px]"}`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mt-2">
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-fuchsia-200 md:text-xs">{selected.category}</div>
          <div className={`${compact ? "text-2xl" : "text-4xl"} mt-2 font-black tracking-tight`}>{selected.title}</div>
          <div className="mt-2 max-w-xl text-sm text-zinc-300 md:text-base">{selected.subtitle}</div>
        </div>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-3 md:p-5">
        <div className="rounded-3xl border border-white/10 bg-black/35 p-4 md:p-5">
          <Gauge className="mb-3 h-5 w-5 text-cyan-300" />
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">характеристики</div>
          <div className="mt-1 text-sm font-bold md:text-base">{selected.specs}</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/35 p-4 md:p-5">
          <Star className="mb-3 h-5 w-5 text-fuchsia-400" />
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">кому подходит</div>
          <div className="mt-1 text-sm font-bold md:text-base">{selected.fit}</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/35 p-4 md:p-5">
          <Zap className="mb-3 h-5 w-5 text-yellow-200" />
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">стоимость</div>
          <div className="mt-1 text-sm font-bold md:text-base">{selected.from}</div>
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
  const [activePackage, setActivePackage] = useState("training");
  const [expanded, setExpanded] = useState(null);
  const currentPackage = packages[activePackage];

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

        <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100svh-86px)] max-w-7xl items-center px-5 pb-24 pt-8 md:min-h-[calc(100vh-96px)] md:px-8 md:pb-28 md:pt-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/35 bg-fuchsia-500/15 px-4 py-2 text-sm font-black uppercase tracking-wide text-fuchsia-100 shadow-[0_0_34px_rgba(236,72,153,.18)]">
              <Zap className="h-4 w-4" />
              {brand.city} · {brand.shortPlace} · {brand.since}
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl md:text-8xl lg:text-9xl">
              Грязь. Газ. <span className="text-fuchsia-500 drop-shadow-[0_0_18px_rgba(236,72,153,.55)]">Кайф.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 tracking-normal text-zinc-200 md:text-xl md:leading-8">
              {brand.name} — эндуро, питбайки и квадроциклы в СПб. Техника, экипировка, инструктаж, гиды, тренер и маршруты, после которых хочется вернуться.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#booking">Записаться в Telegram</CTAButton>
              <CTAButton href="#picker" variant="secondary">Подобрать формат</CTAButton>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["2019", "работаем на рынке"],
                ["4", "формата катания"],
                ["Тренер", "новичкам рядом"],
              ].map(([value, label]) => (
                <div key={label} className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
                  <div className="text-2xl font-black text-white md:text-3xl">{value}</div>
                  <div className="mt-1 text-xs leading-5 text-zinc-400 md:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <DiagonalDivider />
      </section>

      <section id="picker" className="relative overflow-hidden bg-black px-5 py-20 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle eyebrow="быстрый выбор" title="Не знаешь, что выбрать?" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {picker.map((item, index) => (
              <motion.button
                key={item.title}
                onClick={() => choosePackage(item.key)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.08]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-300 to-yellow-200" />
                <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-600 text-xl font-black text-white shadow-[0_0_30px_rgba(217,70,239,.28)]">{index + 1}</div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
                <div className="mx-auto mt-auto inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100">
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
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle eyebrow="техника" title="Железо под твой сценарий" text="Питбайки для старта, эндуро для опытных, квадроциклы для туров и компаний, сноубайки для зимнего формата." />

          <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
            <div className="grid gap-3">
              {fleet.map((item) => (
                <div key={item.title}>
                  <button onClick={() => setSelected(item)} className={`group w-full rounded-3xl border p-4 text-left transition-all md:p-5 ${selected.title === item.title ? "border-fuchsia-400 bg-fuchsia-600 text-white shadow-[0_0_40px_rgba(217,70,239,.26)]" : "border-white/10 bg-white/[0.04] text-white hover:border-cyan-300/45 hover:bg-cyan-300/[0.08]"}`}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200 md:text-xs">{item.category}</div>
                        <div className="mt-1 text-xl font-black md:text-2xl">{item.title}</div>
                        <div className={`mt-1 text-sm ${selected.title === item.title ? "text-white/75" : "text-zinc-400"}`}>{item.subtitle}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>

                  {selected.title === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-3 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] lg:hidden"
                    >
                      <TechPreview selected={selected} compact />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <motion.div key={selected.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="hidden overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] lg:block">
              <TechPreview selected={selected} />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="prices" className="relative overflow-hidden bg-black px-5 py-20 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle eyebrow="цены и форматы" title="Выбери пакет под свой опыт" />

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
      </section>

      <section id="included" className="relative overflow-hidden bg-[#050505] px-5 py-20 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle eyebrow="что входит" title="В цене не только техника" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-fuchsia-400/45">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-black">✓</div>
                  <div className="font-semibold text-zinc-100">{item}</div>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-600 text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="relative text-3xl font-black">Экипировка</h3>
              <p className="relative mt-3 leading-7 text-zinc-400">Перед выездом выдаём базовый комплект, чтобы клиент не думал, что ему нужно покупать всё заранее.</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {gear.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-black uppercase text-zinc-200">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="format" className="relative overflow-hidden bg-black px-5 py-20 md:px-8 md:py-28">
        <AnimatedBackground />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
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
        <div className="relative mx-auto max-w-7xl">
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
