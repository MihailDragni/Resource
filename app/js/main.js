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
        if($(window).width() <= 768 && cur_width > 768){
            //reload
            location.reload();
        }
        else if($(window).width() > 768 && cur_width <= 768){
            //reload
            location.reload();
        }
    });
  });
});