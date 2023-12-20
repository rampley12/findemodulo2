export default class Pelicula {
    #codigo;
    #nombrePelicula;
    #categoria;
    #descripcion;
    #publicado;
  
    constructor(nombrePelicula, categoria, descripcion, publicado) {
      this.#codigo = crypto.randomUUID() ;
      this.#nombrePelicula = nombrePelicula;
      this.#categoria = categoria;
      this.#descripcion = descripcion;
      this.#publicado = publicado;
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    get nombrePelicula() {
      return this.#nombrePelicula;
    }
  
    set nombrePelicula(nuevoNombre) {
      this.#nombrePelicula = nuevoNombre;
    }
  
    get categoria() {
      return this.#categoria;
    }
  
    set categoria(nuevaCategoria) {
      this.#categoria = nuevaCategoria;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    set descripcion(nuevaDescripcion) {
      this.#descripcion = nuevaDescripcion;
    }
  
    get publicado() {
      return this.#publicado;
    }
  
    set publicado(nuevoPublicado) {
      this.#publicado = nuevoPublicado;
    }
  
    toJSON() {
      return {
        nombrePelicula: this.nombrePelicula,
        categoria: this.categoria,
        codigo: this.codigo,
        descripcion: this.descripcion,
        publicado: this.publicado,
      };
    }
  }