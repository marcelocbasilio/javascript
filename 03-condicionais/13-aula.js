/**
 * Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo 
 * com o parâmetro. Dica: nessa função você pode usar vários if.
 * 
 * medalhaSegundoOPosto(1)
 * "ouro"
 * medalhaSegundoOPosto(2)
 * "prata"
 * medalhaSegundoOPosto(3)
 * "bronze"
 * medalhaSegundoOPosto(5)
 * "Continue participando"
 **/
function medalhaSegundoOPosto(posto){
  if (posto == 1) {
    return "ouro";
  } else if (posto == 2) {
    return "prata";
  } else if (posto == 3) {
    return "bronze";
  } else {
    return "Continue participando";
  }
}

console.log(medalhaSegundoOPosto(1));
console.log(medalhaSegundoOPosto(2));
console.log(medalhaSegundoOPosto(3));
console.log(medalhaSegundoOPosto(5));