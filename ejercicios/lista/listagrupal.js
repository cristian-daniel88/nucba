const usuarios = [] ;

const nombre = document.getElementById('nombre');
const habilitado = document.getElementById('habilitado');
const deshabilitado = document.getElementById('deshabilitado');
const boton = document.getElementById('boton');
const listContainer = document.getElementById('listaContenedora');
const dni = document.getElementById('dni')


console.dir(habilitado)
//const deleteButton = document.getElementById("deleteProductButton");

//console.log(habilitado.checked);
//console.log(deshabilitado.checked);

//ahora voy agregar el evento diganme como seguir los escucho

boton.addEventListener('click', callback);
document.addEventListener("click", deleteProduct);




// AHORA HAGO LA FUNCION

function callback(e) {
       e.preventDefault();
       const dniFilter = usuarios.filter((item) => item.dni === dni.value);

       if (dni.value < 0 ) {
        return alert('no negativos')
    }
       
       if (dniFilter.length > 0) {
           return alert('numero repetido')
       } else { 
        if (habilitado.checked) {
            const usuario = {
                nombree : nombre.value,
                acceso : true,
                id : usuarios.length + 1,
                dni: dni.value
                }
        // ahora voy a pushear
       usuarios.push(usuario); 
       } else if(deshabilitado.checked) {
        const usuario = {
            nombree : nombre.value,
            acceso : false,
            id : usuarios.length + 1,
            dni: dni.value
            }
        // ahora voy a pushear
        usuarios.push(usuario); 

       } 
       
       
       }

      

    
      

    showList(usuarios)
    

}
function showList(array) {
    return listContainer.innerHTML = `<ul> ${array.map((item, index) => `<li key=${item.id}>${item.nombree} ${item.acceso} <button id="deleteProductButton">eliminar</button></li>`).join(' ')}</ul>`
 }


 function deleteProduct(e) {
    if (e.target.id === 'deleteProductButton') {

        

        const elementoABuscar = e.target.parentNode.attributes.key.value;

        const usuarioFilter = usuarios.find((item) => item.id == elementoABuscar)
    
        const indexAEliminar = usuarios.indexOf(usuarioFilter);

        usuarios.splice(indexAEliminar, 1 );

        
    }
    showList(usuarios)
    
}




