let menuToggle = document.querySelector(".menu-toggle");
let menuToggleIcon = document.querySelector(".menu-toggle i");
let menu = document.getElementById("menu");

menuToggle.addEventListener('click', e=> {
    menu.classList.toggle("show");
})

//Funciones carrusel

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("fotos-adro");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

var index = 0;
carrusel();

function carrusel() {
  var e;
  var f = document.getElementsByClassName("fotos-uba");
  for (e = 0; e < f.length; e++) {
    f[e].style.display = "none";  
  }
  index++;
  if (index > f.length) {index = 1}    
  f[index-1].style.display = "block";  
  setTimeout(carrusel, 4000);    
}