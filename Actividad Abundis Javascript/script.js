let imagenActual = 1; // Variable para rastrear la imagen actual

function cambiarContenido() {
    document.getElementById("demo").innerHTML = "¡El contenido ha cambiado!";
}

function aumentar() {
    document.getElementById('demo2').style.fontSize = '20px';
    document.getElementById('demo2').style.color = 'green';
}

function myFunction() {
    document.getElementById('demo3').style.fontSize = '30px';
    document.getElementById("demo3").innerHTML = "¡El párrafo ha cambiado!";
    document.getElementById("demo3").style.color = "blue";
}

function cambiarImagen() {
    const imagen = document.getElementById("miImagen");
    if (imagenActual === 1) {
        imagen.src = "imagen2.jpg"; // Cambiar a la segunda imagen
        imagenActual = 2; // Actualizar el estado de la imagen
    } else {
        imagen.src = "imagen1.jpg"; // Volver a la primera imagen
        imagenActual = 1; // Actualizar el estado de la imagen
    }
}