// меню бургер
(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery);

  // слайдер
  $('.slider-center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

  // maskinput

  $(function(){
    $(".phone_mask").mask("8(999) 999-9999");
  });

  // плавный якорь

  $(document).ready(function(){
    $("main").on("click",".arr-down", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



function replace() {
  document.querySelector(".standart-block").style.display="block";
  document.querySelector(".pro-block").style.display="none";
  document.querySelector(".premium-block").style.display="none";

  document.querySelector(".standart").classList.add('autofocus');
  document.querySelector(".pro").classList.remove('autofocus');
  document.querySelector(".premium").classList.remove('autofocus');
}

function replace2() {
  document.querySelector(".standart-block").style.display="none";
  document.querySelector(".pro-block").style.display="block";
  document.querySelector(".premium-block").style.display="none";

  document.querySelector(".standart").classList.remove('autofocus');
  document.querySelector(".pro").classList.add('autofocus');
  document.querySelector(".premium").classList.remove('autofocus');
}

function replace3() {
  document.querySelector(".standart-block").style.display="none";
  document.querySelector(".pro-block").style.display="none";
  document.querySelector(".premium-block").style.display="block";

  document.querySelector(".standart").classList.remove('autofocus');
  document.querySelector(".pro").classList.remove('autofocus');
  document.querySelector(".premium").classList.add('autofocus');
}

// uniMail

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            alert("Спасибо, Ваша заявка отправлена!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});