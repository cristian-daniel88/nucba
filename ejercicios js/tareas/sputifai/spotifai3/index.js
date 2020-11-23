const form = document.getElementById("form");
const search = document.getElementById("search");
const resultados = document.getElementById("resultados");
const botonesMasMenos = document.querySelector(".masResultados");
const botonMenuHamburguesa = document.getElementById('hamburguesaIcon');
const botonCerrar = document.getElementById('cerrarIcon')


const URL = "https://api.lyrics.ovh";

//Mostrar Menu
const mostrarMenu = () => {
  menuResponsive.classList.toggle("show");
};

botonMenuHamburguesa.addEventListener('click', mostrarMenu);
botonCerrar.addEventListener('click', mostrarMenu);


// Funcion de buscar canciones
const getSongs = (value) => {
    fetch(`${URL}/suggest/${value}`)
      .then((valor) => valor.json())
      .then((resultado) => pintarCanciones(resultado))
      .catch((error) => console.log(error));
  };

// Funcion Mostrar
const pintarCanciones = (resultado) => {
    console.log(resultado);
    const canciones = `
    <h1> Busquedas relacionadas a ${search.value} </h1>
    <ul>
    ${resultado.data
      .map(
        (valor) => `
    <li>
           <p>${valor.artist.name} - ${valor.title}</p>
          <audio controls>
              <source src=${valor.preview} type="audio/mpeg">
          </audio>
           </li>
    `
      )
      .join("")}
    </ul>`;
  
    resultados.innerHTML = canciones;

    if (resultado.next || resultado.prev) {
      botonesMasMenos.innerHTML = `
        ${
          resultado.prev
            ? `<button onclick="haceAlgo('${resultado.prev}')">Anterior</button>`
            : ``
        }
        ${
          resultado.next
            ? `<button onclick="haceAlgo('${resultado.next}')">Siguiente</button>`
            : ``
        }
      `;
    }
     
}

const haceAlgo = async (direccion) => {
  const urlParaFetchear = "https://cors-anywhere.herokuapp.com/" + direccion;
  const haceAlgoMierda = await fetch(urlParaFetchear);
  const aBerrrrrr = await haceAlgoMierda.json();

  pintarCanciones(aBerrrrrr);
};


const iniciar = () => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const paraBuscar = search.value;
  
      if (!paraBuscar) {
        return;
      }
  
      getSongs(paraBuscar);
    });
  };

iniciar()

