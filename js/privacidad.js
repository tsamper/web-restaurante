/////////////////////////Header///////////////////////

const menuP = document.getElementById("menuP");
const desplegableP = document.getElementById("desplegableP");
const cerrarP = document.getElementById("cerrarP");
menuP.onclick = function() {
    
    desplegableP.style.display = "block";
    cerrarP.style.display = "block";
    menuP.style.display = "none";
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableP.style.display = "flex";
        cerrarP.style.display = "none";
        menuP.style.display = "none";
    }else{
        desplegableP.style.display = "none";
        cerrarP.style.display = "none";
        menuP.style.display = "block";
    }
}
cerrarP.onclick = function() {
    desplegableP.style.display = "none";
    cerrarP.style.display = "none";
    menuP.style.display = "block";
    
}



/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestaurantePR");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaPR");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesPR");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusPR");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasPR");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookPR");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramPR");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterPR");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappPR");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubePR");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}
