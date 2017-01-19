function getIdPiezaFromElementPieza(elementPieza) {
    return $(elementPieza).attr("idPieza") * 1;

    if (typeof (value) === typeof (undefined) || (value === false)) {
        throw "No existe el elemento con idPieza"+elementPieza.idPieza;
    } else {
        throw "Existe el elemento con idPieza"+elementPieza.idPieza;
    }
}

function getHuecoTableroFromElementHuecoTablero(elementHuecoTablero) {
    return $(elementHuecoTablero).attr("idPieza") * 1;
}

function getHuecoTableroFromElementHuecoCaja(elementHuecoCaja) {
    return $(elementHuecoCaja).attr("idPieza") * 1;
}

function getElementHuecoCajaFromHuecoCaja(elementHuecoCaja) {
    return $(elementHuecoCaja).attr("idPieza") * 1;
}

function getElementHuecoTableroFromHuecoTablero(elementHuecoTablero) {
    return $(elementHuecoTablero).attr("idPieza") * 1;
}

function getElementHuecoTableroFromHuecoCaja(elementHuecoCaja) {
    return $(elementHuecoCaja).attr("idPieza") * 1;
}

function getElementHuecoCajaFromHuecoTablero(elementHuecoTablero) {
    return $(elementHuecoTablero).attr("idPieza") * 1;
}

function onDragStartPieza(event) {
    var elementPieza = event.target;
    var idPieza = getIdPiezaFromElementPieza(elementPieza);
    event.dataTransfer.setData("text", idPieza);
}

function onDropHuecoCaja(event) {
    event.preventDefault();

}

function onDropHuecoTablero(event) {
    event.preventDefault();
}

function onDragOverHuecoCaja(event) {
    event.preventDefault();
}

function onDragOverHuecoTablero(event) {
    event.preventDefault();
}

var idPieza = event.dataTransfer.getData("text");

var elementHueco = event.currentTarget;

var puzzle = new Puzzle(4);