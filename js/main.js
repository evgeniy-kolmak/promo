const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 120
  }, 900);
  return false;
});

$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .burger, .menu').toggleClass('active');
    $('body, html').toggleClass('scroll-hidden');
  });

  $('.menu-item__link').click(function (event) {
    $('.menu, .header-burger, .active').removeClass('active');
    $('body, html').removeClass('scroll-hidden');
  });
});

$(document).ready(function () {
  $('.open-form').click(function (event) {
    $('.hero-text').removeClass('visual');
    $('.hero-form').removeClass('not-visual');
    $('.hero-form').toggleClass('visual');
    $('.hero-text').toggleClass('not-visual');

  });
  $('.backout').click(function (event) {
    $('.hero-text').removeClass('not-visual');
    $('.hero-form').removeClass('visual');
    $('.hero-form').toggleClass('not-visual');
    $('.hero-text').toggleClass('visual');
  });

});

