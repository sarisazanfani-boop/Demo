import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Building2, Users, Calculator, BarChart3,
  FileText, MapPin, MessageSquare,
  MessageSquareText, FlaskConical, Network,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const TX = { primary: "#2B2A28", secondary: "#6B6863", muted: "#9B9790" };
const BG = { warm: "#FAF8F5", tint: "#F5F3EF", white: "#FFFFFF" };
const BORDER = "#E8E5E0";
const NAVY = "#1a4d8c";
const GOLD = "#C99A2E";

const tiers = [
  {
    tag: "بسته پایه",
    headline: "شروع با هسته اصلی",
    desc: "کنترل پایه پروژه‌ها و مدیریت تیم",
    accent: NAVY,
    modules: [
      { icon: Building2, name: "مدیریت پروژه", desc: "تعریف پروژه‌ها، فازها، وظایف و کنترل مراحل اجرا با امکان پیوست مستندات." },
      { icon: Users, name: "کاربران و سطح دسترسی", desc: "مدیریت ساختار سازمانی با بیش از ۳۴ نقش قابل تنظیم و محدودیت‌های اختصاصی." },
    ],
  },
  {
    tag: "بسته حرفه‌ای",
    headline: "کنترل دقیق مالی",
    desc: "گزارشات مدیریتی و مالی پروژه‌ها",
    accent: GOLD,
    modules: [
      { icon: Calculator, name: "صورت‌وضعیت و مالی", desc: "ثبت هزینه‌های کارگاهی، مدیریت تنخواه‌گردان و صورت‌وضعیت پیمانکاران جزء." },
      { icon: BarChart3, name: "گزارش پیشرفت", desc: "داشبورد و نمودارهای مدیریتی برای رصد وضعیت زمان و هزینه پروژه‌ها." },
    ],
  },
  {
    tag: "بسته سازمانی",
    headline: "مدیریت یکپارچه",
    desc: "فرآیندهای اداری، میدانی و مستندات",
    accent: "#059669",
    modules: [
      { icon: FileText, name: "مناقصات", desc: "مدیریت یکپارچه فرآیند مناقصه، اسناد، ضمانت‌نامه‌ها و تاریخ‌های مهم." },
      { icon: MapPin, name: "حضور میدانی", desc: "ثبت حضور پرسنل در کارگاه با مختصات جغرافیایی (GPS) و اپلیکیشن موبایل." },
      { icon: MessageSquare, name: "دبیرخانه", desc: "مدیریت مکاتبات، نامه‌ها، مستندات رسمی و ارجاعات بین واحدها." },
    ],
  },
  {
    tag: "افزونه‌های جانبی",
    headline: "قابلیت‌های تکمیلی",
    desc: "امکانات قابل افزودن به سیستم",
    accent: "#7c3aed",
    modules: [
      { icon: MessageSquareText, name: "سامانه پیامک", desc: "ارسال پیامک‌های خودکار اطلاع‌رسانی به مدیران و تاییدات." },
      { icon: FlaskConical, name: "آزمایشگاه", desc: "ثبت و بایگانی نتایج آزمایشات کنترل کیفیت مصالح و بتن." },
      { icon: Network, name: "چند شرکتی (هلدینگ)", desc: "مدیریت همزمان چند شرکت زیرمجموعه در یک سامانه واحد." },
    ],
  },
];

export function Modules() {
  return (
    <div>
      {/* Hero — light warm */}
      <section
        className="py-24 relative overflow-hidden dot-grid"
        style={{ background: BG.warm }}
      >
        <div
          className="absolute top-0 right-1/3 w-[400px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,77,140,0.07) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
              style={{ color: GOLD }}
            >
              سامانه عمران‌سام
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6"
              style={{ color: TX.primary }}
            >
              ماژول‌ها و امکانات
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed"
              style={{ color: TX.secondary }}
            >
              سامانه به صورت ماژولار طراحی شده — از امکانات پایه شروع کنید و به مرور ماژول‌های پیشرفته‌تر را اضافه کنید.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 line-grid" style={{ background: BG.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-20">
          {tiers.map((tier, ti) => (
            <motion.div
              key={tier.tag}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-start gap-5 mb-8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 mt-0.5"
                  style={{ background: tier.accent }}
                >
                  {ti + 1}
                </div>
                <div>
                  <span
                    className="inline-block text-xs font-bold tracking-wider uppercase mb-1 px-2 py-0.5 rounded"
                    style={{ color: tier.accent, background: `${tier.accent}12` }}
                  >
                    {tier.tag}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black leading-tight" style={{ color: TX.primary }}>
                    {tier.headline}
                  </h2>
                  <p className="mt-1" style={{ color: TX.secondary }}>{tier.desc}</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tier.modules.map((mod) => (
                  <motion.div
                    key={mod.name}
                    variants={fadeUp}
                    className="rounded-2xl p-6 transition-all duration-200"
                    style={{
                      background: BG.warm,
                      border: `1px solid ${BORDER}`,
                      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.09)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${tier.accent}35`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = BORDER;
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${tier.accent}10`, border: `1px solid ${tier.accent}20` }}
                    >
                      <mod.icon className="w-5 h-5" style={{ color: tier.accent }} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: TX.primary }}>{mod.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: TX.secondary }}>{mod.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA — navy for contrast */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#1a2f5a" }}>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-30" />
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">ماژول اختصاصی نیاز دارید؟</h2>
          <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            امکان توسعه ماژول‌های کاملاً اختصاصی بر اساس فرآیندهای منحصر‌به‌فرد شرکت شما وجود دارد.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3.5 rounded-xl font-bold text-base btn-gold">
              درخواست مشاوره فنی
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
