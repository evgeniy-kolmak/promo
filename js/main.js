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
    $('.header-burger, .nav-item').toggleClass('active');
    $('body, html').toggleClass('scroll-hidden');
  });

  $('.nav-item__link').click(function (event) {
    $('.nav-item, .header-burger').removeClass('active');
    $('body, html').removeClass('scroll-hidden');
  });
});

