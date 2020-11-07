//Texto base para o exercício.
const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.';

/**
 * Regex que será persquisado.
 * // -> Abre e fecha com barra para delimitar o que será buscado
 * g -> Flag que procura de forma global (mostra todos).
 * i -> Flag que ignora maiúsculas e minúsculas
 */
const regex = /casa bonita/gi;
console.log(texto.match(regex));

// Direto passando o regex para a função.
console.log(texto.match(/a b/));
