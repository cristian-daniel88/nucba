const personas = [];

const button = document.getElementById('button');
const acceso = document.getElementsByTagName('select');
const listContainter = document.getElementById('listContainer');


// eventos
button.addEventListener('click', entradaDatos);



//funciones
function entradaDatos(e) {
    e.preventDefault()
    if (acceso[0] ) {
        
        let persona = {
            nombre: document.getElementById('nombre').value,
            acceso: acceso[0].value
        }
        personas.push(persona);
        
     
    } else {
        let persona = {
            nombre: document.getElementById('nombre').value,
            acceso: acceso[1].value
            
        }
        personas.push(persona)
        
       
    }
    console.log(personas)
    showList(personas); 
    
}

function showList(array) {
    return listContainer.innerHTML = `<ul> ${array.map((item, index) => `<li key=${index}>${item.nombre} ${item.acceso} <button id="deleteProductButton">eliminar</button></li>`).join(' ')}</ul>`
 }



