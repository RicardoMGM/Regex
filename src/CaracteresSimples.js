const texto = '1,2,3,4,5,6,a.b c!d?e';

//Cria uma array com os elementos separados por ","
const regexVirgula = /,/;
console.log(texto.split(regexVirgula));

//Acha a primeira "," e informa sua posição, assim como os dados de entrada.
console.log(texto.match(regexVirgula));

//Lista todos as "," encontradas.
console.log(texto.match(/,/g));

//Lista todos os "A" encontrados, no caso nenhum
console.log(texto.match(/A/g));

//Procura o caracter "A"
//g -> De forma global para todas as ocorrências
//i -> idependente de ser maiúsculo ou minúsculo.
console.log(texto.match(/A/gi));

//Busta o número 2
console.log(texto.match(/2/g));

//Busca a sequência "b c!d" no texto
console.log(texto.match(/b c!d/gi));