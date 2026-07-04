import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Sparkles, Zap, Building2, MessageSquare, BookOpen, Database } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const TX = { primary: "#2B2A28", secondary: "#6B6863", muted: "#9B9790" };
const BG = { warm: "#FAF8F5", tint: "#F5F3EF", white: "#FFFFFF" };
const BORDER = "#E8E5E0";
const NAVY = "#1a4d8c";
const GOLD = "#C99A2E";

const plans = [
  {
    name: "شروع",
    badge: null,
    price: "۸۰–۱۲۰ میلیون",
    priceSub: "تومان — یک‌بار راه‌اندازی",
    delivery: "تحویل ۳–۴ هفته",
    desc: "برای شرکت‌هایی که می‌خواهند از Excel فاصله بگیرند",
    features: [
      "کاربران و سطح دسترسی",
      "مدیریت پروژه",
      "داشبورد مدیریتی",
      "تقویم شمسی",
      "برندینگ و استقرار",
    ],
    highlighted: false,
    cta: "درخواست برآورد",
  },
  {
    name: "استاندارد",
    badge: "پرطرفدار",
    price: "۱۵۰–۲۵۰ میلیون",
    priceSub: "تومان — یک‌بار راه‌اندازی",
    delivery: "تحویل ۵–۷ هفته",
    desc: "مناسب اکثر شرکت‌های پیمانکاری با چند پروژه همزمان",
    features: [
      "همه امکانات پکیج شروع",
      "صورت‌وضعیت و مالی",
      "گزارش پیشرفت",
      "اعلان و پیام داخلی",
    ],
    highlighted: true,
    cta: "درخواست برآورد",
  },
  {
    name: "سازمانی",
    badge: null,
    price: "۳۰۰–۵۰۰ میلیون",
    priceSub: "تومان — یک‌بار راه‌اندازی",
    delivery: "تحویل ۸–۱۲ هفته",
    desc: "برای شرکت‌های بزرگ‌تر با نیاز کامل میدانی و اداری",
    features: [
      "همه امکانات پکیج استاندارد",
      "مناقصات",
      "حضور میدانی",
      "دبیرخانه",
      "پاسخگویی اولویت‌دار",
    ],
    highlighted: false,
    cta: "درخواست برآورد",
  },
];

const maintenancePlans = [
  {
    name: "پایه",
    price: "۳–۵ میلیون",
    includes: "VPS، SSL، بک‌آپ، رفع باگ",
  },
  {
    name: "حرفه‌ای",
    price: "۸–۱۲ میلیون",
    includes: "همه موارد پایه + ۵ ساعت edit، امنیت",
  },
  {
    name: "سازمانی",
    price: "۱۵–۲۵ میلیون",
    includes: "همه موارد حرفه‌ای + ۱۵ ساعت edit، SMS، SLA",
  },
];

const addons = [
  { icon: Zap, name: "ساعت توسعه اضافه", desc: "۸۰۰ هزار تا ۱.۲ میلیون تومان به ازای هر ساعت." },
  { icon: Sparkles, name: "ماژول اختصاصی", desc: "۵۰ تا ۱۵۰ میلیون تومان — بسته به دامنه و پیچیدگی." },
  { icon: BookOpen, name: "آموزش نیم‌روز", desc: "۱۰ تا ۱۵ میلیون تومان — کارگاه برای مدیران و پرسنل کلیدی." },
  { icon: Database, name: "مهاجرت داده", desc: "۲۰ تا ۶۰ میلیون تومان — انتقال و پاک‌سازی اطلاعات Excel." },
];

