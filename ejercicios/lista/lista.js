const productos = [];

//llamamos a los elementos del dom
const inputText = document.getElementById('inputText');
const agregarProducto = document.getElementById('agregarProducto');
const listContainer = document.getElementById('listContainer');
    //const deleteButton = document.getElementById('deleteProductButton');
const inputTextBusqueda = document.getElementById('buscarProducto');
const searchButton = document.getElementById('botonBuscar');


// agregar listeners
agregarProducto.addEventListener('click', addProduct);
document.addEventListener('click', deleteProduct);
searchButton.addEventListener('click', searchProduct);

// definir la funcion

function addProduct(e) {   
   
    e.preventDefault();
    
    // creamos la constante donde se guarda el valor del input
    const productoValue = inputText.value;

    if (productoValue === '') {
       
        return alert('debes completar el campo');
    } 

    if (productoValue <= 0 || productoValue >= 0) {
        alert('no numeros')
    } else {
        //el valor del input lo agregamo en el array vacio creado
    productos.push(productoValue);

    // mostramos el array producto en el dom con esta funcion
    showList(productos);  
    
    // borramos el valor del input que queda en el placeholder

    inputText.value = ''; 
    
    
    }
         
    
}

function showList(array) {
   return listContainer.innerHTML = `<ul> ${array.map((item, index) => `<li key=${index}>${item} <button id="deleteProductButton">eliminar</button></li>`).join(' ')}</ul>`
}

function searchProduct(e) {

    e.preventDefault();

    const productoABuscar = inputTextBusqueda.value;


    const productosFiltrados = productos.filter((item) => item.toUpperCase().includes(productoABuscar.toUpperCase()));

    showList(productosFiltrados);
}

function deleteProduct(e) {
    if (e.target.id === 'deleteProductButton') {

        const elementoABuscar = e.target.parentNode.firstChild.data.trim();

        const indexAEliminar = productos.indexOf(elementoABuscar)

        productos.splice(indexAEliminar, 1);

        showList(productos)
    }
    inputTextBusqueda.value = '';
}

