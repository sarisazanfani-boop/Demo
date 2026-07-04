const NAV = [
  { href: "/modules.html", label: "ماژول‌ها", key: "modules" },
  { href: "/pricing.html", label: "تعرفه", key: "pricing" },
  { href: "/case-study.html", label: "نمونه پروژه", key: "case-study" },
];

function currentPage(): string {
  const path = window.location.pathname;
  if (path.includes("modules")) return "modules";
  if (path.includes("pricing")) return "pricing";
  if (path.includes("case-study")) return "case-study";
  if (path.includes("contact")) return "contact";
  return "home";
}

function navLinks(active: string): string {
  return NAV.map(
    (item) =>
      `<a href="${item.href}" class="nav-link ${active === item.key ? "nav-link-active" : ""}">${item.label}</a>`
  ).join("");
}

export function initLayout(): void {
  const active = currentPage();
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");

  if (header) {
    header.innerHTML = `
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-8">
        <a href="/" class="group flex items-center gap-3">
          <div class="relative">
            <img src="/logo.svg" alt="عمران‌سام" class="h-10 w-10 transition duration-300 group-hover:scale-105" />
            <span class="absolute -bottom-0.5 -left-0.5 h-3 w-3 rounded-full bg-accent ring-2 ring-white"></span>
          </div>
          <div class="leading-tight">
            <span class="block text-lg font-extrabold tracking-tight text-primary">عمران‌سام</span>
            <span class="hidden text-[10px] font-medium text-muted sm:block">سامانه مدیریت پروژه عمرانی</span>
          </div>
        </a>
        <div class="hidden items-center gap-1 lg:flex">
          ${navLinks(active)}
          <a href="/contact.html" class="btn-primary mr-4 !py-2.5 !px-5 !text-sm">
            درخواست مشاوره
            <svg class="h-4 w-4 rotate-180 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
        <button id="mobile-menu-btn" type="button" class="btn-ghost lg:hidden" aria-label="منو" aria-expanded="false">
          <svg id="menu-icon-open" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg id="menu-icon-close" class="hidden h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </nav>
      <div id="mobile-menu" class="hidden border-t border-slate-200/80 bg-white/95 px-4 py-5 backdrop-blur-xl lg:hidden">
        <div class="flex flex-col gap-1">
          ${NAV.map((item) => `<a href="${item.href}" class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary ${active === item.key ? "!bg-primary/5 !text-primary font-semibold" : ""}">${item.label}</a>`).join("")}
          <a href="/contact.html" class="btn-primary mt-3 text-center">درخواست مشاوره</a>
        </div>
      </div>
    `;

    const menuBtn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const iconOpen = document.getElementById("menu-icon-open");
    const iconClose = document.getElementById("menu-icon-close");

    menuBtn?.addEventListener("click", () => {
      const open = menu?.classList.toggle("hidden") === false;
      menuBtn.setAttribute("aria-expanded", String(open));
      iconOpen?.classList.toggle("hidden", open);
      iconClose?.classList.toggle("hidden", !open);
    });

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 12);
    });
  }

  if (footer) {
    footer.innerHTML = `
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <div class="grid gap-12 md:grid-cols-12">
          <div class="md:col-span-5">
            <a href="/" class="mb-5 inline-flex items-center gap-3">
              <img src="/logo.svg" alt="" class="h-10 w-10" />
              <span class="text-xl font-extrabold text-primary">عمران‌سام</span>
            </a>
            <p class="max-w-sm text-sm leading-relaxed text-muted">
              طراحی و استقرار سامانه مدیریت پروژه برای شرکت‌های پیمانکاری — از صورت‌وضعیت و مناقصه تا حضور میدانی و دبیرخانه.
            </p>
            <div class="mt-6 flex gap-3">
              <a href="/contact.html" class="btn-primary !py-2 !px-4 !text-xs">درخواست مشاوره</a>
              <a href="/pricing.html" class="btn-outline !py-2 !px-4 !text-xs">تعرفه</a>
            </div>
          </div>
          <div class="md:col-span-3">
            <h4 class="mb-4 text-sm font-bold text-slate-900">دسترسی سریع</h4>
            <ul class="space-y-3 text-sm text-muted">
              <li><a href="/modules.html" class="transition hover:text-primary">ماژول‌ها</a></li>
              <li><a href="/pricing.html" class="transition hover:text-primary">تعرفه و پکیج‌ها</a></li>
              <li><a href="/case-study.html" class="transition hover:text-primary">نمونه پروژه</a></li>
            </ul>
          </div>
          <div class="md:col-span-4">
            <h4 class="mb-4 text-sm font-bold text-slate-900">تماس</h4>
            <ul class="space-y-3 text-sm text-muted">
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="/contact.html" class="transition hover:text-primary">فرم درخواست مشاوره</a>
              </li>
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
                demo.omransam.ir
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p class="text-xs text-muted">© ۱۴۰۴ عمران‌سام — تمامی حقوق محفوظ است.</p>
          <p class="text-xs text-muted">تهران، ایران</p>
        </div>
      </div>
    `;
  }
}
