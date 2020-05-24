function pagarComCartao(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}

console.log(pagarComCartao(true, 6, 320));
console.log(pagarComCartao(false, 8, 80));
console.log(pagarComCartao(true, 2, 215));
console.log(pagarComCartao(true, 1, 32));
