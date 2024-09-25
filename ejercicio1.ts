class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;
  
    constructor(titulo: string, color: string, fuente: string, alineacion: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = alineacion;
    }
  
    obtenerPropiedades(): void {
      console.log(`Título: ${this.titulo}`);
      console.log(`Color: ${this.color}`);
      console.log(`Fuente: ${this.fuente}`);
    }
  
    establecerAlineacion(): void {
      console.log(`El título se alineará a la ${this.alineacion}`);
    }
  
    imprimirTodo(): void {
      this.obtenerPropiedades();
      this.establecerAlineacion();
    }
  }
  
  const cabecera = new CabeceraPagina('Mi Página', 'azul', 'Arial', 'derecha');
  cabecera.imprimirTodo();