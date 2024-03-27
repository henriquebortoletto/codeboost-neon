new Swiper(".swipper-slide", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

AOS.init({
  duration: 1000,
  once: true,
});

function initFixedMenu() {
  const header = document.querySelector("header");
  const button = header.querySelector(".btn");

  if (!header || !button) return;

  function handleScroll() {
    const distanceScrollToTop = window.scrollY;
    const limitedHeight = 80;

    const scrollDistanceIsGreaterThanEighty =
      distanceScrollToTop > limitedHeight;

    const classHeader = "light";

    if (scrollDistanceIsGreaterThanEighty) {
      header.classList.add(classHeader);
      button.classList.replace("btn-light", "btn-secondary");
    } else {
      header.classList.remove(classHeader);
      button.classList.replace("btn-secondary", "btn-light");
    }
  }

  window.addEventListener("scroll", handleScroll);
}

initFixedMenu();

function initMenuMobile() {
  const btnMenuMobile = document.querySelector(".m-mobile");
  const menuMobile = document.querySelector(".menu-overlay");

  if (!btnMenuMobile || !menuMobile) return;

  const classMenu = "open-mobile";
  const html = document.documentElement;

  function toggleMenuMobile() {
    html.classList.toggle(classMenu);
  }

  btnMenuMobile.addEventListener("click", toggleMenuMobile);
  menuMobile.addEventListener("click", toggleMenuMobile);

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") html.classList.remove(classMenu);
  });
}

initMenuMobile();
