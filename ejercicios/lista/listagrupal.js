const usuarios = [] ;

const nombre = document.getElementById('nombre');
const habilitado = document.getElementById('habilitado');
const deshabilitado = document.getElementById('deshabilitado');
const boton = document.getElementById('boton');
const listContainer = document.getElementById('listaContenedora');
//const deleteButton = document.getElementById("deleteProductButton");

//console.log(habilitado.checked);
//console.log(deshabilitado.checked);

//ahora voy agregar el evento diganme como seguir los escucho

boton.addEventListener('click', callback);
document.addEventListener("click", deleteProduct);




// AHORA HAGO LA FUNCION

function callback(e) {
       e.preventDefault();
       if(habilitado.checked) {
         const usuario = {
         nombree : nombre.value,
         acceso : true,
         id : usuarios.length + 1
       } 
    // ahora voy a pushear
        usuarios.push(usuario);
    } else {
        const usuario = {
            nombree : nombre.value,
            acceso: false,
            id : usuarios.length + 1
        }
       usuarios.push(usuario); 
    }

    showList(usuarios)
    

}
function showList(array) {
    return listContainer.innerHTML = `<ul> ${array.map((item, index) => `<li key=${item.id}>${item.nombree} ${item.acceso} <button id="deleteProductButton">eliminar</button></li>`).join(' ')}</ul>`
 }


 function deleteProduct(e) {
    if (e.target.id === 'deleteProductButton') {

        

        const elementoABuscar = e.target.parentNode.attributes.key.value;

        const indexAEliminar = usuarios.indexOf(usuarios[elementoABuscar].nombree);

        usuarios.splice(indexAEliminar, 1 );

        
    }
    showList(usuarios)
    
}