export function Pricing() {
  return (
    <div style={{ background: BG.warm }}>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pt-24 pb-20 dot-grid">
        <div
          className="absolute top-0 right-1/3 w-[400px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(201,154,46,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[350px] h-[250px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,77,140,0.07) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: GOLD }}
            >
              تعرفه و قیمت‌گذاری
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6"
              style={{ color: TX.primary }}
            >
              سرمایه‌گذاری شفاف،<br />
              <span style={{ color: GOLD }}>بازگشت مطمئن</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed" style={{ color: TX.secondary }}>
              هزینه‌ها از پیش مشخص و شفاف است. قیمت دقیق بر اساس مقیاس و نیاز واقعی شرکت شما در اولین جلسه تعیین می‌شود.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Pricing Cards ─── */}
      <section className="pb-24" style={{ background: BG.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pt-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 items-stretch"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className="relative flex flex-col rounded-2xl p-7 transition-all duration-300"
                style={
                  plan.highlighted
                    ? {
                        background: `linear-gradient(160deg, ${NAVY} 0%, #1e3a6e 100%)`,
                        border: `1px solid ${NAVY}`,
                        boxShadow: `0 8px 40px ${NAVY}25, 0 2px 8px ${NAVY}15`,
                        transform: "scale(1.02)",
                      }
                    : {
                        background: BG.warm,
                        border: `1px solid ${BORDER}`,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }
                }
              >
                {plan.badge && (
                  <span
                    className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-xs font-black px-4 py-1.5 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, #E0B84A, #B8860B)`,
                      color: "#1F1E1C",
                      boxShadow: "0 4px 12px rgba(184,134,11,0.3)",
                    }}
                  >
                    {plan.badge}
                  </span>
                )}

                <div
                  className="mb-5 pb-5"
                  style={{ borderBottom: plan.highlighted ? "1px solid rgba(255,255,255,0.12)" : `1px solid ${BORDER}` }}
                >
                  <h3
                    className="text-xl font-black mb-1"
                    style={{ color: plan.highlighted ? "#fff" : TX.primary }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: plan.highlighted ? "rgba(255,255,255,0.55)" : TX.secondary }}
                  >
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-6">
                  <p
                    className="text-2xl font-black"
                    style={{ color: plan.highlighted ? "#E0B84A" : TX.primary }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: plan.highlighted ? "rgba(255,255,255,0.4)" : TX.muted }}
                  >
                    {plan.priceSub}
                  </p>
                  {"delivery" in plan && plan.delivery && (
                    <p
                      className="text-xs mt-2 font-semibold"
                      style={{ color: plan.highlighted ? "rgba(255,255,255,0.55)" : NAVY }}
                    >
                      {plan.delivery}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: plan.highlighted ? "#E0B84A" : NAVY }}
                      />
                      <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.75)" : TX.secondary }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button
                    className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-200"
                    style={
                      plan.highlighted
                        ? {
                            background: "linear-gradient(135deg, #E0B84A, #B8860B)",
                            color: "#1F1E1C",
                            boxShadow: "0 2px 8px rgba(184,134,11,0.3)",
                          }
                        : {
                            background: "transparent",
                            border: `1px solid ${BORDER}`,
                            color: TX.secondary,
                          }
                    }
                    onMouseEnter={(e) => {
                      if (plan.highlighted) {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(184,134,11,0.45)";
                        (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #E8C458, #C99A2E)";
                      } else {
                        (e.currentTarget as HTMLButtonElement).style.background = BG.tint;
                        (e.currentTarget as HTMLButtonElement).style.borderColor = `${NAVY}35`;
                        (e.currentTarget as HTMLButtonElement).style.color = NAVY;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.highlighted) {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 8px rgba(184,134,11,0.3)";
                        (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #E0B84A, #B8860B)";
                      } else {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = BORDER;
                        (e.currentTarget as HTMLButtonElement).style.color = TX.secondary;
                      }
                    }}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Setup Cost ─── */}
      <section className="py-20" style={{ background: BG.warm }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: BG.white,
              border: `1px solid ${BORDER}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}25` }}
              >
                <Building2 className="w-5 h-5" style={{ color: GOLD }} />
              </div>
              <div>
                <h2 className="text-xl font-black mb-1" style={{ color: TX.primary }}>هزینه راه‌اندازی</h2>
                <p className="text-sm" style={{ color: TX.muted }}>یک‌بار پرداخت — جدا از اشتراک ماهانه</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: TX.secondary }}>
              هزینه setup اولیه شامل سفارشی‌سازی برند، پیکربندی سیستم بر اساس ساختار شرکت، ورود اطلاعات اولیه (پروژه‌ها، پرسنل، چارت سازمانی) و آموزش تیم می‌شود. این هزینه بر اساس پیچیدگی و مقیاس شرکت در جلسه اول برآورد می‌گردد.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "سفارشی‌سازی برند", sub: "لوگو، رنگ‌بندی، اطلاعات شرکت" },
                { label: "ورود اطلاعات اولیه", sub: "پروژه‌ها، پرسنل، ساختار سازمانی" },
                { label: "آموزش تیم", sub: "کارگاه آموزشی برای مدیران و پرسنل" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-4"
                  style={{ background: BG.tint, border: `1px solid ${BORDER}` }}
                >
                  <p className="text-sm font-bold mb-1" style={{ color: TX.primary }}>{item.label}</p>
                  <p className="text-xs" style={{ color: TX.muted }}>{item.sub}</p>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 mb-8"
              style={{ background: `${NAVY}08`, border: `1px solid ${NAVY}20` }}
            >
              <p className="text-sm font-bold mb-2" style={{ color: TX.primary }}>شرایط پرداخت</p>
              <p className="text-sm" style={{ color: TX.secondary }}>
                ۴۰٪ پیش‌پرداخت — ۳۰٪ تحویل staging — ۳۰٪ تحویل نهایی
              </p>
            </div>

            <div>
              <h3 className="text-lg font-black mb-4" style={{ color: TX.primary }}>نگهداری ماهانه</h3>
              <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${BORDER}` }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: BG.tint }}>
                      <th className="text-right p-4 font-bold" style={{ color: TX.primary }}>سطح</th>
                      <th className="text-right p-4 font-bold" style={{ color: TX.primary }}>ماهانه</th>
                      <th className="text-right p-4 font-bold" style={{ color: TX.primary }}>شامل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenancePlans.map((row, i) => (
                      <tr
                        key={row.name}
                        style={{ background: i % 2 === 0 ? BG.white : BG.tint, borderTop: `1px solid ${BORDER}` }}
                      >
                        <td className="p-4 font-semibold" style={{ color: TX.primary }}>{row.name}</td>
                        <td className="p-4" style={{ color: NAVY }}>{row.price} تومان</td>
                        <td className="p-4" style={{ color: TX.secondary }}>{row.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3" style={{ color: TX.muted }}>
                افزونه‌های اختیاری: ۱۵ تا ۸۰ میلیون تومان به ازای هر ماژول
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Add-on Services ─── */}
      <section className="pb-20 line-grid" style={{ background: BG.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p
                className="text-xs font-bold tracking-[0.15em] uppercase mb-3"
                style={{ color: GOLD }}
              >
                اختیاری
              </p>
              <h2 className="text-2xl md:text-3xl font-black" style={{ color: TX.primary }}>
                خدمات جانبی
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {addons.map((a) => (
                <motion.div
                  key={a.name}
                  variants={fadeUp}
                  className="flex gap-4 rounded-2xl p-6 transition-all duration-200"
                  style={{
                    background: BG.warm,
                    border: `1px solid ${BORDER}`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${GOLD}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = BORDER;
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}22` }}
                  >
                    <a.icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: TX.primary }}>{a.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: TX.secondary }}>{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── navy for contrast */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#1a2f5a" }}>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-30" />
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: GOLD }}>
              شروع همکاری
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              آماده سامانه مدیریت پروژه داشته باشید؟
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              در یک جلسه کوتاه، سیستم را نشانتان می‌دهیم، نیازها را بررسی می‌کنیم و قیمت دقیق را با هم تعیین می‌کنیم.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-base btn-gold">
                درخواست مشاوره
                <MessageSquare className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
