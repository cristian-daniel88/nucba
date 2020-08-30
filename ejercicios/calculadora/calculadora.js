const calculadora = document.querySelector('#calculadora');
const inputUno = document.querySelector('#inputUno');
const inputDos = document.querySelector('#inputDos');


calculadora.addEventListener('submit', callback )

function callback (e) {
    e.preventDefault()
    var inputUnoValue = Number(inputUno.value);
    var inputDosValue = Number(inputDos.value);
    console.log(inputUnoValue + inputDosValue);
}




// Calculadora 2


const calculadora2 = document.querySelector('#calculadora2');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar'); 
const resultado = document.querySelector('#resultado'); 



sumar.addEventListener('click', sumarFn)
restar.addEventListener('click', restarFn)

function sumarFn () {
    if (number1.value === '' || number2.value === '') {
        alert('tenes que completar ambos campos')
        return
    }

    const primerValor = Number(number1.value);
    const segundoValor = Number(number2.value);
    const valorFinal = primerValor + segundoValor;


    const parrafo = document.createElement('h1');
    parrafo.textContent = valorFinal;
    resultado.appendChild(parrafo)
    // resultado.innerHTML = '<h1>' +   valorFinal + '</h1>'


}

function restarFn() {
    const primerValor = Number(number1.value);
    const segundoValor = Number(number2.value);

    console.log(primerValor - segundoValor)
    
}

