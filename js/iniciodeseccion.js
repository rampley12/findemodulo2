document.addEventListener("DOMContentLoaded", function () {
  const administradorElement = document.getElementById("administrador");

  if (administradorElement) {
    const usuarioHaIniciadoSesion = localStorage.getItem(
      "usuarioHaIniciadoSesion"
    );

    if (usuarioHaIniciadoSesion === "true") {
      administradorElement.classList.add("administradorMostrar");
    }
  }
});
