/**
 * Portanto, vamos definir a função sinal que recebe um número para alcançar o objetivo desejado. 
 * DICA: Lembre-se que você pode precisar usar mais de um if.
 *    a) 1, se o número é positivo
 *    b) 0, se o número é zero
 *    c) -1, se o número é negativo
 */

function sinal(numero) {
    if (numero > 0) {
        return 1;
    }
  
    if (numero == 0) {
        return 0;
    }
  
    if (numero < 0) {
        return -1;
    }
}

console.log(sinal(40));
console.log(sinal(0));
console.log(sinal(-256));