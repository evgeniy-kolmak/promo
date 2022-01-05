jQuery(document).ready(function () {
    jQuery("form").submit(function () { // Событие отправки с формы
        var form_data = jQuery(this).serialize(); // Собираем данные из полей
        jQuery.ajax({
            type: "POST", // Метод отправки
            url: "telegram.php", // Путь к PHP обработчику 
            data: form_data,
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

        $(this).find('input, textarea').prop('disabled', true);
        event.preventDefault();
    });
});