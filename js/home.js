let copyIcon = document.querySelector('.copy__icon')

// Copy Func
copyIcon.addEventListener('click', () => {
  navigator.clipboard.writeText('https://etheriums.online/?bonus=24655');
})


// Swiper Configurations
var swiper = new Swiper(".MainPageSlider", {
  loop: true,
  navigation: {
    nextEl: ".arrow__nextMainPageSlider",
    prevEl: ".arrow__prevMainPageSlider",
  },
  slidesPerView: 2,
  spaceBetween: '14px',
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    654: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  }
});
