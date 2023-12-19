document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usuarioAdministrador = "admin@admin.com";
    const usuarioContrasenia = "admin123";

    if (username === usuarioAdministrador && password === usuarioContrasenia) {
      console.log("Inicio de sesión exitoso");

      localStorage.setItem("usuarioHaIniciadoSesion", "true");

      window.location.href = "../index.html";
    } else {
      console.log("Credenciales incorrectas");
    }
  });
