document.addEventListener("DOMContentLoaded", function () {
//   hago este evento al documento para que se carge primero la pg antes de lanzar el resto de codigo de javascript





window.addEventListener("scroll",function () {   //este es un evento scroll que lanza una div con id = animado desde laizquierda de la pantalla a su posicion final
    let animacion = document.getElementById("animado");
   
    let posicionObjt = animacion.getBoundingClientRect().top;
     console.log(posicionObjt);
     let tamañoDePantalla = window.innerHeight *0.8;  // con este bloque divido la pantalla en cifras numericas cada vez más bajas a madedida que me desplazo con el scroll hacia abajo
     if (posicionObjt < tamañoDePantalla) {
         animacion.style.animation = "mover 2s ease-out " 
         
       // si la posicion del objeto es menor que el tamaño de la pantalla antes calculada, se lanza la animacion  
         
     }
 })

  // este bloque corresponde a la animación del objeto svg que he dividido en paht para poderlo animar
 let rectUno= document.getElementById("uno")
 let rectDos= document.getElementById("dos")
 let rectTres= document.getElementById("tres")
 let rectCuatro= document.getElementById("cuatro")
 let rectCinco= document.getElementById("cinco")
 let rectSeis= document.getElementById("seis")
 let rectSiete= document.getElementById("siete")
 let rectOcho= document.getElementById("ocho")
 let rectNueve= document.getElementById("nueve")
 let rectDiez= document.getElementById("diez")
    // aqui ya he llamado a todos los paht por su id

 function intervalo() {
   
  // esta funcion intervalo no es más que un setInterval de 2 segundos y medio de duración donde cada elemento va apareciendo uno a uno cada medio segundo
  //que un setTimeout de medio segundo por elemento

    setInterval(() => {


        setTimeout(() => {
           rectUno.style.opacity =.8

        },0)
        setTimeout(() => {
            rectDos.style.opacity =.8

        }, 500)


        setTimeout(() => {

            rectTres.style.opacity =.8

        }, 1000)

        setTimeout(() => {
            rectCuatro.style.opacity =.8
 
         },1500)

         setTimeout(() => {

            rectCinco.style.opacity =.8

        }, 2000)

        setTimeout(() => {

            rectSeis.style.opacity =.8

        }, 2500)

        setTimeout(() => {

            rectSiete.style.opacity =.8

        }, 3000)

        setTimeout(() => {

            rectOcho.style.opacity =.8

        }, 3500)

        setTimeout(() => {

            rectNueve.style.opacity =.8

        }, 4000)

        setTimeout(() => {

            rectDiez.style.opacity =.8

        }, 4500)
        


    }, 2500) // tiempo en milisegundos 

}
intervalo()  //aqui llamo a la funcion

// en este bloque vuelvo a proceder de la misma forma cambiando los tiempos y con los bloques de textos que aparecen en la landing pg
let we= document.getElementById("we")
let estamos= document.getElementById("estamos")
let ahora= document.getElementById("ahora")
let titulo= document.getElementById("titulo")



function aparicion() {

    setInterval(() => {

        setTimeout(() => {
           we.style.opacity =0

        },0)
        setTimeout(() => {
            estamos.style.opacity =0
        

        }, 1500)
        setTimeout(() => {

            ahora.style.opacity =0

        }, 3000)
        setTimeout(() => {

            titulo.style.opacity =1

        }, 4500)


       
    }, 1500) // debe ser un numero mayor
   

}
aparicion()  //llamo a la función



let slider = document.querySelector(".slider-contenedor")
let sliderSimple = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderSimple[0].clientWidth;
let tiempo = 3000;

window.addEventListener("resize", function(){
    width = sliderSimple[0].clientWidth;
})

setInterval(function(){
    slides();
},tiempo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderSimple.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}




// convirtiendo las card en una array de objetos para poder hacer un map más tarde
const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33.3

        // MOVEMOS el grand
        grande.style.transform = `translateY(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
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


// convirtiendo las card en una array de objetos para poder hacer un map más tarde
let cards = [
    {
        img: "https://live.staticflickr.com/65535/53464978227_37fb0dd61d_n.jpg",
        alt:"imagen retail",
        h2: "RETAIL",
        modal:"#openModal"
    },{
        img: "https://live.staticflickr.com/65535/53471665890_9c74228aed_n.jpg",
        alt:"imagen eventos",
        h2: "EVENTOS",
        modal:"#openModal1"
    },{
        img: "https://live.staticflickr.com/65535/53471256846_42c4ae05e5_n.jpg",
        alt:"imagen digital",
        h2: "DIGITAL",
        modal:"#openModal2"
    }
]


// en este bloque estoy llamando al elemento galeria para insertar las fotos y los h3 a traves de un map
 let div = document.getElementById("galeria")


// hago un map de card y voy introduciendo los valores del array en cada tarjeta
 const card = cards.map((card,index) =>{
    return(`<div class="proyectos__card">
    <div class="card__div">
        <img loading="lazy" src="${card.img}" alt="${card.alt}" class="galeria__img">
    </div>
    <div class="proyectos__carab">
        <h2 class="carab__h3">${card.h2}</h2>
        <a href="${card.modal}" title="modal" class="carab__enlace">ver más</a>      

    </div>
</div>`)
    




 });
 div.innerHTML = card.join(" ") //necesito hacer un join para separar cada tarjeta


//menu hamburguesa

 let menu = document.querySelector('.hamburger'); //obtengo el elemento del DOM

// method
function toggleMenu (event) { //le asigno una funcion
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);//le asigno un evento click a la funcion


 


    
 })




