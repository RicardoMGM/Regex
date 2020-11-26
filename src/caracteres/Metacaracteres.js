// . ? * + - ^ $ | [ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e';

//Cria uma array separando o texto inicial pelo caracter "."
//Como o "." é um metacaracter teve que utilizar o metacaracter "\" antes dele.
//"\" é um meta caracter de esquepe, serve para informar que na expressão "\.", o "." não é um metacaracter e sim o caracter "."
const regexPonto = /\./g;
console.log(texto.split(regexPonto));

//Divide o texto em uma array separada por "," ou "." ou "?" ou "!" ou " "
const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));