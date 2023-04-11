function habilitar() {
    nombre = document.getElementById("nombre").value
    telefono = document.getElementById("telefono").value
    correo = document.getElementById("correo").value
    mensaje = document.getElementById("mensaje").value
    
    val = 0

    if (nombre == "") {
        val++;
    }

    if (telefono == "") {
        val++;
    }


    if (correo == "") {
        val++;
    }


    if (mensaje == "") {
        val++;
    }

    if (val == 0) {
        document.getElementById("btn").disabled = false;

    } else {
        document.getElementById("btn").disabled = true;

    }

}

document.getElementById("nombre").addEventListener("keyup", habilitar);
document.getElementById("telefono").addEventListener("keyup", habilitar);
document.getElementById("correo").addEventListener("keyup", habilitar);
document.getElementById("mensaje").addEventListener("keyup", habilitar);
document.getElementById("btn").addEventListener("click", () => {
    alert("haz llenado todo")
});
