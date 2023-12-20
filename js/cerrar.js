document.addEventListener("DOMContentLoaded", function () {
  const administradorElement = document.getElementById("administrador");
  const cerrarUserElement = document.getElementById("cerrarUser");

  const usuarioHaIniciadoSesion = localStorage.getItem(
    "usuarioHaIniciadoSesion"
  );

  if (administradorElement && usuarioHaIniciadoSesion === "true") {
    administradorElement.classList.add("administradorMostrar");
  }

  if (cerrarUserElement) {
    cerrarUserElement.addEventListener("click", function (event) {
      event.preventDefault();

      localStorage.removeItem("usuarioHaIniciadoSesion");

      window.location.href = "../index.html";
    });
  }
});
