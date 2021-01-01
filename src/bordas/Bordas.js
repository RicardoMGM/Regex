const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// Mostra todos os "r" da frase
console.log(texto.match(/r/gi))
// "^" -> Dentro de um conjunto na primeira posição, quer dizer conjunto negado. Fora do conjunto quer dizer início de linha.
// No caso abaixo inicio da linha ou string
console.log(texto.match(/^r/gi)) // ^ inicio da linha/string
// "$" -> significa fim da linha ou string
console.log(texto.match(/r$/gi)) // $ fim da linha/string
// A linha começa com "r", ".*" vai ter qualquer coisa no meio. E termina com r "r$"
// O "." não resolve para "\n" (dot all).
console.log(texto.match(/^r.*r$/gi)) // problema do dotall
