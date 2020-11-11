const texto = 'Bom\ndia';

// Busca caracter por caracter, o ponto não engloba o metacaracter "\n"
console.log(texto.match(/./gi));

// Busca separando de 3 em 3 caracters porem o metacaracter "." iguinora o metacaracter "\n"
console.log(texto.match(/.../gi));

// Não acha uma sequencia de 4 caracteres por causa do metacaracter "\n" vir na 4 posição
console.log(texto.match(/..../gi));

// O ponto englopa o metacaracter "\t"
// \t -> Tab 
const texto2 = 'Bom\tdia';

//Veja como fica os mesmos exemplos para o metacaracter "\t"
console.log(texto2.match(/./gi));
console.log(texto2.match(/.../gi));
console.log(texto2.match(/..../gi));