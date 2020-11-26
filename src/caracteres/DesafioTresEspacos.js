const texto = 'a   b';

// Busca a sequencia do testo apenas repetindo o conteúdo
console.log(texto.match(/a   b/));

// Outra forma de buscar o mesmo conteúdo é usando o metacaracter "\s"
// \s -> representa espaço de forma literal
console.log(texto.match(/a\s\s\sb/));

// Outra forma de buscar o mesmo conteúdo é utilizando o metadadado "+", após o metacaracter "\s"
// \s -> representa espaço
// + -> represente que pode ter repetição do caracter anterior informado, no caso o espaço "\s"
console.log(texto.match(/a\s+b/));


// Outra forma de buscar a mesma sequencia, utilizando o quantificador "{3}" para o metacaracter "\s"
// \s -> representa espaço
// {3} -> representa a quantidade de vezes que o caracter anterior irá repetir, no caso o metacaracter "\s" vai repetir 3 vezes
console.log(texto.match(/a {3}b/));

// Outra forma de buscar a mesma sequencia, utilizando o quantificador "{3}"
// {3} -> representa a quantidade de vezes que o caracter anterior irá repetir, no caso o espaço vai repetir 3 vezes
console.log(texto.match(/a\s{3}b/));