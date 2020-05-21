var numeroA = 30;
var numeroB = 45;
var numeroC = numeroA;

numeroA = numeroB;
numeroB = numeroA;
numeroB = numeroC;

console.log(numeroA);
console.log(numeroB);
console.log(numeroC);