var swiper = new Swiper(".minerSlider", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    },
    811: {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".magazine__next",
        prevEl: ".magazine__prev",
      },
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".magazine__next",
        prevEl: ".magazine__prev",
      },
    },

  }
});