/**
 * No parque de diversões da cidade, eles instalaram uma nova montanha-russa e nos pediram ajuda para 
 * que pudéssemos notificar as pessoas, se poderiam entrar ou não, antes de fazer a fila. Os requisitos 
 * para uma pessoa poder entrar no brinquedo são:
 * 
 * Atingir a altura mínima de 1,5 m (ou 1,2 m, se acompanhada por um adulto)
 * Não ter qualquer problema cardíaco
 * 
 * Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), 
 * temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições 
 * necessárias mencionadas acima.
 * 
 * podeSubir(1.7, false, true)
 * false // não pode subir, porque embora seja maior do que 1.5m e tem um problema cardíaco
 */

function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){
  var alturaMinima = (vemComCompania) ? 1.2 : 1.5;
  return (!temProblemaCardiaco) && (alturaPessoa >= alturaMinima);
}
/*
console.log(podeSubir(1.7, false, true)); //false
console.log(podeSubir(1.7, false, false)); // true
console.log(podeSubir(1.2, true, false));//true
console.log(podeSubir(1.2, true, true));//false
console.log(podeSubir(1.2, false, false)); //false
*/
console.warn(podeSubir(1.5, false, false)); // true
console.warn(podeSubir(1.2, true, false)); // false
console.warn(podeSubir(1.2, false, false)); // false
console.warn(podeSubir(1.1, true, false)); // false