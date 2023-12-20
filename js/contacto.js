import Contacto from "./classContacto.js";

//declaro variables
const formularioContacto = document.querySelector("#formularioContacto");
const nombreApellido = document.querySelector("#nombreApellido"),
  email = document.querySelector("#email"),
  telefono = document.querySelector("#telefono");
  mensaje = document.querySelector("#mensaje"),
  provincia = document.querySelector('#provincia');
  const agenda = JSON.parse(localStorage.getItem('agendaKey')) || [];

  const crearContacto = (e) => {
    e.preventDefault();
  
    //preventDefault
    //tomo los datos de los inputs (validar)
    //crear un objeto
      const nuevoContacto = new Contacto(nombreApellido.value, email.value, telefono.value, mensaje.value, provincia.value);
    //guardo el objeto en un array
     agenda.push(nuevoContacto)
     console.log(agenda);
  };