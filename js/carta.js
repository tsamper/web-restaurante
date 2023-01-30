/////////////////////////Header///////////////////////

const menuC = document.getElementById("menuC");
const desplegableC = document.getElementById("desplegableC");
const cerrarC = document.getElementById("cerrarC");
menuC.onclick = function() {
    
    desplegableC.style.display = "block";
    cerrarC.style.display = "block";
    menuC.style.display = "none";
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableC.style.display = "flex";
        cerrarC.style.display = "none";
        menuC.style.display = "none";
    }else{
        desplegableC.style.display = "none";
        cerrarC.style.display = "none";
        menuC.style.display = "block";
    }
}
cerrarM.onclick = function() {
    desplegableC.style.display = "none";
    cerrarC.style.display = "none";
    menuC.style.display = "block";
    
}



/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestauranteC");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaC");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesC");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusC");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasC");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookC");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramC");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterC");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappC");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubeC");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}

let botonForm = document.getElementById("botonFormC");
botonForm.onclick = function(){
    window.open("formulario.html", "Formulario de contacto", 'toolbar=0, scrollbars=0, location=0, statusbar=0, menubar=0, resizable=0, width=400, height=300, ');
}
botonForm.onmouseover = function(){
    this.style.backgroundColor = "grey";
}
botonForm.onmouseout = function(){
    this.style.backgroundColor = "white";
}