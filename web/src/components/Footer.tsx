import { Link } from "wouter";

export function Footer() {
  return (
    <footer style={{ background: "#F5F3EF", borderTop: "1px solid #E8E5E0" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: "linear-gradient(135deg, #E0B84A, #B8860B)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21H21" stroke="#1F1E1C" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M5 21V8L12 3L19 8V21" stroke="#1F1E1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V13H15V21" stroke="#1F1E1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: "#2B2A28" }}>عمران‌سام</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#6B6863" }}>
              سامانه مدیریت پروژه تخصصی برای شرکت‌های پیمانکاری — طراحی‌شده برای ساختاردهی اطلاعات پروژه‌ها، گزارش‌گیری سریع و اتصال دفتر به کارگاه.
            </p>
            <p className="text-xs font-mono" style={{ color: "#B0AC9F" }}>omransam.ir</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#2B2A28" }}>بخش‌ها</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "صفحه اصلی" },
                { href: "/modules", label: "ماژول‌ها" },
                { href: "/pricing", label: "تعرفه" },
                { href: "/case-study", label: "نمونه پروژه" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B6863" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#2B2A28" }}>ارتباط</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact" className="text-sm transition-colors duration-200" style={{ color: "#6B6863" }}>
                  درخواست مشاوره
                </Link>
              </li>
              <li>
                <a
                  href="https://demo.omransam.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#6B6863" }}
                >
                  مشاهده دمو
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #E8E5E0" }}
        >
          <p className="text-xs" style={{ color: "#B0AC9F" }}>
            © {new Date().getFullYear()} عمران‌سام. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
