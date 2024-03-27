var buscar = document.getElementById("buscar")

//Evento click, funcion validar
buscar.addEventListener('click', validar)

function validar() {
    var animal = document.querySelector(".animal").value
    var patron1 = /gato/i
    var patron2 = /perro/i

    if (animal.match(patron1) || animal.match(patron2)) {
        alert("Palabra ingresada permitida");
    } else {
        alert("La palabra ingresada no es permitida");
    }
}