$(document).ready(function () {
  // Al cargar la página, ocultamos las cortinas
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  // Animación cuando se hace clic en la sección de San Valentín
  $('.valentines-day').click(function () {
    // Animación de desvanecimiento de los elementos del sobre
    $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
    
    // Esperamos a que termine la animación para ocultar los elementos
    $('.envelope').fadeOut(800, function () {
      // Ocultar elementos dentro de .valentines-day
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
      
      // Hacer visible la carta con una animación ondulante
      $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
      $('#card').animate({ 'opacity': 1 }, { 
        duration: 1000, 
        step: function (now, fx) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
          $(this).css('transform', 'scale(' + scale + ')');
        } 
      }); // Animación de ondulación
    });
  });

  // Animación para la carta cuando se carga la página de destino
  if ($('#card').length) {
    $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
    $('#card').animate({ 'opacity': 1 }, { 
      duration: 1000, 
      step: function (now, fx) {
        var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
        $(this).css('transform', 'scale(' + scale + ')');
      } 
    });

    // Mostrar el botón "Siguiente" después de la animación
    setTimeout(function () {
      $('#next-button').fadeIn();
    }, 1500); // El botón aparece después de 1.5 segundos de la animación
  }

  // Redirigir cuando se haga clic en el botón "Siguiente"
  $('#next-button').on('click', function () {
    window.location.href = 'flores/index.html'; 
  });
});
