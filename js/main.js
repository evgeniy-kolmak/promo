const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
    $('.input').removeClass('error');
    $('label').fadeOut(1000);

  });

});

$('.contacts-form').validate({
  messages: {
    user_name: {
      required: "Пожалуйста, заполните это поле",
      minlength: "Имя не менее 2 символов",
      minlength: "Имя не более 11 символов",
    },

    user_phone: {
      required: "Пожалуйста, заполните это поле",
      minlength: "Телефон не менее 11 символов",
      maxlength: "Поле содержит более 12 символов",
      number: "Некорректный ввод (только цифры)"

    },
  },
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "telegram.php",
      data: $(form).serialize(),
    })
      .done(function () {
        $('.success').fadeIn(2000);
        $('.contacts-form__subtitle').fadeOut(-1000);
        $('.input-name').val('');
        $('.input-phone').val('');
        $('.input-comment').val('');

        setTimeout(function () {
          $('.success').fadeOut(-1000);
          $('.contacts-form__subtitle').fadeIn(-1000)

        },
          5000
        )

        setTimeout(function (event) {
          $('.hero-text').removeClass('not-visual');
          $('.hero-form').removeClass('visual');
          $('.hero-form').toggleClass('not-visual');
          $('.hero-text').toggleClass('visual');


        },
          4000
        )
      });
  }
});

// модаль;ное окно
const modal = document.querySelector('.modal');
const modalVisible = () => {
  modal.classList.add('modal--visible');
}

const closeModal = document.querySelector('.close');
console.log(closeModal);
closeModal.onclick = () => {
  modal.classList.remove('modal--visible');
}

window.onload = () => {
  setTimeout(modalVisible, 1000)
}

