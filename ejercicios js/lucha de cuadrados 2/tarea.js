const elementoAzul = document.querySelector("#azul");
const elementoRojo = document.querySelector("#rojo");

const azul = {
    nombre: 'Juan Carlos Azul',
    vida: 100,
    fuerza: 10,
    elemento: elementoAzul,
    mensaje: 'Soy el azul, y muerto estás tu',
    color: {
        r: 0,
        g: 0,
        b: 255,
        a: 1,
    }
}

const rojo = {
    nombre: 'Juan Carlos Rojo',
    vida: 100,
    fuerza: 10,
    elemento: elementoRojo,
    mensaje: 'Soy el rojo, y gané',
    color: {
        r: 255,
        g: 0,
        b: 0,
        a: 1,
    }
}

azul.elemento.addEventListener('click', pelea);
rojo.elemento.addEventListener('click', pelea);

function pelea(e) {
    let golpeador;
    let golpeado;
    if (e.target.dataset.character=== 'azul') {
        golpeador = azul;
        golpeado = rojo;
    } else {
        golpeador = rojo;
        golpeado = azul;
    }

    const r = golpeado.color.r;
    const g = golpeado.color.g;
    const b = golpeado.color.b;
    golpeado.color.a = golpeado.color.a - .1;
    const a = golpeado.color.a ;


    golpeado.vida = golpeado.vida - golpeador.fuerza;
    golpeado.elemento.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
    golpeado.elemento.textContent = golpeado.vida;
    if (golpeado.vida <= 0) {
        alert(golpeador.mensaje);
        golpeador.elemento.removeEventListener('click', pelea);
        golpeado.elemento.removeEventListener('click', pelea);
    }
}

/*
1. Al hacer click sobre un peleador, el otro peleador deberá recibir el golpe (perder vidas)
2. Vamos a evitar el código duplicado, si los dos peleadores hacen algo muuuy similar, podemos crear una funcion que trabaje con ambos
3. Cuando la vida de uno de los luchadores llegue a cero o menos, habrá que avisar quién ganó la pelea (alert, console.log, modal, elemento html)
4. Bajar la opacidad del color de los luchadores, a medida que pierden vida
*/
