const texto = 'Você precisa responder sim, não ou não sei!';

// "|" é um metacaracter que representa o ou
// Vai buscar sim ou não ou sei de dentro do texto.
console.log(texto.match(/sim|não|sei/g));