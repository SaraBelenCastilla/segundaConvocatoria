
//carga el archivo javascript cuando la pg se ha cargado
document.addEventListener("DOMContentLoaded", function () {

    //declaramos la variable menu y obtenemos el menu hamburgesa del DOM
    let menu = document.querySelector('.hamburger');
    
    // method del menu
    function toggleMenu (event) {
      menu.classList.toggle('is-active');
      document.querySelector( ".menuppal" ).classList.toggle("is_active");
      event.preventDefault();
    }
    
    // event click cierra o abre el menu
    menu.addEventListener('click', toggleMenu, false);
    
    })