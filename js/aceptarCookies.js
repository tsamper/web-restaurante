/////////////////////////Cookies///////////////////////


const aceptarCookies = document.getElementById("aceptarCookies");
const fondoCookies = document.getElementById("fondoCookies");
const bannerCookies = document.getElementById("Cookies")

if(localStorage.getItem("cookies") == "true"){
    fondoCookies.style.display = "none";
        bannerCookies.style.display = "none";
}

    aceptarCookies.onclick = function() {
        localStorage.setItem ("cookies", true);
        fondoCookies.style.display = "none";
        bannerCookies.style.display = "none";
    }





