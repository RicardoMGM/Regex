// Unicode
// Quantidade de Bytes Variável - Expansível
// Auporta mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt/

const texto = 'aʬc௵d';
// \u -> para receber códio unicode
console.log(texto.match(/\u02AC|\u0BF5/));