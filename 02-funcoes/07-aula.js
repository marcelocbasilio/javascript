function tamanhoNomeCompleto(nome, sobrenome) {
    return (nome + " " + sobrenome).length;
}

let quantidadeCaracteres = tamanhoNomeCompleto("Marcelo", "Basílio");

console.log(quantidadeCaracteres);