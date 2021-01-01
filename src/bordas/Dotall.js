const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall
// Resolve o problema no caso de ter um "\n" na string.
// "\s\S" -> Tudo que é espaço e não espaço.
console.log(texto.match(/^r[\s\S]*r$/gi))
