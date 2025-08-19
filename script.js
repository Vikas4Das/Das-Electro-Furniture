window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      mainNav.classList.toggle("open");
      document.body.classList.toggle("nav-open");
    });

    window.addEventListener("click", (e) => {
      if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
        mainNav.classList.remove("open");
        document.body.classList.remove("nav-open");
      }
    });
  }

  const scrollContainer = document.querySelector(".arrival-grid");
  const btnLeft = document.querySelector(".scroll-btn.left");
  const btnRight = document.querySelector(".scroll-btn.right");

  const scrollAmount = 300;

  if (scrollContainer && btnLeft && btnRight) {
    btnLeft.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const storeScrollContainer = document.querySelector(".store-grid");
  const storeBtnLeft = document.querySelector(".visit-store .scroll-btn.left");
  const storeBtnRight = document.querySelector(
    ".visit-store .scroll-btn.right"
  );

  const scrollAmount = 300;

  if (storeScrollContainer && storeBtnLeft && storeBtnRight) {
    storeBtnLeft.addEventListener("click", () => {
      storeScrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    storeBtnRight.addEventListener("click", () => {
      storeScrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".bg-slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".contact-btn");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      contactBtn.classList.add("hide");
    } else {
      contactBtn.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
