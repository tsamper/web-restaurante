/////////////////////////Header///////////////////////

const menuME = document.getElementById("menuME");
const desplegableME = document.getElementById("desplegableME");
const cerrarME = document.getElementById("cerrarME");
menuME.onclick = function() {
    
    desplegableME.style.display = "block";
    cerrarME.style.display = "block";
    menuME.style.display = "none";
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableME.style.display = "flex";
        cerrarME.style.display = "none";
        menuME.style.display = "none";
    }else{
        desplegableME.style.display = "none";
        cerrarME.style.display = "none";
        menuME.style.display = "block";
    }
}
cerrarME.onclick = function() {
    desplegableME.style.display = "none";
    cerrarME.style.display = "none";
    menuME.style.display = "block";
    
}



/////////////////////////Menus///////////////////////

const flechaAbajo1 = document.getElementById("flechaAb1");
const oculto1 = document.getElementsByClassName("oculto").item(0);
const flechaArriba1 = document.getElementById("flechaArr1");
flechaAbajo1.onclick = function () {
    flechaAbajo1.style.display = "none";
    oculto1.style.display = "block";
}
flechaArriba1.onclick = function () {
    flechaAbajo1.style.display = "block";
    oculto1.style.display = "none";
}

const flechaAbajo2 = document.getElementById("flechaAb2");
const oculto2 = document.getElementsByClassName("oculto").item(1);
const flechaArriba2 = document.getElementById("flechaArr2");
flechaAbajo2.onclick = function () {
    flechaAbajo2.style.display = "none";
    oculto2.style.display = "block";
}
flechaArriba2.onclick = function () {
    flechaAbajo2.style.display = "block";
    oculto2.style.display = "none";
}

const flechaAbajo3 = document.getElementById("flechaAb3");
const oculto3 = document.getElementsByClassName("oculto").item(2);
const flechaArriba3 = document.getElementById("flechaArr3");
flechaAbajo3.onclick = function () {
    flechaAbajo3.style.display = "none";
    oculto3.style.display = "block";
}
flechaArriba3.onclick = function () {
    flechaAbajo3.style.display = "block";
    oculto3.style.display = "none";
}


/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestauranteG");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaG");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesG");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusG");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasG");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookG");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramG");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterG");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappG");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubeG");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}

let botonForm = document.getElementById("botonFormG");
botonForm.onclick = function(){
    window.open("formulario.html", "Formulario de contacto", 'toolbar=0, scrollbars=0, location=0, statusbar=0, menubar=0, resizable=0, width=400, height=300, ');
}
botonForm.onmouseover = function(){
    this.style.backgroundColor = "grey";
}
botonForm.onmouseout = function(){
    this.style.backgroundColor = "white";
}