function Puzzle() {
    var estado = [-1, -2, -3, -4];
}

Puzzle.prototype.getNumPosicionPiezaEnCaja = function (idPieza) {
    if (this.isPermitidoQuitarPieza(idPieza) === true) {
        return this.estado[idPieza - 1];
    } else {
        throw "La pieza no esta en la caja";
    }

};

Puzzle.prototype.getNumPosicionPiezaEnTablero = function (idPieza) {
    if (this.isPermitidoQuitarPieza(idPieza) === true) {
        return this.estado[idPieza - 1];
    } else {
        throw "La pieza no esta en el tablero";
    }

};

Puzzle.prototype.getNumPiezas = function () {
    return this.estado.length;
};

Puzzle.prototype.isLibreHuecoTablero = function (idHuecoTablero) {
    for (i = 0; i < this.estado.length; i++) {
        if (this.estado[i] === idHuecoTablero) {
            return false;
        }
    }

    return true;
};

Puzzle.prototype.isPermitidoColocarPieza = function (idPieza, idHuecoTablero) {
    if (this.isColocadaPieza(idPieza) === true) {

    }
};

Puzzle.prototype.isPermitidoQuitarPieza = function (idPieza) {

};

Puzzle.prototype.isColocadaPieza = function (idPieza) {
    var resultado = false;
    if (this.estado[idPieza - 1] > 0) {
        resultado = true;
    }
    return resultado;
};

Puzzle.prototype.colocarPieza = function (idPieza, idHuecoTablero) {

};

Puzzle.prototype.quitarPieza = function (idPieza) {
    var resultado = false;
    if (this.estado[idPieza - 1] > 0) {
        resultado = true;
    }
    return resultado;
};

Puzzle.prototype.reset = function () {
    var resuelto = true;
    for (i = 0; i <= this.estado.length; i++) {
        this.estado[i] = 0 - i;
    }
};

Puzzle.prototype.isResuelto = function () {
    var resultado = true;
    for (var i = 0; i < this.estado.length; i++) {
        if (this.estado[i] !== i + 1) {
            resultado = false;
            break;
        }
    }
    return resultado;
};

Puzzle.prototype.onDragStartPiezaSinPoner = function (event) {
    event.dataTransfer.setData("text", event.target.id);
};

Puzzle.prototype.onDragStartPiezaPuesta = function (event) {
    event.dataTransfer.setData("text", event.target.id);
};

Puzzle.prototype.onDropPiezaSinPoner = function (event) {
    event.preventDefault();

    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById(event.target.id);

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;

};

Puzzle.prototype.onDropPiezaPuesta = function (event) {
    event.preventDefault();

    var destElement = document.getElementById(event.dataTransfer.getData("text"));
    var originElement = document.getElementById(event.target.id);

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;

};

Puzzle.prototype.onDragOverPiezaSinPoner = function (event) {
    event.preventDefault();
};

Puzzle.prototype.onDragOverPiezaPuesta = function (event) {
    event.preventDefault();
};

var puzzle = new Puzzle(4);