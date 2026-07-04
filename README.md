# عمران‌سام (Omransam)



سامانه مدیریت پروژه مخصوص پیمانکاران — سایت معرفی و اسناد فروش.



## ساختار



```

omransam/

├── web/              # سایت معرفی (React + Vite + Tailwind RTL) — نسخه اصلی

├── landing/          # نسخه HTML قدیمی (آرشیو)

├── docs/

│   ├── brand/        # راهنمای برند

│   └── sales/        # قیمت، SLA، case study

└── scripts/          # اجرای لوکال

```



## اجرای لوکال



```powershell

cd web

npm install

npm run dev

```



سایت روی **http://localhost:3000** باز می‌شود.



## build برای production



```powershell

cd web

npm run build

npm run preview

```



## صفحات



| صفحه | مسیر |

|------|------|

| اصلی | `/` |

| ماژول‌ها | `/modules` |

| قیمت‌ها | `/pricing` |

| نمونه کار | `/case-study` |

| تماس | `/contact` |



## تنظیمات



- شماره واتساپ فرم تماس: `web/src/config/site.ts`

- رنگ و برند: `docs/brand/BRAND-GUIDE.md`

- قیمت‌ها: `docs/sales/PRICING-BROCHURE.md`



## نکته



پلتفرم مشتری (fork از سریع‌سازان) جداگانه deploy می‌شود — این repo فقط marketing و sales است.

