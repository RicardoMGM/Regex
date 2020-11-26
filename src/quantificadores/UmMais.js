const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais
// Obrigatoriamente tem que ter o "o" na palavra fogo, mas pode ter mais ocorrências.
const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g))
// Mostra todos os elementos de uma vez só desde que serja números de 0 até 9
console.log(texto3.match(/[0-9]+/g))