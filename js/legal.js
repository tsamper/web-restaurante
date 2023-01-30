/////////////////////////Header///////////////////////

const menuL = document.getElementById("menuL");
const desplegableL = document.getElementById("desplegableL");
const cerrarL = document.getElementById("cerrarL");
menuL.onclick = function() {
    
    desplegableL.style.display = "block";
    cerrarL.style.display = "block";
    menuL.style.display = "none";
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableL.style.display = "flex";
        cerrarL.style.display = "none";
        menuL.style.display = "none";
    }else{
        desplegableL.style.display = "none";
        cerrarL.style.display = "none";
        menuL.style.display = "block";
    }
}
cerrarL.onclick = function() {
    desplegableL.style.display = "none";
    cerrarL.style.display = "none";
    menuL.style.display = "block";
    
}



/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestauranteAL");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaAL");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesAL");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusAL");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasAL");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookAL");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramAL");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterAL");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappAL");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubeAL");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}
