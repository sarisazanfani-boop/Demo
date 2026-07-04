import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

const TX = { primary: "#2B2A28", secondary: "#6B6863", muted: "#9B9790" };
const BG = { warm: "#FAF8F5", tint: "#F5F3EF", white: "#FFFFFF" };
const BORDER = "#E8E5E0";
const NAVY = "#1a4d8c";
const GOLD = "#C99A2E";

export function CaseStudy() {
  return (
    <div>
      {/* Hero — light warm */}
      <section className="py-24 relative overflow-hidden dot-grid" style={{ background: BG.warm }}>
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,77,140,0.07) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                border: `1px solid ${GOLD}35`,
                background: `${GOLD}10`,
                color: "#9A7420",
              }}
            >
              گزارش پیاده‌سازی
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl font-black leading-tight mb-5"
              style={{ color: TX.primary }}
            >
              ساماندهی فرآیندهای<br />
              <span style={{ color: GOLD }}>سریع‌سازان البرز</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed max-w-2xl"
              style={{ color: TX.secondary }}
            >
              چگونه یک شرکت پیمانکاری با ۳ پروژه فعال و بیش از ۱۵۰ پرسنل، پراکندگی اطلاعات را با یک سامانه یکپارچه حل کرد.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 line-grid" style={{ background: BG.white }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Company overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl p-8 mb-14"
            style={{ background: BG.tint, border: `1px solid ${BORDER}`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
          >
            <h3
              className="text-sm font-bold tracking-wider uppercase mb-5"
              style={{ color: TX.muted }}
            >
              خلاصه وضعیت شرکت
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["زمینه فعالیت", "راهسازی و ابنیه"],
                ["پروژه‌های فعال در زمان راه‌اندازی", "۳ پروژه همزمان"],
                ["تعداد کارگاه‌ها", "۱ دفتر مرکزی — ۳ کارگاه"],
                ["پرسنل تحت مدیریت سیستم", "۴۵ نفر ستادی و سرپرست"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 items-start">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: NAVY }}
                  />
                  <div>
                    <p className="text-xs" style={{ color: TX.muted }}>{k}</p>
                    <p className="font-semibold" style={{ color: TX.primary }}>{v}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Before */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-black mb-8"
              style={{ color: TX.primary }}
            >
              وضعیت قبل از راه‌اندازی
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-5 mb-14">
              {[
                {
                  title: "تاخیر در گزارش‌گیری",
                  body: "آماده کردن گزارش پیشرفت برای مدیرعامل نیازمند تجمیع ۵ تا ۶ فایل Excel از افراد مختلف بود — حداقل دو روز کاری زمان می‌گرفت.",
                },
                {
                  title: "ابهام در هزینه‌ها",
                  body: "تنخواه‌گردان‌ها فاکتورها را کاغذی می‌آوردند و تطابق آن‌ها با بودجه مصوب با خطای انسانی زیادی همراه بود.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl p-6"
                  style={{
                    background: "#fff5f5",
                    border: "1px solid #fed7d7",
                  }}
                >
                  <XCircle className="w-7 h-7 mb-4" style={{ color: "#ef4444" }} />
                  <h4 className="font-bold mb-2" style={{ color: TX.primary }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: TX.secondary }}>{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-black mb-4"
              style={{ color: TX.primary }}
            >
              راهکار و ماژول‌های فعال‌شده
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="leading-relaxed mb-8"
              style={{ color: TX.secondary }}
            >
              پس از جلسات نیازسنجی، پیاده‌سازی طی ۶ هفته انجام شد. رویکرد این بود که سیستم برای سرپرست کارگاه در موبایل باید به اندازه کافی ساده باشد تا مقاومت ایجاد نشود.
            </motion.p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
              {[
                { name: "مدیریت پروژه", desc: "ساختار شکست کار (WBS) تعریف و مسئولیت‌ها مشخص شد." },
                { name: "مالی و صورت‌وضعیت", desc: "فرم‌های دیجیتال برای ثبت روزانه هزینه کارگاه." },
                { name: "مناقصات", desc: "بایگانی دیجیتال اسناد و آلارم‌دهی تاریخ ضمانت‌نامه‌ها." },
                { name: "حضور میدانی", desc: "ثبت ورود/خروج پرسنل کارگاه با موقعیت جغرافیایی (GPS)." },
                { name: "دبیرخانه", desc: "مدیریت نامه‌های کارفرما و مشاور در بستر سیستم." },
              ].map((m) => (
                <motion.div
                  key={m.name}
                  variants={fadeUp}
                  className="rounded-xl p-5 transition-shadow duration-200 hover:shadow-sm"
                  style={{ background: BG.tint, border: `1px solid ${BORDER}` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: NAVY }} />
                    <h4 className="font-bold text-sm" style={{ color: TX.primary }}>{m.name}</h4>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: TX.secondary }}>{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-black mb-8"
              style={{ color: TX.primary }}
            >
              نتایج پس از ۶ ماه استفاده
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "داشبورد لحظه‌ای",
                  body: "اکنون مدیرعامل با باز کردن پنل خود در ۵ دقیقه می‌داند دیروز در هر کارگاه چه کاری انجام شده و چقدر هزینه شده است.",
                },
                {
                  title: "شفافیت مالی",
                  body: "فرآیند تایید فاکتورهای تنخواه از چند روز به چند ساعت کاهش یافت و مغایرت‌های مالی بین کارگاه و دفتر مرکزی به صفر رسید.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl p-6"
                  style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                  }}
                >
                  <CheckCircle2 className="w-7 h-7 mb-4" style={{ color: "#16a34a" }} />
                  <h4 className="font-bold mb-2" style={{ color: TX.primary }}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: TX.secondary }}>{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA — navy for contrast */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#1a2f5a" }}>
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-30" />
        <div className="container mx-auto px-4 text-center max-w-xl relative z-10">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">چالش‌های مشابهی دارید؟</h3>
          <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            سیستم ما دقیقاً برای حل همین مشکلات در شرکت‌های پیمانکاری طراحی شده است.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-7 py-3.5 rounded-xl font-bold btn-gold">
                برای شرکت خود مشاوره بگیرید
              </button>
            </Link>
            <Link href="/">
              <button
                className="px-7 py-3.5 rounded-xl font-medium flex items-center gap-2 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)" }}
              >
                بازگشت به صفحه اصلی
                <ChevronLeft className="w-4 h-4 opacity-60" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
