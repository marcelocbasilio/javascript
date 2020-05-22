/**
 * Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), 
 * nacionalidade (string) e o número de quilômetros que ele anda por dia (número). Com esses parâmetros 
 * avalie se essa pessoa é ou não (true / false), um filósofo Hipster. Tenha em mente que um filósofo 
 * Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.
 * 
 * Exemplo:
 * 
 *   a) filosofoHipster('Músico', 'Brasil', 5) // verdadeiro
 *   b) filosofoHipster('Jogador de futebol', 'Alemanha', 12) // false
 *   c) filosofoHipster('Músico', 'Argentina', 1) // false
 **/

 function filosofoHipster(profissao, nacionalidade, quilometros) {
   return (profissao == 'Músico') && (nacionalidade == 'Brasil') && (quilometros > 2);
 }

 console.log(filosofoHipster('Músico', 'Brasil', 5)); // verdadeiro
 console.log(filosofoHipster('Jogador de futebol', 'Alemanha', 12)); // false
 console.log(filosofoHipster('Músico', 'Argentina', 1)); // false