/*
	Created by Kevin Parra - KP Portafolio 2019.
*/
$(document).ready(function() {
	var windowWidth = $(window).width();

	function mouseMoveContact() {
		var docWidth = $('.container-contact').width(),
			slidesWidth = $('.container-contact ul').width(),
			rangeX = slidesWidth - docWidth,
			$images = $('.container-contact ul');
		    $(document).on('mousemove', function(e) {
				var mouseX = e.pageX,
					 offset = mouseX / docWidth * slidesWidth - mouseX / 2;

				$images.css({
					 '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)', 'transform': 'translate3d(' + -offset + 'px,0,0)'
				});
			});
	}

	if (windowWidth > 700) {
		mouseMoveContact();
	}

	$(window).resize(function () {
		if (window.matchMedia('(min-width: 700px)').matches) {
			mouseMoveContact();
		}
	});



	// $(".content-fixed a").css("background", "red");

	// // Effect scroll 
	// $(window).scroll(function() {
	// 	$(".container-history").each(function() {
	// 		var pos = $(this).offset().top,
	// 			winTop = $(window).scrollTop();
	// 		if (pos < winTop + 600) {
	// 			$(".content-fixed a").addClass('active');
	// 		}
	// 	});
	// });

});