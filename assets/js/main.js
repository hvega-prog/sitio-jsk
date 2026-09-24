// JSK Autopartes — interacciones del sitio
(function () {
  var WHATSAPP = '50670813307';
  var EMAIL = 'info@jskautopartes.com';

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  // Año del pie de página
  document.getElementById('year').textContent = new Date().getFullYear();

  // Formulario de cotización: arma el mensaje y lo abre en WhatsApp o en el correo
  var form = document.getElementById('quote-form');
  var error = form.querySelector('.form__error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var get = function (k) { return (d.get(k) || '').toString().trim(); };

    if (!get('nombre') || !get('vehiculo') || !get('repuesto')) {
      error.hidden = false;
      return;
    }
    error.hidden = true;

    var lines = [
      'Hola JSK Autopartes, quisiera cotizar un repuesto.',
      '',
      'Nombre: ' + get('nombre')
    ];
    if (get('empresa')) lines.push('Empresa: ' + get('empresa'));
    lines.push('Vehículo: ' + get('vehiculo'));
    if (get('vin')) lines.push('VIN / N.º de parte: ' + get('vin'));
    lines.push('Repuesto: ' + get('repuesto'));
    lines.push('Provincia: ' + get('provincia'));
    var text = lines.join('\n');

    var channel = e.submitter && e.submitter.dataset.channel;
    if (channel === 'mail') {
      var subject = 'Solicitud de cotización - ' + get('vehiculo');
      window.location.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(text);
    } else {
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    }
  });
})();
