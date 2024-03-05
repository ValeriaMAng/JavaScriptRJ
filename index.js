function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    if (usuario === "tutor" && (contrasena === "prueba" || contrasena === "contraseña")) {
        localStorage.setItem("sesionIniciada", "true");
        window.location.href = "journal.html";
    } else {
        alert("Datos incorrectos, intente de nuevo");
    }
}

function cerrarSesion() {
    localStorage.removeItem("sesionIniciada");
    window.location.href = "index.html";
}

document.getElementById("registrarBtn").addEventListener("click", registrarLibro);
document.getElementById("buscarBtn").addEventListener("click", buscarLibro);

class Libro {
    constructor(titulo, autor, calificacion, fechaInicio, fechaTermino, review) {
        this.titulo = titulo;
        this.autor = autor;
        this.calificacion = calificacion;
        this.fechaInicio = fechaInicio;
        this.fechaTermino = fechaTermino;
        this.review = review;
    }
}

function registrarLibro() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let calificacion = document.getElementById("calificacion").value;
    let fechaInicio = document.getElementById("fechaInicio").value;
    let fechaTermino = document.getElementById("fechaTermino").value;
    let review = document.getElementById("review").value;

    let nuevoLibro = new Libro(titulo, autor, calificacion, fechaInicio, fechaTermino, review);

    localStorage.setItem(titulo, JSON.stringify(nuevoLibro));

    limpiarFormulario();

    mostrarMensajeRegistro("Libro registrado exitosamente.");
}

function buscarLibro() {
    let tituloABuscar = document.getElementById("buscarTitulo").value;
    let libroEncontrado = localStorage.getItem(tituloABuscar);
    if (libroEncontrado) {
        let resultadoDiv = document.getElementById("resultadoBuscar");
        resultadoDiv.innerHTML = "<h2>Detalles del Libro</h2>" + libroEncontrado;
    } else {
        mostrarMensajeBuscar("Libro no encontrado.");
    }
}

function limpiarFormulario() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("calificacion").value = "";
    document.getElementById("fechaInicio").value = "";
    document.getElementById("fechaTermino").value = "";
    document.getElementById("review").value = "";
}

function mostrarMensajeRegistro(mensaje) {
    let resultadoDiv = document.getElementById("resultadoRegistro");
    resultadoDiv.innerHTML = "<p>" + mensaje + "</p>";
}

function mostrarMensajeBuscar(mensaje) {
    let resultadoDiv = document.getElementById("resultadoBuscar");
    resultadoDiv.innerHTML = "<p>" + mensaje + "</p>";
}