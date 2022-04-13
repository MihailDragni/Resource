document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.menu');
  const bodyLock = document.querySelector('body');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active');
      if (mobileMenu.classList.contains('menu--active')) {
        burger.classList.add('burger--active');
        bodyLock.classList.add('lock');
      }
      else {
        burger.classList.remove('burger--active');
        bodyLock.classList.remove('lock');
      }
    });

    document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  });
});



$(function(){
  $(document).ready(function(){
    var cur_width = $(window).width();
    $(window).resize(function(){
        if($(window).width() <= 992 && cur_width > 992){
            //reload
            location.reload();
        }
        else if($(window).width() > 992 && cur_width <= 992){
            //reload
            location.reload();
        }
    });
  });
  if (window.matchMedia("(max-width: 992px)").matches) {
      let accessSwiper = new Swiper ('.access__swiper', {
        slidesperview: 1,
        slidesPerGroup: 1,
        loop: false,
        spaceBetween: 60,
        speed: 800,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      let aboutSwiper = new Swiper ('.about-us__swiper', {
        slidesperview: 1,
        slidesPerGroup: 1,
        loop: false,
        speed: 800,
        spaceBetween: 150,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
      });
    }
});