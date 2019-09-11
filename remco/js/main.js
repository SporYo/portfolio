// Слайдер
$('.top-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('.trust__slider').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  
// Меню бургер

(function ($) {
	$(function () {
		$('.menu__icon').on('click', function () {
			$(this).closest('.menu').toggleClass('menu_state_open');
		});
	});
})(jQuery);