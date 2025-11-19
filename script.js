document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("mainNav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  // FAQ
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });

  // Текущий год в футере
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Логика кнопок "Записаться" / "Хочу на консультацию"
  const callButtons = document.querySelectorAll(".js-consultation-btn");
  const modal = document.getElementById("callModal");
  const modalBackdrop = document.getElementById("callModalBackdrop");
  const modalClose = document.getElementById("callModalClose");

  function isDesktop() {
    return window.innerWidth >= 1024;
  }

  function openModal() {
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  }

  callButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (isDesktop()) {
        e.preventDefault();
        openModal();
      }
      // на мобильных/планшетах по умолчанию сработает tel: и откроется приложение звонка
    });
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeModal);
  }
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
