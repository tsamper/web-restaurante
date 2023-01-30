/////////////////////////Header///////////////////////

const menuE = document.getElementById("menuE");
const desplegableE = document.getElementById("desplegableE");
const cerrarE = document.getElementById("cerrarE");
menuE.onclick = function() {
    
    desplegableE.style.display = "block";
    cerrarE.style.display = "block";
    menuE.style.display = "none";
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableE.style.display = "flex";
        cerrarE.style.display = "none";
        menuE.style.display = "none";
    }else{
        desplegableE.style.display = "none";
        cerrarE.style.display = "none";
        menuE.style.display = "block";
    }
}
cerrarE.onclick = function() {
    desplegableE.style.display = "none";
    cerrarE.style.display = "none";
    menuE.style.display = "block";
    
}


/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestauranteE");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaE");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesE");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusE");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasE");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookE");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramE");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterE");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappE");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubeE");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}

let botonForm = document.getElementById("botonFormE");
botonForm.onclick = function(){
    window.open("formulario.html", "Formulario de contacto", 'toolbar=0, scrollbars=0, location=0, statusbar=0, menubar=0, resizable=0, width=400, height=300, ');
}
botonForm.onmouseover = function(){
    this.style.backgroundColor = "grey";
}
botonForm.onmouseout = function(){
    this.style.backgroundColor = "white";
}