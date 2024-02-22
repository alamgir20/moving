  // swiper oe
  let SwiperTop = new Swiper('.swiper--top', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true
  });

  // swiper tow
  var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },

  });

  // swiper three
  var swiper = new Swiper('.mys', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,

    autoplay: {
      delay: 5000,
    },

  });