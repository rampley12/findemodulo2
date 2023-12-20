export default class Contacto {
    #id;
    #nombreApellido;
    #email;
    #telefono;
    #mensaje;
    #provincia;
    constructor(nombreApellido, email, telefono, mensaje, provincia) {
      this.#id = crypto.randomUUID() ;
      this.#nombreApellido = nombreApellido;
      this.#email = email;
      this.#telefono = telefono;
      this.#mensaje = mensaje;
      this.#provincia = provincia
    }
  
    get id() {
      return this.#id;
    }
  
    get nombreApellido() {
      return this.#nombreApellido;
    }
  
    set nombreApellido(nuevoNombreApellido) {
      this.#nombreApellido = nuevoNombreApellido;
    }
  
    get email() {
      return this.#email;
    }
  
    set email(nuevoEmail) {
      this.#email = nuevoEmail;
    }
  
    get telefono() {
      return this.#telefono;
    }
  
    set telefono(nuevoTelefono) {
      this.#telefono = nuevoTelefono;
    }

    get mensaje() {
        return this.#mensaje;
      }
    
      set mensaje(nuevoMensaje) {
        this.#mensaje = nuevoMensaje;
      }

      get provincia() {
        return this.#provincia;
      }
    
      set provincia(nuevoProvincia) {
        this.#provincia = nuevoProvincia;
      }
    toJSON() {
      return {
        nombreApellido: this.nombreApellido,
        id: this.id,
        email: this.email,
        telefono: this.telefono,
        mensaje: this.mensaje,
        provincia : this.provincia,
      };
    }
  }
  