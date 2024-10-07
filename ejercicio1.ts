class EncabezadoPaginaUnico {
  private titulo: string;
  private color: string;
  private fuente: string;
  private alineacion: 'centrado' | 'derecha' | 'izquierda';

  constructor() {
    this.titulo = '';
    this.color = '';
    this.fuente = '';
    this.alineacion = 'centrado';
  }

  establecerPropiedades(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
    this.alineacion = alineacion;
  }

  imprimirPropiedades(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
}

/* Uso */
const encabezadoPagina = new EncabezadoPaginaUnico();
encabezadoPagina.establecerPropiedades('Mi Página', 'azul', 'Arial');
encabezadoPagina.establecerAlineacion('derecha');
encabezadoPagina.imprimirPropiedades();