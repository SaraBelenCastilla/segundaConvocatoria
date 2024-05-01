
//carga todo el contenido de la pg antes de ejecutar el codigo js
document.addEventListener("DOMContentLoaded", function () {





// declaro una funcion con un evento scroll para que aparezcan los elementos al hacer scroll
    window.addEventListener("scroll",function () {
        let animacion = document.getElementById("animado");//creo una variable que llama a la id animadodel Dom
        let animacionSegunda = document.getElementById("animadoSegundo");//creo una segunda variable con la id animadoSegundo
        let posicionObjt = animacion.getBoundingClientRect().top;// divido la pantalla en números más pequeños cada vez que se mueve el scroll por la pg y creo una variable
        
         console.log(posicionObjt);
         let posicionObjtDos = animacionSegunda.getBoundingClientRect().top;// hago lo mismo al segundo elemento y creo otra variable
         console.log(posicionObjtDos);
         let tamañoDePantalla = window.innerHeight* 0.9;//creo una variable con cada porcion de pantalla dividida por 9
         //con este condicional digo que si se hace scroll se lance la animación
         if (posicionObjt < tamañoDePantalla) {
             animacion.style.animation = "mover 2.3s ease-out"    
             
         }
         if (posicionObjtDos < tamañoDePantalla) {
            animacionSegunda.style.animation = "mover 2s ease-out"    
            
        }
         
     })


     let menu = document.querySelector('.hamburger'); //creo una variable que obtiene la clase hamburguer del DOM

// method
function toggleMenu (event) {
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event que hace que se pueda abrir y cerrar el menu hamburgesa con un click
menu.addEventListener('click', toggleMenu, false);

    })