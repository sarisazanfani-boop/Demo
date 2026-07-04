const WHATSAPP = "989000000000";

export function initContactForm(): void {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form as HTMLFormElement);
    const text = [
      "درخواست مشاوره — عمران‌سام",
      "",
      `نام: ${data.get("name")}`,
      `شرکت: ${data.get("company")}`,
      `تلفن: ${data.get("phone")}`,
      `توضیحات: ${data.get("message") || "—"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
    if (status) {
      status.textContent = "درخواست ثبت شد. در حال انتقال به واتساپ…";
      status.classList.remove("hidden");
    }
  });
}
