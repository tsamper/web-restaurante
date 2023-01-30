/////////////////////////Header///////////////////////

const menuM = document.getElementById("menuM");
const desplegableM = document.getElementById("desplegableM");
const cerrarM = document.getElementById("cerrarM");
menuM.onclick = function() {
    
    desplegableM.style.display = "block";
    cerrarM.style.display = "block";
    menuM.style.display = "none";
    alert(window.innerWidth);
    }

window.onresize = function (){
    if( window.innerWidth > 1000){
        desplegableM.style.display = "flex";
        cerrarM.style.display = "none";
        menuM.style.display = "none";
    }else{
        desplegableM.style.display = "none";
        cerrarM.style.display = "none";
        menuM.style.display = "block";
    }
}
cerrarM.onclick = function() {
    desplegableM.style.display = "none";
    cerrarM.style.display = "none";
    menuM.style.display = "block";
    
}



/////////////////////////Reviews Main///////////////////////

const review = document.getElementById("reviewsHechas");
let puntuacion;
let cont = 0;
let opiniones = [];
let opinion = {
    nombre: 'Tomas',
    opinion:'Todo muy bueno',
    punt: 5,
    puntuacion: '<img src="img/5estrellas.png">'
};
opiniones.push(opinion);
const enviarReview = document.getElementById("enviarReview");

const botonEnviar = document.getElementById("enviarReview");
botonEnviar.onclick = function(){
    let nombreRe = document.getElementById("nombreF").value;
    let mensajeRe = document.getElementById("opinionF").value;
    let puntRe = document.getElementById("puntuacionF").value;
    if(puntRe == 0){
        puntuacion = '<img src="img/0estrellas.png">';
    }else if(puntRe == 1){
        puntuacion = '<img src="img/1estrellas.png">';
    }else if(puntRe == 2){
        puntuacion = '<img src="img/2estrellas.png">';
    }else if(puntRe == 3){
        puntuacion = '<img src="img/3estrellas.png">';
    }else if(puntRe == 4){
        puntuacion = '<img src="img/4estrellas.png">';
    }else if(puntRe == 5){
        puntuacion = '<img src="img/5estrellas.png">';
    }
    let opinion = {
        nombre: nombreRe,
        opinion: mensajeRe,
        punt: puntRe,
        puntuacion: puntuacion
    };
    opiniones.push(opinion);
}

/*if(opiniones[0].punt==1){
    puntuacion = '<img src="img/1estrellas.png">'
}*/
review.innerHTML ="Nombre: " + opiniones[0].nombre + "<br> Opinión: " + opiniones[0].opinion + "<br> Puntuación: " + opiniones[0].puntuacion;

const flechaDerech = document.getElementById("flechaDerecha");
flechaDerech.onclick = function(){
    if(cont<opiniones.length-1){
        cont++;
        review.innerHTML ="Nombre: " + opiniones[cont].nombre + "<br> Opinión: " + opiniones[cont].opinion + "<br> Puntuación: " + opiniones[cont].puntuacion;
    }
}
const flechaIzq = document.getElementById("flechaIzquierda");
flechaIzq.onclick = function(){
    if(cont>0){
        cont--;
        review.innerHTML ="Nombre: " + opiniones[cont].nombre + "<br> Opinión: " + opiniones[cont].opinion + "<br> Puntuación: " + opiniones[cont].puntuacion;
    }
}

/////////////////////////Mapa del sitio///////////////////////

   
const footerRestaurante = document.getElementById("footerRestauranteM");
footerRestaurante.onmouseover = function(){
    this.innerHTML = ">Restaurante";
}
footerRestaurante.onmouseout = function(){
    this.innerHTML = "Restaurante";
}

const footerCarta = document.getElementById("footerCartaM");
footerCarta.onmouseover = function(){
    this.innerHTML = ">Carta";
}
footerCarta.onmouseout = function(){
    this.innerHTML = "Carta";
}

const footerEspecialidades = document.getElementById("footerEspecialidadesM");
footerEspecialidades.onmouseover = function(){
    this.innerHTML = ">Especialidades";
}
footerEspecialidades.onmouseout = function(){
    this.innerHTML = "Especialidades";
}

const footerMenus = document.getElementById("footerMenusM");
footerMenus.onmouseover = function(){
    this.innerHTML = ">Menús de Grupos";
}
footerMenus.onmouseout = function(){
    this.innerHTML = "Menús de Grupos";
}

const footerReservas = document.getElementById("footerReservasM");
footerReservas.onmouseover = function(){
    this.innerHTML = ">Reservas";
}
footerReservas.onmouseout = function(){
    this.innerHTML = "Reservas";
}




/////////////////////////Redes sociales///////////////////////

let facebook = document.getElementById("facebookM");
facebook.onmouseover = function(){
    this.src = "img/facebookInv.png";
}
facebook.onmouseout= function(){
    this.src = "img/facebook.png";
}

let instagram = document.getElementById("instagramM");
instagram.onmouseover = function(){
    this.src = "img/instagramInv.png";
}
instagram.onmouseout= function(){
    this.src = "img/instagram.png";
}

let twitter = document.getElementById("twitterM");
twitter.onmouseover = function(){
    this.src = "img/twitterInv.png";
}
twitter.onmouseout= function(){
    this.src = "img/twitter.png";
}

let whatsapp = document.getElementById("whatsappM");
whatsapp.onmouseover = function(){
    this.src = "img/whatsappInv.png";
}
whatsapp.onmouseout= function(){
    this.src = "img/whatsapp.png";
}

let youtube = document.getElementById("youtubeM");
youtube.onmouseover = function(){
    this.src = "img/youtubeInv.png";
}
youtube.onmouseout= function(){
    this.src = "img/youtube.png";
}
