const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// Pega 0 ou mais ocorrências do o
// * -> zero ou mais
const regex = /fogo*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))
