

$('.thanks__items').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Popup

$(document).ready(function () {
	PopUpHide();
});

function PopUpShow() {
	$("#popap-question").show();
};

function PopUpHide() {
	$("#popap-question").hide();
};

// $('main').on('click', "#popap-question", function(e){
//     e.preventDefault();
//     $("#popap-question").hide();
// });

// $('#popap-question').children().click(function(e) {
// 	return false;
// });

$(document).mouseup(function (e) {
    var container = $(".popap-call");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

// Якорь

$(document).ready(function(){
        $(".first-block").on("click","a", function (event) {
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
$(document).ready(function(){
        $("#nav2").on("click","a", function (event) {
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
    

// maskinput

$(function(){
	$(".phone_mask").mask("8(999) 999-9999");
});

// Меню бургер

(function ($) {
	$(function () {
		$('.menu__icon').on('click', function () {
			$(this).closest('.menu').toggleClass('menu_state_open');
		});
	});
})(jQuery);

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