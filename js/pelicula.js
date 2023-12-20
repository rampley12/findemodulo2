import Pelicula from "./classPeliculas.js";

// Declara variables
// Declara variables
const formularioPelicula = document.querySelector("form");
const listaPeliculas = JSON.parse(localStorage.getItem('peliculaKey')) || [];

// Funciones
const crearPelicula = (e) => {
  e.preventDefault();
  const nombrePelicula = document.querySelector("#nombrePelicula");
  const categoria = document.querySelector("#categoria");
  const descripcion = document.querySelector("#descripcion");
  const publicado = document.querySelector("#publicado");
  const nuevaPelicula = new Pelicula(nombrePelicula.value, categoria.value, descripcion.value, publicado.value);
  listaPeliculas.push(nuevaPelicula);
  console.log(listaPeliculas);
  limpiarFormulario();
  
  guardarEnLocalstorage();

  dibujarFila(nuevaPelicula, listaPeliculas.length);
};

const limpiarFormulario = () => {
  formularioPelicula.reset();
}

const guardarEnLocalstorage = () => {
  localStorage.setItem('peliculaKey', JSON.stringify(listaPeliculas));
}

const dibujarFila = (peli, numeroFila)=>{
  const tablaPelicula = document.getElementById('tablaPelicula');
  const fila = document.createElement('tr');
  fila.id = `fila-${peli.id}`; // Asignar un id único a la fila
  
  fila.innerHTML = `<tr>
  <th scope="row">${numeroFila}</th>
  <td>${peli.nombrePelicula}</td>
  <td>${peli.categoria}</td>
  <td>${peli.descripcion}</td>
  <td>${peli.publicado}</td>
  <td>
  
  <button class="btn btn-dark" onclick="destacar('${peli.id}')">Destacar</button>
  <button class="btn btn-warning"  onclick="editarPelicula('${peli.id}')">Editar</button>
  <button class="btn btn-danger" onclick="borrarPelicula('${peli.id}')">Borrar</button>
  </td>
</tr>`
}

const cargarDatos = () =>{

  if(listaPeliculas.length > 0){
    listaPeliculas.map((itemPeli, posicionPeli)=> dibujarFila(itemPeli, posicionPeli + 1))
  }
}

window.borrarPelicula =(idPeli)=>{
    console.log(idPeli);
   //buscar la posicion del elemento en el array findIndex
   const posicionPeliculaBuscado = agenda.findIndex((itemPeli) => itemPeli.id === idPeli );
   console.log(posicionPeliculaBuscado);
    //borrar el contacto de la agenda usando splice(posicion, cant de elementos a borrar)
    agenda.splice(posicionPeliculaBuscado, 1)
    //actualizar localstorage
    guardarEnLocalstorage()
    //borrar la fila de la tabla
    const tablaPelicula = document.getElementById('tablaPelicula');
    tablaPelicula.innerHTML = '';
    cargaInicial();
  }
  
  let peliculaEditar = null; 
  window.editarPelicula =(idPeli)=>{
    console.log(idPeli);
   //buscar la posicion del elemento en el array findIndex
   const posicionPeliculaBuscado = agenda.findIndex((itemPelicula) => itemPelicula.id === idPeli );
   console.log(posicionPeliculaBuscado);
     // Capturar datos del contacto de la agenda
     const peliculaEditar = agenda[posicionPeliculaBuscado];
  
     // Llenar el formulario de edición con los datos del contacto
     document.getElementById('nombrePeliculaNuevo').value = peliculaEditar.nombrePelicula;
     document.getElementById('categoriaNuevo').value = peliculaEditar.categoria;
     document.getElementById('descripcionNuevo').value = peliculaEditar.descripcion;
     document.getElementById('publicadoNuevo').value = peliculaEditar.publicado;
   
     // Abrir el modal de edición
     const modalPeliculaEditado = new bootstrap.Modal(
       document.getElementById('modalPeliculaEditado')
     );
     modalPeliculaEditado.show();
     
     const formularioEditar = document.getElementById('formularioEditar');
    formularioEditar.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Actualizar los datos del objeto en el array
      peliculaEditar.nombre = document.getElementById('nombrePeliculaNuevo').value;
      peliculaEditar.apellido = document.getElementById('categoriaNuevo').value;
      peliculaEditar.email = document.getElementById('descripcionNuevo').value;
      peliculaEditar.telefono = document.getElementById('publicadoNuevo').value;
  
      limpiarFormulario();
      // Guardar el array actualizado en localstorage
      guardarEnLocalstorage();
  
      // Cerrar el modal de edición
      modalContactoEditado.hide();
     actualizarTabla();
    });
     
   };

   let filaDestacadaId = null;
   window.destacar = (idPeli) => {
    const filaDestacada = document.getElementById(`fila-${idPeli}`);
  
    if (filaDestacada && filaDestacadaId !== idPeli) {
      // Si la fila existe y no ha sido destacada antes
      if (filaDestacadaId !== null) {
        // Si ya hay una fila destacada, quitar la clase destacado
        const filaAnterior = document.getElementById(`fila-${filaDestacadaId}`);
        filaAnterior.classList.remove('table-dark');
      }
  
      // Añadir la clase destacado a la nueva fila
      filaDestacada.classList.add('table-dark');
  
      // Actualizar la variable de la fila destacada
      filaDestacadaId = idPeli;
    } else {
      // Mostrar un mensaje si la fila ya ha sido destacada
      alert("Solo se puede destacar una vez.");
    }
  };
  
  const actualizarTabla = ()=> {
    const tablaContactos = document.getElementById('tablaContacto');
    tablaContactos.innerHTML = '';
    cargaInicial();
  }
formularioPelicula.addEventListener("submit", crearPelicula);

cargarDatos();