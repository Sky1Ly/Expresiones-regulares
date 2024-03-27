/**
 * Validación de datos, 
 * busca palabra Perro o Gato
 */
var buscar = document.getElementById("buscar")

//Evento click, funcion validar
buscar.addEventListener('click', validarPerroGato)

function validarPerroGato() {
    var animal = document.querySelector(".animal").value
    var patron1 = /gato/i
    var patron2 = /perro/i

    if (animal.match(patron1) || animal.match(patron2)) {
        alert("Palabra ingresada permitida");
    } else {
        alert("La palabra ingresada no es permitida");
    }
}

/**
 * Validación de datos,
 * Validas las palabras y no los numeros
 */

var enviar = document.getElementById("enviar")
enviar.addEventListener('click', validacion)

function validacion() {
    var lugar = document.querySelector(".lugar").value
    var permitido = /[a-zA-Z]/gim

    if (lugar.match(permitido)) {
        alert("Texto Permitido")
    } else {
        alert("Texto no permitido")
    }
}