//Cuando el usuario se desplaza se usa miFuncion
window.onscroll = function() {
    miFuncionPegajosa();
}

//Seleccionar la barra de navegación
var barranav = document.getElementById("barranav");

//Obtiene la pocisión de la barra de desplazamiento
var pegajosa = barranav.offsetTop;

//Agregar la clase pegajosa a la barra de navegación cuando se cambia la posición de desplazamiento. La remueve si cambia la posición
function miFuncionPegajosa() {
    if (window.pageYOffset>=pegajosa) {
        barranav.classList.add("pegajosa");
    } else {
        barranav.classList.remove("pegajosa");       
    }
}

//Agrega y elimina la clase receptivo
function miFuncionReceptiva() {
    var x=document.getElementById("barranav");
    if (x.className==="navbarra") {
        x.className+=" receptivo";
    } else {
        x.className="navbarra";
    }
}

//Función para que el cuadro de busqueda aparezca al pasar el mouse
var enter=document.getElementById("botonbusqueda");

enter.addEventListener("mouseenter",miFuncionHover,true);

//Muestra el cuadro de busqueda 
function miFuncionHover() {
    ent=document.getElementById("cuadrobusqueda");
    ent.classList.remove("eliminar");
    ent.classList.add("agregar");
    ent.style.display="inline-block";
    ent.style.opacity=1;
}

//Cuando el cuadro de busqueda pierde el foco, lo elimina
function miFuncionQuitarReceptiva() {
    var elem = document.getElementById('cuadrobusqueda');
    if(window.matchMedia("(max-width: 700px)").matches){
        elem.style.display="block";
    }else{
        miFuncionQuitar();
    }
    function miFuncionQuitar() {   
        var opa = 1;
        var id = setInterval(frame, 50);
        function frame() {
            if (opa>0){
                opa-=0.1; 
                elem.style.opacity = opa;
            }else{
                clearInterval(id);
                elem.style.display='none';
            }
        }
    }
}

//Obtener el Modal
var modal=document.getElementById("id01");
var modal2=document.getElementById("id02");

/*window.onclick=function (event) {
    if (event.target==modal || event.target==modal2){
        modal.style.display="none";
        modal2.style.display="none";
    }
}*/

//Mostrar contraseña
var miContra=document.getElementById("contra1");
var miConfir=document.getElementById("contra2");

function mostrarContra() {
    if (miContra.type === "password" || miConfir.type === "password") {
        miContra.type = "text";
        miConfir.type = "text";
    } else {
        miContra.type = "password";
        miConfir.type = "password";
    }
}

//Validar Formulario
var minuscula=document.getElementById("minuscula");
var mayuscula=document.getElementById("mayuscula");
var numero=document.getElementById("numero");
var longitud=document.getElementById("longitud");
var coincidir=document.getElementById("coincidir");
var caracter=document.getElementById("caracteresesp");

miContra.onfocus=function () {
    document.getElementById("mensaje").style.display="block";
}

miContra.onblur=function () {
    document.getElementById("mensaje").style.display="none";
}

miConfir.onfocus=function () {
    document.getElementById("mensaje").style.display="block";
}

miConfir.onblur=function () {
    document.getElementById("mensaje").style.display="none";
}

miContra.oninput = function () {
    var letrasMinusculas = /[a-z]/g;
    if (miContra.value.match(letrasMinusculas)) {
        minuscula.classList.remove("invalido");
        minuscula.classList.add("valido");        
    }else{
        minuscula.classList.remove("valido");
        minuscula.classList.add("invalido");
    }
    var letrasMayusculas = /[A-Z]/g;
    if (miContra.value.match(letrasMayusculas)) {
        mayuscula.classList.remove("invalido");
        mayuscula.classList.add("valido");        
    }else{
        mayuscula.classList.remove("valido");
        mayuscula.classList.add("invalido");
    }
    var numeros = /[0-9]/g;
    if (miContra.value.match(numeros)) {
        numero.classList.remove("invalido");
        numero.classList.add("valido");        
    }else{
        numero.classList.remove("valido");
        numero.classList.add("invalido");
    }
    if (miContra.value.length>=8) {
        longitud.classList.remove("invalido");
        longitud.classList.add("valido");        
    }else{
        longitud.classList.remove("valido");
        longitud.classList.add("invalido");
    }
    if (miContra.value===miConfir.value) {
        coincidir.classList.remove("invalido");
        coincidir.classList.add("valido");        
    }else{
        coincidir.classList.remove("valido");
        coincidir.classList.add("invalido");
    }
    var caracteres = /[.,#$%*-]/g;
    if (miContra.value.match(caracteres)) {
        caracter.classList.remove("invalido");
        caracter.classList.add("valido");        
    }else{
        caracter.classList.remove("valido");
        caracter.classList.add("invalido");
    }
}

miConfir.oninput = function () {
    if (miContra.value===miConfir.value) {
        coincidir.classList.remove("invalido");
        coincidir.classList.add("valido");        
    }else{
        coincidir.classList.remove("valido");
        coincidir.classList.add("invalido");
    }
}


function miFuncionValidar() {
    var miContra=document.getElementById("contra1");
    var miConfir=document.getElementById("contra2");
    if (miContra.value!==miConfir.value) {
        alert("Verifique su contraseña ya que no coninciden");
        return false;
    }else{
        return true;
    }
}

//Abrir y Cerrar Modal de Navegación Lateral
function abrirNavLat() {
    document.getElementById("miBarraLateral").style.width="250px";
    document.getElementById("principal").style.marginLeft="250px";
}

function cerrarNavLat() {
    document.getElementById("miBarraLateral").style.width="0";
    document.getElementById("principal").style.marginLeft="0";
}

//Función Menu Acordeon
var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activar");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Diapositivas de imagenes
var diapositivaIndice=0;
mostrarDiapositivas();

function mostrarDiapositivas() {
    var i;
    var diapositivas=document.getElementsByClassName("miDiapositiva");
    for (i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display="none";
    }
    diapositivaIndice++;
    if (diapositivaIndice>diapositivas.length) {
        diapositivaIndice=1
    }
    diapositivas[diapositivaIndice-1].style.display="block";
    setTimeout(mostrarDiapositivas,5000);
}

//Diapositiva de productos
var slider = document.querySelector(".sliderprincipal");
slider.innerHTML+=slider.innerHTML;