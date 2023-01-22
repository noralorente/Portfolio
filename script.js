//Función que aplica el estilo a la opción seleccionada en el menú y quita la seleccionada previamente.
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menú una vez se haya seleccionado una opción en el modo responsive.

    var x = document.getElementById("nav");
    x.className = "";
}

//Función que muestra el menú responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Detectar el scrolling para aplicar la animación de las barras de habilidades.

window.onscroll = function(){
    efectoHabilidades()
};

//Función que aplica la animación de la barra de habilidades.

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("java").classList.add("barra-progreso4");
    }

}