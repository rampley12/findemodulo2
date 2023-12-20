import Contacto from "../classContacto.js";
emailjs.init("user_id"); 
//declaro variables
const formularioContacto = document.querySelector("#formularioContacto");
const nombreApellido = document.querySelector("#nombreApellido"),
  email = document.querySelector("#email"),
  telefono = document.querySelector("#telefono"),
  mensaje = document.querySelector("#mensaje"),
  provincia = document.querySelector('#provincia');
  const agenda = JSON.parse(localStorage.getItem('agendaKey')) || [];

  const crearContacto = (e) => {
    e.preventDefault();
  
    if (
        validarCantidadCaracteres(nombreApellido.value, 3, 50) &&
        validarCantidadCaracteres(provincia.value, 2, 35) &&
        validarCantidadCaracteres(mensaje.value, 5, 50) &&
        validarEmail(email.value)
      ) {
        //crear un objeto
        const nuevoContacto = new Contacto(
          nombreApellido.value,
          provincia.value,
          mensaje.value,
          email.value,
          telefono.value
        );
        //guardo el objeto en un array
        agenda.push(nuevoContacto);
        console.log(agenda);
        limpiarFormularioContacto();
        //guardar el array en el localstorage JSON
        guardarEnLocalstorage();
        
        Swal.fire({
          title: "Contacto creado",
          text: `El contacto ${nuevoContacto.nombreApellido}, ${nuevoContacto.email} fue creado exitosamente`,
          icon: "success"
        });
      } else {
        Swal.fire({
            title: "Error",
            text: "Hay errores en los datos del formulario",
            icon: "error"
          });
      }
  };

  const validarEmail =(texto)=>{
     const patron = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
     if (patron.test(texto)){
        return true;

     }else{
        return
    }
  }

  const limpiarFormularioContacto = () => {
    formularioContacto.reset();
  };
  const guardarEnLocalstorage = () => {
    localStorage.setItem("agendaKey", JSON.stringify(agenda));
  };