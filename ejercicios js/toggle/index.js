// const parrafo = document.querySelector('.parrafo + p');

// console.log(parrafo)


//** */          //  IMAGEN //              **//

const contendedor = document.querySelector('#contenedor');

const imagen = document.createElement('img');

imagen.src = "assets/imagen.jpg";

imagen.id = "img";

// imagen.classList.add('deshabilitado');
// imagen.classList.remove('deshabilitado');

// imagen.classList.toggle('deshabilitado');
// imagen.classList.toggle('deshabilitado');
// imagen.classList.toggle('deshabilitado');

contendedor.appendChild(imagen);



imagen.addEventListener('click', callback);

function callback (e) {
    console.log(e.target)
    e.target.classList.toggle('deshabilitado');
}





//** */          //  PARRAFOS //              **//

 
const parrafos = document.querySelectorAll('p');

const cantidad = parrafos.length;
console.log(cantidad)

for (i=0; i< cantidad; i++) {
        parrafos[i].addEventListener('click', callbackParrafos)
}

function callbackParrafos (e) {
    e.target.classList.toggle('deshabilitado')
}



