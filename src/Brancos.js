const texto = `
ca	r
r	o s!
`
// Acha o conteúdo do texto
// \t -> Tab
// \n -> retorno de linha / pula linha
// \s -> espaço
console.log(texto.match(/ca\tr\nr\to\ss!/));