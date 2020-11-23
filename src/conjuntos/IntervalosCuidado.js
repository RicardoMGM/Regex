const texto = 'ABC [abc] a-c 1234'

// Busta os caracteres no intervalo de a até c
console.log(texto.match(/[a-c]/g))

// Não define um range porq eu não está dentro dos metacaracteres "[]"
// Retorna a sequencia "a-c"
console.log(texto.match(/a-c/g))

// Na tabela unicode dentro do intervalo de A até z, existe os caracteres "[]"
// Segue a ordem da tabela unicode.
console.log(texto.match(/[A-z]/g))

// tem que respeitar a ordem da tabela UNICODE
// Na tabela unicode as letras maiúsculas vem primeiro que as minúsculas
// console.log(texto.match(/[a-Z]/g))
// Sequencia numérica errada 1 não vem depois do 4, na tabela unicode
// console.log(texto.match(/[4-1]/g))