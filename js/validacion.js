var textoIngresado = document.querySelector("#textoIngresar");
var textoEncriptado = document.querySelector("#textoEncriptado");
var condicion = document.querySelector(".leyenda");

//validar input solo minusculas
function soloLetrasMinusculas(e) {
  key = e.keyCode || e.which;
  if (key >= 97 && key <= 122) {
    console.log("permitido");
  } else {
    console.log("NO permitido");
    condicion.style.color = "red";

    setTimeout("deshacerCambios()", 800);
    return false;
  }
}

function deshacerCambios() {
  condicion.style.color = "black";
}

//Validar
function validarTextosVacios(texto1, texto2) {
  var validor = false;

  if (texto1.value.length == 0 && texto2.value.length == 0) {
    ocultarImagen(validor);
  } else {
    ocultarImagen(validor);
  }
}

function ocultarImagen(validador) {
  var ocultar = document.querySelector("#noEncontrado");
  var mostrar = document.querySelector("#textoEncriptado");

  if (!validador) {
    //ocultar img
    mostrar.style.display = "flex";
    ocultar.style.display = "none";

    validador = true;
  } else {
    //desocultar img
    mostrar.style.display = "none";
    ocultar.style.display = "flex";
    validor = false;
  }
}

//btn Encriptar
function encriptarTexto() {
  if (textoIngresado.value.length == 0) {
    alert("No hay ningun texto ingresado para encriptar");
    return false;
  }
  
  validarTextosVacios(textoIngresado, textoEncriptado);
  var txt = textoIngresado.value;
  var nuevoTxt = txt;
  nuevoTxt = nuevoTxt.replace(/e/g, "enter");
  nuevoTxt = nuevoTxt.replace(/i/g, "imes");
  nuevoTxt = nuevoTxt.replace(/a/g, "ai");
  nuevoTxt = nuevoTxt.replace(/o/g, "ober");
  nuevoTxt = nuevoTxt.replace(/u/g, "ufat");

  rellenar(nuevoTxt);
}

function rellenar(txt) {
  textoEncriptado.innerHTML = txt;
  textoIngresado.value = "";
}

//btn Desencriptar
function desencriptarTexto() {
  if (textoIngresado.value.length == 0) {
    alert("No hay ningun texto ingresado para desencriptar");
    return false;
  }
  validarTextosVacios(textoIngresado, textoEncriptado);
  var txt = textoIngresado.value;
  var nuevoTxt = txt;
  nuevoTxt = nuevoTxt.replace(/enter/g, "e");
  nuevoTxt = nuevoTxt.replace(/imes/g, "i");
  nuevoTxt = nuevoTxt.replace(/ai/g, "a");
  nuevoTxt = nuevoTxt.replace(/ober/g, "o");
  nuevoTxt = nuevoTxt.replace(/ufat/g, "u");

  rellenar(nuevoTxt);
}

//btn Copiar
function copiarTexto() {
  if (textoEncriptado.value == 0) {
    alert("No hay ningun texto ingresado para desencriptar");
    return false;
  }
  textoEncriptado.select();
  var txtEncriptado = textoEncriptado.innerHTML;
  navigator.clipboard.writeText(txtEncriptado);
  alert("El texto ha sido copiado exitosamente!!");
}
