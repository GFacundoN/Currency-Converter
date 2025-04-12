// Obtenemos los elementos del DOM (HTML) necesarios para interactuar con la interfaz
const monedaEl_one = document.getElementById('moneda-uno');      // Select de moneda origen
const monedaEl_two = document.getElementById('moneda-dos');      // Select de moneda destino
const cantidadEl_one = document.getElementById('cantidad-uno');  // Input de cantidad a convertir
const cantidadEl_two = document.getElementById('cantidad-dos');  // Input del resultado convertido
const cambioEl = document.getElementById('cambio');              // Elemento donde se muestra el tipo de cambio
const tasaEl = document.getElementById('tasa');                  // Botón para invertir monedas

/**
 * Esta función obtiene el tipo de cambio actual entre dos monedas
 * y actualiza los elementos de la interfaz con el resultado.
 */
function calculate() {
  // Obtenemos los valores seleccionados en los selectores de moneda
  const moneda_one = monedaEl_one.value;
  const moneda_two = monedaEl_two.value;

  // Llamamos a la API de tasas de cambio con la moneda de origen
  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
    .then(res => res.json()) // Convertimos la respuesta a JSON
    .then(data => {
      // Obtenemos la tasa de cambio con respecto a la moneda de destino
      const tasa = data.rates[moneda_two];

      // Mostramos la tasa de cambio en la interfaz
      cambioEl.innerText = `1 ${moneda_one} = ${tasa} ${moneda_two}`;

      // Calculamos y mostramos el resultado convertido
      cantidadEl_two.value = (cantidadEl_one.value * tasa).toFixed(2);
    });
}

// Escuchamos los eventos de cambio o escritura para recalcular automáticamente
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

// Evento para invertir las monedas cuando se hace clic en el botón
tasaEl.addEventListener('click', () => {
  // Intercambiamos los valores seleccionados en los selectores
  const temp = monedaEl_one.value;
  monedaEl_one.value = monedaEl_two.value;
  monedaEl_two.value = temp;

  // Recalculamos con los nuevos valores
  calculate();
});

// Ejecutamos la función al inicio para que muestre datos por defecto
calculate();
