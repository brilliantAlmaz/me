$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.content').toggleClass('blur');
		$('.content').click(function(event) {
			$('.header__burger,.header__menu').removeClass('active');
			$('body').removeClass('lock');
			$('.content').removeClass('blur');
		});
		

		
	});
});