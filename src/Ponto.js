// O ponto é um coringa, que serve para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0';

// Pega a ocorrência 1 qualquer coisa 2
console.log(texto.match(/1.2/g));

// Não vai achar nada porque não tem 2 caracteres entre 1 e 2.
console.log(texto.match(/1..2/g));

// Vai retornar "1,2," porque pegou 2 caracteres entre "1 e ," que são respectivamente ",2" 
console.log(texto.match(/1..,/g));

const notas = '8.3,7.1,8.8,10.0';

// Retorna "8.3" e "8.8" Porque pega a sequencia de 8 mais 2 caracteres
console.log(notas.match(/8../g));

// Retorna "8.3", "7.1", "8.8", "0.0" Porque localiza a sequencia de 2 caracteres entre ponto
console.log(notas.match(/.\../g));