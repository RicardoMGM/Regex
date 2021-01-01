const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`
// Mostra quantas quebra de linhas tem a string
console.log(texto.match(/\n/g))
// Mostra o caracter que começa e termina cada frase, porem não funciona porque o ".+" não pega o "\n" (quebra de linha)
console.log(texto.match(/^(\w).+\1$/gi))
// m -> no final, vai considerar cada linha de forma independente. Quando quer trabalhar com bordas e pegar tudo da linha trabalhe com "m"
console.log(texto.match(/^(\w).+\1$/gim))
