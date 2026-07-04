import "./style.css";
import { initLayout } from "./layout";
import { initContactForm } from "./contact";

initLayout();
initContactForm();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
