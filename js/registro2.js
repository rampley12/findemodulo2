// Función para validar el formulario con alertas personalizadas y cambio de color
function validarFormulario() {
    const nombre = document.getElementById('nombre-completo');
    const nombreUsuario = document.getElementById('nombreUsuario');
    const email = document.getElementById('exampleFormControlInput1');
    const contraseña = document.getElementById('inputPassword6');
    const checkbox = document.getElementById('invalidCheck');
  
    const nombreValido = true;
    const nombreUsuarioValido = true;
    const emailValido = true;
    const contraseñaValida = true;
    const checkboxValido = true;
  
    if (nombre.value.length < 5 || nombre.value.length > 35) {
      nombre.style.borderColor = 'red';
      nombreValido = false;
    } else {
      nombre.style.borderColor = 'green';
    }
  
    if (nombreUsuario.value === '') {
      nombreUsuario.style.borderColor = 'red';
      nombreUsuarioValido = false;
    } else {
      nombreUsuario.style.borderColor = 'green';
    }
  
    if (!/\S+@\S+\.\S+/.test(email.value)) {
      email.style.borderColor = 'red';
      emailValido = false;
    } else {
      email.style.borderColor = 'green';
    }
  
    if (contraseña.value.length < 8 || contraseña.value.length > 20) {
      contraseña.style.borderColor = 'red';
      contraseñaValida = false;
    } else {
      contraseña.style.borderColor = 'green';
    }
  
    if (!checkbox.checked) {
      checkboxValido = false;
    }
  
    // Verificar si todos los campos son válidos
    if (nombreValido && nombreUsuarioValido && emailValido && contraseñaValida && checkboxValido) {
      // Mostrar alerta de éxito
      Swal.fire({
        title: "Todo salio bien!",
        text: "Creaste una cuenta con exito",
        icon: "success"
      });
    } else {
      // Mostrar alerta de error si algún campo es inválido
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa correctamente todos los campos resaltados en rojo.'
      });
      return false;
    }
  }
  
  // Asociar la función de validación al evento 'submit' del formulario
  document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
      event.preventDefault(); // Evitar el envío automático del formulario si la validación falla
    } else {
      // Aquí podrías llamar a la función para enviar el correo al administrador
      // enviarCorreoAdministrador(datosUsuario);
      // Resto del código para procesar el registro del usuario
    }
  });
  
  