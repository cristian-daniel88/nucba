const productos = [];

const inputText = document.getElementById('inputText');
const agregarProducto = document.getElementById('agregarProducto');
const listContainer = document.getElementById('listContainer');
const inputTextBusqueda = document.getElementById('buscarProducto');
const searchButton = document.getElementById('botonBuscar');

//eventos
agregarProducto.addEventListener('click', addProduct);
document.addEventListener('click', deleteProduct);
searchButton.addEventListener('click', searchProduct);


// funciones
function addProduct(e) {
    e.preventDefault()

    const productoValue = inputText.value;
    
    if (productoValue === '') {
       return alert('completa el campo');
    }

    if (productoValue <= 0 || productoValue >= 0) {
        alert('no numeros')
    } else {
        productos.push(productoValue);

        showList(productos)
    
        inputText.value = '';
    
    }
   
}


function showList(array) {
    return listContainer.innerHTML = `<ul>${array.map((item, index) =>`<li key=${index}>${item}  <button id="deleteProductButton">eliminar</button> </li>`).join(' ')}   </ul>`
}

function deleteProduct(e) {
    if (e.target.id === 'deleteProductButton') {
        const elementoABuscar = e.target.parentNode.firstChild.data.trim();
        const elementoAindex = productos.indexOf(elementoABuscar)
        
        productos.splice(elementoAindex,1)

        showList(productos)
    }
}

function searchProduct(e) {
    e.preventDefault();
    const elementoPBusqueda = inputTextBusqueda.value;
    const elementoFiltrado = productos.filter((item) => item.toUpperCase().includes(elementoPBusqueda.toUpperCase()));

    showList(elementoFiltrado);

}



