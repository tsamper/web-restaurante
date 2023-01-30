/////////////////////////Header///////////////////////

const menuCo = document.getElementById("menuCo");
const desplegableCo = document.getElementById("desplegableCo");
const cerrarCo = document.getElementById("cerrarCo");
menuCo.onclick = function() {
    
    desplegableCo.style.display = "block";
    cerrarCo.style.display = "block";
    menuCo.style.display = "none";
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableCo.style.display = "flex";
        cerrarCo.style.display = "none";
        menuCo.style.display = "none";
    }else{
        desplegableCo.style.display = "none";
        cerrarCo.style.display = "none";
        menuCo.style.display = "block";
    }
}
cerrarCo.onclick = function() {
    desplegableCo.style.display = "none";
    cerrarCo.style.display = "none";
    menuCo.style.display = "block";
    
}




/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestaurantePC");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaPC");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesPC");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusPC");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasPC");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookPC");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramPC");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterPC");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappPC");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubePC");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}
