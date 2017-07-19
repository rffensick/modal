$(function() {

	// var hf = function() {
	// 	var h_header = $('header').height();
	// 	var h_footer = $('footer').height();
	// 	$('.content').css({
	// 		'paddingTop': h_header,
	// 		'paddingBottom': h_footer
	// 	});
	// }

	// $(window).bind('load resize', hf)

	$('.cta').click(function() {
		$('.overlay').addClass('is-open');
		return false;
	});

	$('.close-btn').click(function() {
		$('.overlay').removeClass('is-open');
	});

});
