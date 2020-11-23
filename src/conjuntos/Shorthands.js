// Shorthands, forma reduzida para atalhos de grupos de caracters

const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

console.log(texto.match(/\d/g)) // números
console.log(texto.match(/\D/g)) // não números [^0-9]

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espaços [ \t\n\r\f]
console.log(texto.match(/\S/g)) // não espaços [^ \t\n\r\f]
