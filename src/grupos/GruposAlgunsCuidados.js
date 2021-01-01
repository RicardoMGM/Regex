const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

// Dentro de um conjunto "[]", o grupo não existe "()"
console.log(texto.match(/[(abc)]/gi)) // não é um grupo
// O conjunto já existe dentro de um grupo
console.log(texto.match(/([abc])/gi))
// Evite de usar grupo de forma desnecessário no caso só para pegar a sequencia abc, não precisava criar um grupo.
console.log(texto.match(/(abc)+/gi))
