function soma(numero1, numero2) {
    return numero1 + numero2;
}

function triplo(numero1) {
    return numero1 * 3;
}

function triploDaSoma(numero1, numero2) {
    var resultadoTriploDaSoma = soma(numero1,numero2);
    return triplo(resultadoTriploDaSoma);
}

let resultado = triploDaSoma(5, 6);

console.log(resultado);