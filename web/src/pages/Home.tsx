import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Building2,
  Calculator,
  MapPin,
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  AlertTriangle,
  TrendingUp,
  Wifi,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.10 } } };

const TX = { primary: "#2B2A28", secondary: "#6B6863", muted: "#9B9790" };
const BG = { warm: "#FAF8F5", tint: "#F5F3EF", white: "#FFFFFF", navy: "#1a2f5a" };
const BORDER = "#E8E5E0";
const NAVY = "#1a4d8c";
const GOLD = "#C99A2E";

export function Home() {
  return (
    <div className="flex flex-col">

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden dot-grid"
        style={{ background: BG.warm }}
      >
        {/* Subtle warm glow */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(201,154,46,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,77,140,0.07) 0%, transparent 70%)" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.div variants={fadeUp}>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                  style={{
                    border: `1px solid ${GOLD}40`,
                    background: `${GOLD}10`,
                    color: "#9A7420",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD }} />
                  سامانه تخصصی پیمانکاری
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-black leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", color: TX.primary }}
              >
                مدیریت پروژه‌های عمرانی
                <br />
                <span style={{ color: GOLD }}>بدون پراکندگی اطلاعات</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 text-[1.05rem] leading-[1.85]" style={{ color: TX.secondary }}>
                وقتی اطلاعات پروژه در Excel‌های پراکنده است، گزارش‌گیری روزها طول می‌کشد.
                عمران‌سام یک سامانه اختصاصی برای شرکت‌های پیمانکاری است — نه ERP عمومی،
                نه ابزار آماده بی‌ربط.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <button
                    data-testid="button-hero-cta"
                    className="px-7 py-3.5 rounded-xl font-bold text-base btn-gold"
                  >
                    درخواست مشاوره
                  </button>
                </Link>
                <a href="https://demo.omransam.ir" target="_blank" rel="noopener noreferrer">
                  <button
                    data-testid="button-hero-demo"
                    className="px-7 py-3.5 rounded-xl font-medium text-base flex items-center gap-2 transition-all duration-200"
                    style={{
                      border: `1px solid ${BORDER}`,
                      color: TX.secondary,
                      background: BG.white,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = NAVY + "50";
                      (e.currentTarget as HTMLButtonElement).style.color = NAVY;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = BORDER;
                      (e.currentTarget as HTMLButtonElement).style.color = TX.secondary;
                    }}
                  >
                    مشاهده دمو
                    <ChevronLeft className="w-4 h-4 opacity-60" />
                  </button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-sm" style={{ color: TX.muted }}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />تحویل ۴–۱۲ هفته
                </span>
                <span className="w-px h-4" style={{ background: BORDER }} />
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" style={{ color: NAVY }} />سرور اختصاصی
                </span>
                <span className="w-px h-4" style={{ background: BORDER }} />
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" style={{ color: GOLD }} />در حال استفاده
                </span>
              </motion.div>
            </motion.div>

            {/* Mock dashboard — light theme, aligned with site palette */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(201,154,46,0.06) 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: BG.white,
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 20px 50px rgba(43,42,40,0.08), 0 4px 12px rgba(43,42,40,0.04)",
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ background: BG.tint, borderBottom: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E8C4C4" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E8D9B8" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C8D9C8" }} />
                    <span className="text-xs mr-2 font-medium" style={{ color: TX.muted }}>عمران‌سام — داشبورد</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-5 rounded-md" style={{ background: BG.white, border: `1px solid ${BORDER}` }} />
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${NAVY}12`, color: NAVY, border: `1px solid ${NAVY}20` }}
                    >
                      م
                    </div>
                  </div>
                </div>

                <div className="flex" style={{ height: 360 }}>
                  {/* Sidebar */}
                  <div
                    className="w-44 flex flex-col p-3 gap-0.5"
                    style={{ background: BG.warm, borderLeft: `1px solid ${BORDER}` }}
                  >
                    {[
                      { label: "پروژه‌های فعال", active: true },
                      { label: "صورت‌وضعیت‌ها", active: false },
                      { label: "حضور میدانی", active: false },
                      { label: "مناقصات", active: false },
                      { label: "گزارشات", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                        style={{
                          background: item.active ? `${NAVY}10` : "transparent",
                          color: item.active ? NAVY : TX.secondary,
                          fontWeight: item.active ? 600 : 500,
                        }}
                      >
                        {item.label}
                      </div>
                    ))}
                    <div className="mt-auto pt-3" style={{ borderTop: `1px solid ${BORDER}` }}>
                      <div className="px-3 py-2 text-xs" style={{ color: TX.muted }}>سریع‌سازان البرز</div>
                    </div>
                  </div>

                  {/* Main */}
                  <div className="flex-1 p-5 overflow-hidden" style={{ background: BG.white }}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-semibold" style={{ color: TX.primary }}>پروژه‌های فعال</p>
                        <p className="text-xs mt-0.5" style={{ color: TX.muted }}>بروزرسانی: امروز ۰۸:۳۰</p>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ background: "#EEF6F0", border: "1px solid #D4E8D9", color: "#4A7C59" }}
                      >
                        وضعیت مطلوب
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { label: "پروژه فعال", val: "۷" },
                        { label: "هزینه ثبت‌شده", val: "۲۴M" },
                        { label: "پرسنل میدانی", val: "۴۳" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="rounded-lg p-2.5 text-center"
                          style={{ background: BG.warm, border: `1px solid ${BORDER}` }}
                        >
                          <p className="font-bold text-base" style={{ color: NAVY }}>{s.val}</p>
                          <p className="text-[10px] mt-0.5" style={{ color: TX.muted }}>{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { name: "پروژه مجتمع تجاری آفتاب", pct: 75, status: "در حال اجرا", statusColor: "#4A7C59", barColor: NAVY, cost: "۱۲ میلیارد" },
                        { name: "احداث پل روگذر شهری", pct: 32, status: "تاخیر — تامین مصالح", statusColor: "#9A7420", barColor: GOLD, cost: "۳ میلیارد" },
                        { name: "بازسازی مدرسه فاز ۲", pct: 91, status: "تکمیل شده", statusColor: TX.muted, barColor: "#6B9E7A", cost: "۸۰۰ میلیون" },
                      ].map((p) => (
                        <div
                          key={p.name}
                          className="rounded-xl p-3"
                          style={{ background: BG.warm, border: `1px solid ${BORDER}` }}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-medium" style={{ color: TX.primary }}>{p.name}</span>
                            <span className="text-xs" style={{ color: TX.muted }}>{p.pct}٪</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full mb-2" style={{ background: `${BORDER}` }}>
                            <div className="h-1.5 rounded-full" style={{ width: `${p.pct}%`, background: p.barColor, opacity: 0.85 }} />
                          </div>
                          <div className="flex justify-between text-[10px]">
                            <span style={{ color: TX.muted }}>ثبت هزینه: {p.cost}</span>
                            <span style={{ color: p.statusColor }}>{p.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section style={{ background: BG.tint, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-x-reverse" style={{ "--tw-divide-opacity": 1, borderColor: BORDER } as React.CSSProperties}>
            {[
              { num: "۳۴+", label: "نقش و سطح دسترسی" },
              { num: "۴–۱۲", label: "هفته تا تحویل اول" },
              { num: "۱۰۰٪", label: "سرور اختصاصی" },
              { num: "۵", label: "ماژول سازمانی" },
            ].map((s) => (
              <div key={s.label} className="py-8 px-6 text-center" style={{ borderColor: BORDER }}>
                <p className="text-3xl font-black" style={{ color: GOLD }}>{s.num}</p>
                <p className="text-sm mt-1" style={{ color: TX.secondary }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES ─── */}
      <section className="py-28 line-grid" style={{ background: BG.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: NAVY }}>
              چرا ابزارهای فعلی کافی نیستند
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight leading-tight" style={{ color: TX.primary }}>
              چالش‌هایی که هر پیمانکار می‌شناسد
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: FileText, color: "#ef4444", bg: "#fef2f2", border: "#fecaca", title: "پراکندگی اطلاعات", body: "اطلاعات پروژه در فایل‌های Excel پراکنده است. گزارش‌گیری مدیران روزها طول می‌کشد و اغلب با داده‌های اشتباه همراه است." },
              { icon: AlertTriangle, color: "#d97706", bg: "#fffbeb", border: "#fed7aa", title: "نرم‌افزار نامناسب", body: "نرم‌افزارهای ERP عمومی برای کار عمرانی طراحی نشده‌اند. پیاده‌سازی آن‌ها در اکثر پروژه‌ها با شکست مواجه می‌شود." },
              { icon: Wifi, color: NAVY, bg: "#EEF3FA", border: "#C7D8F0", title: "فاصله کارگاه و دفتر", body: "اطلاعات میدانی دیر به دست مدیریت می‌رسد. وقتی تاخیر گزارش می‌شود، آسیب از قبل وارد شده است." },
            ].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl p-8 transition-shadow duration-300 hover:shadow-md"
                style={{ background: BG.white, border: `1px solid ${BORDER}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                >
                  <c.icon className="w-6 h-6" style={{ color: c.color }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: TX.primary }}>{c.title}</h3>
                <p className="leading-[1.8] text-sm" style={{ color: TX.secondary }}>{c.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SOLUTION / MODULES ─── */}
      <section className="py-28" style={{ background: BG.warm }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-xl">
              <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: GOLD }}>
                ماژول‌های کلیدی
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight leading-tight" style={{ color: TX.primary }}>
                سامانه‌ای که برای کار پیمانکاری<br />طراحی شده
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 leading-relaxed" style={{ color: TX.secondary }}>
                نه ERP عمومی، نه قالب آماده. هر ماژول دقیقاً برای نیازهای عملیاتی یک شرکت عمرانی طراحی شده.
              </motion.p>
            </motion.div>
            <Link href="/modules">
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200"
                style={{ border: `1px solid ${BORDER}`, color: NAVY, background: BG.white }}
              >
                همه ماژول‌ها
                <ChevronLeft className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { icon: Building2, title: "مدیریت پروژه", desc: "تعریف پروژه‌ها، مراحل اجرا، وظایف تیمی و کنترل پیشرفت" },
              { icon: Calculator, title: "صورت‌وضعیت و مالی", desc: "ثبت هزینه‌ها، مدیریت صورت‌وضعیت و گزارش مالی پروژه" },
              { icon: MapPin, title: "حضور میدانی", desc: "ثبت آنلاین حضور پرسنل با موقعیت جغرافیایی از موبایل" },
              { icon: FileText, title: "مناقصات", desc: "مدیریت یکپارچه اسناد، مراحل و نتایج مناقصه‌ها" },
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-7 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  background: BG.white,
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.09)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${NAVY}35`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = BORDER;
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${NAVY}10`, border: `1px solid ${NAVY}18` }}
                >
                  <f.icon className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: TX.primary }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TX.secondary }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST / WHY ─── light warm blue tint */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#EEF3FA" }}>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,77,140,0.07) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: GOLD }}>
              چرا عمران‌سام
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight leading-tight" style={{ color: TX.primary }}>
              سه چیزی که مدیران<br />می‌خواهند بدانند
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Clock, title: "تحویل ۴ تا ۱۲ هفته", body: "بسته به اندازه و نیازهای شرکت شما، سامانه در همین بازه زمانی راه‌اندازی، آموزش داده و تحویل می‌شود." },
              { icon: ShieldCheck, title: "داده‌ها مال شماست", body: "سرور اختصاصی، نه ابر مشترک. اطلاعات قرارداد، صورت‌وضعیت و پرسنل شما فقط روی سرور خودتان ذخیره می‌شود." },
              { icon: CheckCircle2, title: "سامانه اجراشده", body: "این یک ایده روی کاغذ نیست. نسخه اول سامانه در یک شرکت پیمانکاری فعال در حال استفاده است." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl p-8 transition-all duration-200 glass-card hover:shadow-md"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${GOLD}12`, border: `1px solid ${GOLD}25` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: TX.primary }}>{item.title}</h3>
                <p className="text-sm leading-[1.85]" style={{ color: TX.secondary }}>{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-28" style={{ background: BG.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: NAVY }}>
              فرآیند همکاری
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: TX.primary }}>
              از اولین تماس تا راه‌اندازی
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute top-6 right-6 left-6 h-px hidden md:block"
              style={{ background: `linear-gradient(to left, transparent, ${NAVY}20, transparent)` }}
            />
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                { num: "۰۱", title: "نیازسنجی", body: "جلسه آشنایی، بررسی فرآیندهای شرکت و تعیین ماژول‌های موردنیاز" },
                { num: "۰۲", title: "قرارداد", body: "برآورد دقیق هزینه، امضای قرارداد و تعیین جدول زمانی" },
                { num: "۰۳", title: "راه‌اندازی", body: "توسعه، تنظیم سرور اختصاصی، آموزش تیم و آزمایش نهایی" },
                { num: "۰۴", title: "پشتیبانی", body: "پشتیبانی مستمر، بروزرسانی و اضافه کردن قابلیت‌های جدید" },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="relative text-center">
                  <div
                    className="w-12 h-12 rounded-full text-white font-black text-sm flex items-center justify-center mx-auto mb-5 relative z-10"
                    style={{ background: NAVY, boxShadow: `0 4px 16px ${NAVY}30` }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-xs font-bold tracking-wider mb-1" style={{ color: GOLD }}>{s.num}</p>
                  <h3 className="font-bold mb-2" style={{ color: TX.primary }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: TX.secondary }}>{s.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY TEASER ─── */}
      <section className="py-20 line-grid" style={{ background: BG.warm }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
            style={{ background: BG.white, border: `1px solid ${BORDER}`, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
          >
            <div className="flex-1">
              <span
                className="inline-block text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded mb-4"
                style={{ background: `${NAVY}10`, color: NAVY }}
              >
                نمونه پروژه
              </span>
              <h3 className="text-xl md:text-2xl font-black mb-3" style={{ color: TX.primary }}>
                سریع‌سازان البرز — از Excel به سامانه
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: TX.secondary }}>
                چگونه یک شرکت با ۳ پروژه فعال و ۱۵۰+ پرسنل، پراکندگی اطلاعات را با سامانه عمران‌سام حل کرد.
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "۶ هفته", label: "تا راه‌اندازی" },
                  { val: "۵ دقیقه", label: "گزارش روزانه" },
                  { val: "صفر", label: "مغایرت مالی" },
                  { val: "۴۵ نفر", label: "تحت مدیریت" },
                ].map((m) => (
                  <div key={m.label} className="text-center rounded-xl p-3" style={{ background: BG.tint, border: `1px solid ${BORDER}` }}>
                    <p className="text-lg font-black" style={{ color: NAVY }}>{m.val}</p>
                    <p className="text-xs" style={{ color: TX.muted }}>{m.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/case-study">
                <button
                  className="w-full px-5 py-2.5 rounded-xl text-sm font-bold transition-all btn-gold"
                >
                  مطالعه کامل
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── navy dark band for contrast */}
      <section className="py-20 relative overflow-hidden" style={{ background: BG.navy }}>
        <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.3 }} />
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: `${GOLD}` }}>
              شروع همکاری
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              می‌خواهید سامانه مدیریت پروژه داشته باشید؟
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>
              در یک جلسه رایگان، سامانه را نشانتان می‌دهیم و ببینیم آیا برای شرکت شما مناسب است.
            </p>
            <Link href="/contact">
              <button
                data-testid="button-bottom-cta"
                className="px-8 py-3.5 rounded-xl font-bold text-base btn-gold"
              >
                درخواست مشاوره
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
