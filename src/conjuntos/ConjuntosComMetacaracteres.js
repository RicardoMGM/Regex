const texto = '.$+*?-';

// A maioria dos metacaracteres dentro de um conjuto funcionam como um literal.
// Não sendo necessário utilizar o escape "\".
console.log(texto.match(/[+.?*$]./g));

// O metacarater "-" (range), precisa do metacaracter "\" scape, para informar 
// que é um literal. A não ser quando ele é o primero caracter dentro do grupo "[]"
// nesse caso não precisa do scape "\", ele é interpretado como um literal.
console.log(texto.match(/[$-?]/g));
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

// Metacaracteres que podem precisar do scape "\" dentro de um conjunto
// Eles são: - [ ] ^
