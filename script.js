$(document).ready(function() {

	// Determinamos el ancho de cada sección y lo centramos.
	// Hay que calcularlo porque estamos posicionando el elemento como absolute.
	$('.slider__slides ul').each(function() {
		var innerWidth = $(this).innerWidth();

		$(this).css({
			width: innerWidth,
			position: 'absolute',
			left: ($('.slider').width() - innerWidth) / 2
		});
	});

	// Guardamos el número de la página actual.
	var actualPage = -1;

	$('.slider__menu a').click(function(e) {
		e.preventDefault();

		// Próxima página.
		var nextPage = $(this).index('.slider__menu a');

		// Cambiamos los colores del menú.
		$('.slider__menu a').removeClass('active');
		$(this).addClass('active');

		// El slider se acaba de inicializar.
		if (actualPage == -1) {
			$('.slider__slides ul:first li').addClass('enter-left');
		}
		// Desplazamos el contenido hacia la izquierda.
		else if (nextPage > actualPage) {
			$('.slider__slides ul:eq(' + actualPage + ') li')
				.removeClass('enter-left enter-right')
				.addClass('exit-left');
			$('.slider__slides ul:eq(' + nextPage + ') li')
				.removeClass('exit-right')
				.addClass('enter-left');
		}
		// Hacia la derecha.
		else if (nextPage < actualPage) {
			$('.slider__slides ul:eq(' + actualPage + ') li')
				.removeClass('enter-left enter-right')
				.addClass('exit-right');
			$('.slider__slides ul:eq(' + nextPage + ') li')
				.removeClass('exit-left')
				.addClass('enter-right');
		}

		// Movemos el indicador.
		$('.slider__caret').css('left', $(this).position().left + $(this).width() / 2 - $('.slider__caret').width() / 2);

		// Cambiamos la página actual.
		actualPage = nextPage;
	});
	
	// Al cargar la página provocamos la carga de la primera sección.
	$('.slider__menu a:first').click();

});