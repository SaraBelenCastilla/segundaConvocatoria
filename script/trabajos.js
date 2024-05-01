document.addEventListener("DOMContentLoaded", function () {
 //carga primero el documento y despues ejecuta el codigo js

    let grande = document.querySelector(".grande") //creo una variable yllamo al a la clase grande del DOM
    let punto = document.querySelectorAll(".punto") //creo otra variable y la llamo del DOM
    
    
   //hago un foreach para recorrer los puntos y le doy un evento click para cambiar las fotos de posición
   // y que se vean de una en una cambiando la posición
    punto.forEach((cadaPunto , i) => {
        punto[i].addEventListener("click",()  =>{
            let posicion = i 
            let operacion = posicion * - 33.3
    
            grande.style.transform = `translateY(${operacion}%)`
    
            punto.forEach((cadaPunto , i) => { //hago otro foreach para activar la clase activo o quitarla de cada punto
                punto[i].classList.remove( "activo")
    
            })
            punto[i].classList.add("activo")
        })
        
        
    });

    //sigo los mismos pasos para el segundo carrusel

    let fotos = document.querySelector(".fotos")
let puntoDos = document.querySelectorAll(".punto__dos")

puntoDos.forEach((cadaPuntoDos , i) => {
  puntoDos[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotos.style.transform = `translateY(${operacion}%)`

      puntoDos.forEach((cadaPuntoDos , i) => {
          puntoDos[i].classList.remove( "activo")

      })
      puntoDos[i].classList.add("activo")
  })
  
  
});
//tercer carrusel
let fotosDos = document.querySelector(".fotos-dos")
let puntoTres = document.querySelectorAll(".punto-tres")

puntoTres.forEach((cadaPuntoDos , i) => {
  puntoTres[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotosDos.style.transform = `translateY(${operacion}%)`

      puntoTres.forEach((cadaPuntoTres , i) => {
          puntoTres[i].classList.remove( "activo")

      })
      puntoTres[i].classList.add("activo")
  })
  
  
});
//cuarto carrusel

let fotostres = document.querySelector(".fotos-tres")
let puntoCuatro = document.querySelectorAll(".punto-cuatro")

puntoCuatro.forEach((cadaPuntoCuatro , i) => {
  puntoCuatro[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotostres.style.transform = `translateY(${operacion}%)`

      puntoCuatro.forEach((cadaPuntoCuatro , i) => {
          puntoCuatro[i].classList.remove( "activo")

      })
      puntoCuatro[i].classList.add("activo")
  })
  
  
});
//quinto carrusel
let fotosCuatro = document.querySelector(".fotos-cuatro")
let puntoCinco = document.querySelectorAll(".punto-cinco")

puntoCinco.forEach((cadaPuntoCinco , i) => {
  puntoCinco[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotosCuatro.style.transform = `translateY(${operacion}%)`

      puntoCinco.forEach((cadaPuntoCinco , i) => {
          puntoCinco[i].classList.remove( "activo")

      })
      puntoCinco[i].classList.add("activo")
  })
  
  
});
//sexto carrusel
let fotosCinco = document.querySelector(".fotos-cinco")
let puntoSeis = document.querySelectorAll(".punto-seis")

puntoSeis.forEach((cadaPuntoSeis , i) => {
  puntoSeis[i].addEventListener("click",()  =>{
      let posicion = i 
      let operacion = posicion * - 33.3

      fotosCinco.style.transform = `translateY(${operacion}%)`

      puntoSeis.forEach((cadaPuntoSeis , i) => {
          puntoSeis[i].classList.remove( "activo")

      })
      puntoSeis[i].classList.add("activo")
  })
  
  
});
    
    
     // convirtiendo las card en una array de objetos para poder hacer un map más tarde
let cards = [
    {
        img: "https://live.staticflickr.com/65535/53465829161_ea3cc973c9_n.jpg",
        h2: "SICOL",
        alt:"imagen sicol",
        modal:"#openModal"
    },{
        img: "https://live.staticflickr.com/65535/53465981963_59eb8af58d_n.jpg",
        h2: "MERCEDES",
        alt:"imagen mercedes",
        modal:"#openModal1"
    },{
        img: "https://live.staticflickr.com/65535/53466174229_03e4abce25_n.jpg",
        h2: "MASTER CARD",
        alt:"imagen mastercard",
        modal:"#openModal2"
    },{
        img: "https://live.staticflickr.com/65535/53466289865_4623d9c3ae_n.jpg",
        h2: "JUNTA ANDALUCIA",
        alt:"imagen junta de andalucia",
        modal:"#openModal3"
    },{
        img: "https://live.staticflickr.com/65535/53466017528_a75710b93d_n.jpg",
        h2: "INVERSIS",
        alt:"imagen inversis",
        modal:"#openModal4"
    },{
        img: "https://live.staticflickr.com/65535/53466027838_3f7a347204_n.jpg",
        h2: "ACCIONA",
        alt:"imagen trasmediterranea",
        modal:"#openModal5"
    },
]


// en este bloque estoy llamando al elemento galeria para insertar las fotos y los h3 a traves de un map
 let div = document.getElementById("galeria") //creo la variable



 const card = cards.map((card,index) =>{ //realizo el metodo map e introduzco los datos
    return(`<div class="proyectos__card">
    <div class="card__div">
        <img src="${card.img}" alt="${card.alt}" class="galeria__img">
    </div>
    <div class="proyectos__carab">
        <h2 class="carab__h3">${card.h2}</h2>
        <a href="${card.modal}" title="modal" class="carab__enlace">ver más</a>      

    </div>
</div>`)
    




 });
 div.innerHTML = card.join(" ") //necesito aplicar el metodo join para separar cada card

      let menu = document.querySelector('.hamburger'); //creo variable menu y le asigno la clase hamburger del DOM

// method con una función para que el menu este o no activo
function toggleMenu (event) {
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event mediante un click cambia el menu de la clase activa a desactivada
menu.addEventListener('click', toggleMenu, false);


})