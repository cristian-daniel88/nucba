// Vino un cliente muy imporante y nos
// pidió una mini app para ingresar
// personas e indicar si pueden o no
// comprar dólares. Queremos poder ingresar estos
// datos y que queden guardados (pista: puede ser en un array)
//
const array = [];

// DOM
const $nombre = document.querySelector("#nombre");
const $puede = document.querySelector("#puede");
const $noPuede = document.querySelector("#noPuede");
const $enviar = document.querySelector("#enviar");
const $lista = document.querySelector("#lista");
const deleteButton = document.getElementById("deleteProductButton");
const $dni = document.querySelector("#dni");
// Eventos
const enviar = $enviar.addEventListener("click", buttonFn);
document.addEventListener("click", deleteProduct);
//Function
function buttonFn(e) {
  e.preventDefault();
  const dniValor = $dni.value;
  const nombreValor = $nombre.value;
  const functionFilter = array.filter((item) => item.dni === dniValor);
  console.log(functionFilter);
  console.log(dniValor);
  if (dniValor < 0 ) {
      alert('no negativos')
  }
  if (functionFilter.length > 0) {
      //este if funciona en el segundo push por que el index es 1 y no en el primero por que es 0
      console.log('lalalalal');
      console.log(functionFilter.length)
    alert("El DNI YA ESTA EN NUESTRA BASE DE DATOS");
  } else {
    if ($puede.checked === true) {
      array.push({
        name: nombreValor,
        habilitado: true,
        id: array.length + 1,
        dni: dniValor,
      });
    } else {
      array.push({
        name: nombreValor,
        habilitado: false,
        id: array.length + 1,
        dni: dniValor,
      });
    }
    $lista.innerHTML = array
      .map((item) => {
        return `<li key=${item.id}>${item.name} ${item.habilitado} ${item.dni}
      <button id="deleteProductButton">Eliminar</button> </li>
    `;
      })
      .join("");
  }
}

function deleteProduct(e) {
  if (e.target.id === "deleteProductButton") {
    const elementoABorrar = e.target.parentNode.attributes.key.value;
    const metodoFind = array.findIndex((item) => item.id == elementoABorrar);
    console.log(metodoFind);
    array.splice(metodoFind, 1);
    $lista.innerHTML = array
      .map((item) => {
        return `<li key=${item.id}>${item.name} ${item.habilitado} ${item.dni}
      <button id="deleteProductButton">Eliminar</button> </li>
    `;
      })
      .join("");
  }
}