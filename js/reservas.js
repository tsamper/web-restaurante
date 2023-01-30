
/////////////////////////Header///////////////////////

const menuR = document.getElementById("menuR");
const desplegableR = document.getElementById("desplegableR");
const cerrarR = document.getElementById("cerrarR");
menuR.onclick = function() {
    
    desplegableR.style.display = "block";
    cerrarR.style.display = "block";
    menuR.style.display = "none";
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableR.style.display = "flex";
        cerrarR.style.display = "none";
        menuR.style.display = "none";
    }else{
        desplegableR.style.display = "none";
        cerrarR.style.display = "none";
        menuR.style.display = "block";
    }
}
cerrarR.onclick = function() {
    desplegableR.style.display = "none";
    cerrarR.style.display = "none";
    menuR.style.display = "block";
    
}




/////////////////////////Formulario///////////////////////
/*
const botonEnviar = document.getElementById("botonForm");
botonEnviar.addEventListener("click", () => {
    window.location.href="mailto:restaurante.tokio.js?subject=envioFOrm&body=asdasdadadasd";
});

*/




/////////////////////////Reserva///////////////////////

const reserva = document.getElementById("botonReserva");

reserva.onclick = function () {
    let nombreReserva = document.getElementById("nombreM").value;
    let telefonoReserva = document.getElementById("numeroM").value;
    let comensalesReserva = document.getElementById("comensalesM").value;
    let fechaReserva = document.getElementById("fechaM").value;
    let observacionesReserva = document.getElementById("observacionesM").value;
    confirm(`Confirmar reserva \nNombre: ${nombreReserva} \nTeléfono: ${telefonoReserva} \nNº comensales: ${comensalesReserva} \nFecha: ${fechaReserva} \nObservaciones: ${observacionesReserva}`);
}

/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestauranteR");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaR");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesR");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusR");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasR");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookR");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramR");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterR");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappR");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubeR");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}
