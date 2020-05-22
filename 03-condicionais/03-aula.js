function hojeSeJoga(diaDaSemana) {

    if (diaDaSemana == "domingo") {
        return "Hoje é dia de futebol! ! !";
    } else {
        return "Hoje não é dia de futebol :(";
    }
     
}

let resultado = hojeSeJoga("segunda-feira");

console.log(resultado);