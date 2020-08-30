const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');

peso.addEventListener('input', callbackPeso);

function callbackPeso (e) {
  resultado.textContent = Number(e.target.value)/6;
}

