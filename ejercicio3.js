var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this._autor = "";
    }
    Object.defineProperty(Cancion.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        set: function (nuevoAutor) {
            this._autor = nuevoAutor;
        },
        enumerable: false,
        configurable: true
    });
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this._autor));
    };
    return Cancion;
}());
/* Uso */
var miCancion = new Cancion("Bohemian Rhapsody", "Rock");
miCancion.autor = "Queen";
console.log("Autor de la canción:", miCancion.autor);
miCancion.mostrarDatos();
