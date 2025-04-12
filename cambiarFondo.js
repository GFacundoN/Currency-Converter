// Seleccionamos el checkbox y el main
const checkbox = document.getElementById('toggle-fondo');
const main = document.getElementById('main');

// Seleccionamos los elementos que deben cambiar de estilo
const h1s = document.querySelectorAll('h1');
const buttons = document.querySelectorAll('.btn');
const cambios = document.querySelectorAll('.cambio');

// Escuchamos el cambio de estado del checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    // Fondo claro
    main.style.backgroundImage = "url('imags/lightBackground.webp')";

    // Cambiar color de los h1
    h1s.forEach(h1 => h1.style.color = '#3161B0');

    // Cambiar estilo de los botones
    buttons.forEach(btn => {
      btn.style.backgroundColor = '#3161B0';
      btn.style.color = '#fff';
    });

    // Cambiar color de texto .cambio
    cambios.forEach(c => c.style.color = '#3161B0');

  } else {
    // Fondo oscuro (por defecto)
    main.style.backgroundImage = "url('https://framerusercontent.com/images/o4c5WxB83uMuL9HDzZhOVTZczKA.svg')";

    // Restaurar color de los h1
    h1s.forEach(h1 => h1.style.color = 'var(--primary-color)');

    // Restaurar estilo de los botones
    buttons.forEach(btn => {
      btn.style.backgroundColor = 'var(--primary-color)';
      btn.style.color = 'black';
    });

    // Restaurar color de texto .cambio
    cambios.forEach(c => c.style.color = 'var(--primary-color)');
  }
});
