  
const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional)
// No caso pode ter o "o" no final da paravra fogo ou não
const regex = /fogo?/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))