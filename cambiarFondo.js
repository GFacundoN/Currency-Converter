// Seleccionamos el checkbox y el main
const checkbox = document.getElementById('toggle-fondo');
const main = document.getElementById('main');

// Escuchamos el cambio de estado del checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    // Fondo claro
    main.style.backgroundImage = "url(imags/lightBackground.webp)";
  } else {
    // Fondo oscuro (por defecto)
    main.style.backgroundImage = "url('https://framerusercontent.com/images/o4c5WxB83uMuL9HDzZhOVTZczKA.svg')";
  }
});
