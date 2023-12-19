document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usuarioAdministrador = "admin@admin.com";
    const usuarioContrasenia = "admin";
    // Verificar las credenciales (esto es solo un ejemplo, no lo uses en un entorno de producción)
    if (username === usuarioAdministrador && password === usuarioContrasenia) {
      console.log("Inicio de sesión exitoso");
    }
  });
