const azul = {
    vida: 100,
    fuerza: 10,
    elemento: document.querySelector('#azul'),
    elementoVida: document.querySelector('#vidaAzul'),
    mensaje: "Has morido"
}

const rojo = {
    vida: 100,
    fuerza: 10,
    elemento: document.querySelector('#rojo'),
    elementoVida: document.querySelector('#vidaRojo'),
    mensaje: "Has morido"
}


azul.elemento.addEventListener('click', pelea);

function vidaUpdate() {
    rojo.elementoVida.textContent = rojo.vida
    azul.elementoVida.textContent = azul.vida
}

function pelea(e) {
    console.log(e.target)
    if (!(rojo.vida <= 0)) {
        rojo.vida = rojo.vida - azul.fuerza
        vidaUpdate()
        
    } else {
        alert(azul.mensaje)
        azul.elemento.removeEventListener('click', pelea);
    }
    
}

vidaUpdate()

