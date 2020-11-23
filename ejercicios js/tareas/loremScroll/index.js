const postContainer = document.querySelector(".posts-container");
const loading = document.querySelector(".loader");
const inputFilter = document.querySelector("#filter");

let limite = 5;
let pagina = 1;

// pagina++
// pagina = pagina + 1
// pagina += 1

// HACEMOS EL FETCH
const getPosts = async () => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pagina}&_limit=${limite}`
  );
  const data = await resp.json();
  return data;
};

// PINTAR POSTS
const pintarPosts = (posts) => {
  const postsHTML = posts
    .map((valor) => {
      return `<div class="post">
        <div class="numerito">${valor.id}</div>
        <div class="post-info">
          <h2 class="post-title">${valor.title}</h2>
          <p class="post-body">
          ${valor.body}
          </p>
        </div>
      </div>`;
    })
    .join("");

  postContainer.innerHTML += postsHTML;
};

// MOSTRAR LOADING

// LA FUNCION INICIAR
function iniciarPerri() {
  window.addEventListener("DOMContentLoaded", async () => {
    let posts = await getPosts();
    pintarPosts(posts);
  });

  window.addEventListener("scroll", async () => {
    // const scrollArriba = document.documentElement.scrollTop
    // const clientAltura = document.documentElement.clientHeight
    // const scrollAltura = document.documentElement.scrollHeight

    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight -1) {
      // console.log("Estoy en el final?");
      pagina++;

      // En la variable nuevosPosts guardamos los proximos 5
      let nuevosPosts = await getPosts();

      // Y ahora queremos pintar esos nuevos posts
      // pintarPosts(nuevosPosts);
      mostrarLoader(nuevosPosts);
    }
  });




  // otro escuchador
  inputFilter.addEventListener("input", (e) => {
    const loQueEscribo = e.target.value.toUpperCase();
    const todosLosPosts = document.querySelectorAll(".post");



    for (const post of todosLosPosts) {
      const title = post.querySelector(".post-title").innerText.toUpperCase();
      const cuerpo = post.querySelector(".post-body").innerText.toUpperCase();

      if (title.includes(loQueEscribo) || cuerpo.includes(loQueEscribo) ) {
        post.style.display = "flex";
      } else {
        post.style.display = "none";
      }
    }


    
    // OTRA FORMA CON MAP EN VES DE USAR EL for(const post of todosLosPost)
    // todosLosPosts.map((post)=> {
    //      const title = post.querySelector(".post-title").innerText.toUpperCase();
    //   const cuerpo = post.querySelector(".post-body").innerText.toUpperCase();

    //   if (title.includes(loQueEscribo)) {
    //     post.style.display = "flex";
    //   } else {
    //     post.style.display = "none";
    //   }
    // })
  });
}

// CREAMOS LA FUNCION PARA MOSTRAR LOADER
// Que muestre el loader
// Espere 3 segundos y lo saque
// Y que pinte los nuevos posts

const mostrarLoader = (algoNuevo) => {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      pintarPosts(algoNuevo);
    }, 500);
  }, 1000);
};

// LLAMAR A INICIAR
iniciarPerri();

// PROXIMOS PASOS A SEGUIR

// Cuando llego abajo de todo,
// Quiero que aparezca el loading
// Quiero que cargue otros 5
// Quiero que desaparezca el loading

// Ver destructuring
// const {scrollTop, clientHeight, scrollHeight } = document.documentElement