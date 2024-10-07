var EncabezadoPagina = /** @class */ (function () {
    function EncabezadoPagina() {
        this.titulo = '';
        this.color = '';
        this.fuente = '';
        this.alineacion = 'centrado';
    }
    EncabezadoPagina.prototype.establecerPropiedades = function (titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    };
    EncabezadoPagina.prototype.establecerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    EncabezadoPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return EncabezadoPagina;
}());
/* Uso */
var nuevoEncabezadoPagina = new EncabezadoPagina();
nuevoEncabezadoPagina.establecerPropiedades('Mi Página', 'azul', 'Arial');
nuevoEncabezadoPagina.establecerAlineacion('derecha');
nuevoEncabezadoPagina.imprimirPropiedades();
