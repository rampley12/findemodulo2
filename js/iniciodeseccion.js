document.addEventListener("DOMContentLoaded", function () {
  const administradorElement = document.getElementById("administrador");
  const administradorCerrar = document.getElementById("cerrarUser");
  const cuentaOculta = document.getElementById("cuentaOculta");

  if (administradorElement) {
    const usuarioHaIniciadoSesion = localStorage.getItem(
      "usuarioHaIniciadoSesion"
    );

    if (usuarioHaIniciadoSesion === "true") {
      administradorElement.classList.add("administradorMostrar");
      administradorCerrar.classList.add("administradorMostrar");
      cuentaOculta.classList.add("cuentaOculta");
    }
  }
});
