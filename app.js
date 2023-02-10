let menuToggle = document.querySelector(".menu-toggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener('click', e=> {
    menu.classList.toggle("show");
})

let menuLinks = document.querySelectorAll('#menu a[href^="#"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click" , function() {
    menu.classList.remove("show");
  })
})

//Funciones carrusel Automatico

var myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("fotos-adro");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);
}

let index = 0;
carrusel();

function carrusel() {
  let e;
  let f = document.getElementsByClassName("fotos-uba");
  for (e = 0; e < f.length; e++) {
    f[e].style.display = "none";  
  }
  index++;
  if (index > f.length) {index = 1}    
  f[index-1].style.display = "block";  
  setTimeout(carrusel, 4000);    
}

//Funciones Slider.
//Para Banco Nacion.

const slider = document.querySelector("#slider-banco");

let fotosBN = document.querySelectorAll(".fotos-b-n");

let fotosBNLast = fotosBN[fotosBN.length -1];

const btnIzq = document.querySelector("#boton-izq");

const btnDer = document.querySelector("#boton-der");

slider.insertAdjacentElement('afterbegin', fotosBNLast);

function Siguiente() {
  let fotosBNFirst = document.querySelectorAll(".fotos-b-n")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', fotosBNFirst);
    slider.style.marginLeft = "-100%";
  }, 500) ;
}

function Anterior() {
  let fotosBN = document.querySelectorAll(".fotos-b-n");
  let fotosBNLast = fotosBN[fotosBN.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', fotosBNLast);
    slider.style.marginLeft = "-100%";
  }, 500) ;
}

btnDer.addEventListener('click' , function() {
  Siguiente();
});

btnIzq.addEventListener('click' , function() {
  Anterior();
});

//Para Walmart.

const Slider = document.querySelector("#slider-walmart");

let fotosW = document.querySelectorAll(".fotos-w");

let fotosWLast = fotosW[fotosW.length -1];

const btnIzqW = document.querySelector("#boton-izq-w");

const btnDerW = document.querySelector("#boton-der-w");

Slider.insertAdjacentElement('afterbegin', fotosWLast);

function SiguienteW() {
  let fotosWFirst = document.querySelectorAll(".fotos-w")[0];
  Slider.style.marginLeft = "-200%";
  Slider.style.transition = "all 0.5s";
  setTimeout(function() {
    Slider.style.transition = "none";
    Slider.insertAdjacentElement('beforeend', fotosWFirst);
    Slider.style.marginLeft = "-100%";
  }, 500) ;
}

function AnteriorW() {
  let fotosW = document.querySelectorAll(".fotos-w");
  let fotosWLast = fotosW[fotosW.length -1];
  Slider.style.marginLeft = "0";
  Slider.style.transition = "all 0.5s";
  setTimeout(function() {
    Slider.style.transition = "none";
    Slider.insertAdjacentElement('afterbegin', fotosWLast);
    Slider.style.marginLeft = "-100%";
  }, 500) ;
}

btnDerW.addEventListener('click' , function() {
  SiguienteW();
});

btnIzqW.addEventListener('click' , function() {
  AnteriorW();
});

//Funcion Modal.

const openModal = document.querySelector("#img1");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#x");

openModal.addEventListener("click" , (e)=> {
    e.preventDefault();
    modal.classList.add("modal--show");
});

closeModal.addEventListener("click" , (e)=> {
    e.preventDefault();
    modal.classList.remove("modal--show");
});

const openModal2 = document.querySelector("#img2");
const modal2 = document.querySelector(".modal2");
const closeModal2 = document.querySelector("#x2");

openModal2.addEventListener("click" , (e)=> {
    e.preventDefault();
    modal2.classList.add("modal--show");
});

closeModal2.addEventListener("click" , (e)=> {
    e.preventDefault();
    modal2.classList.remove("modal--show");
});

const openModal3 = document.querySelector("#img3");
const modal3 = document.querySelector(".modal3");
const closeModal3 = document.querySelector("#x3");

openModal3.addEventListener("click" , (e)=> {
    e.preventDefault();
    modal3.classList.add("modal--show");
});

closeModal3.addEventListener("click" , (e)=> {
    e.preventDefault();
    modal3.classList.remove("modal--show");
});


//    codigo del perfil aleatorio
fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(datos => {
        let author = datos.results;
        let datosPersonales = "<h2>Datos personales</h2>";
        author.map(function (datos) {
          datosPersonales += `
            <div class="d-p">
                <ul>
                    <li><center><img src="${datos.picture.large}"></center></li>
                    <li><h3>Nombre: ${datos.name.first}</h3></li>
                    <li><h3>Apellido: ${datos.name.last}</h3></li>
                    <li><h3>Numero: ${datos.cell}</h3></li>
                    <li><h3>Fecha de nacimiento: ${datos.dob.date}</h3></li>
                    <li><h3>Edad: ${datos.dob.age}</h3></li>
                    <li><h3>Correo: ${datos.email}</h3></li>
                    <li><h3>Ciudad: ${datos.location.city}</h3></li>
                    <li><h3>Lugar de nacimiento: ${datos.location.country}</h3></li>
                    <li><h3>Codigo postal: ${datos.location.postcode}</h3></li>
                </ul>
            </div> `;
        });
        document.getElementById('datos-personales').innerHTML = datosPersonales;

    });