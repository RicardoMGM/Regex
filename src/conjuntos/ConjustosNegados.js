
const texto = '1,2,3,a.b c!d?e[f'

// \D -> Pega tudo que não é digito
console.log(texto.match(/\D/g))

// ^ -> Dentro de um conjunto, nega tudo expecificado dentro do conjunto 
console.log(texto.match(/[^0-9]/g))

// Apresenta apenas as letras
console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

// Lembre se que o "-" dentro de um conjunto significa intervalo dentro da tabela unicode.
console.log(texto2.match(/[^!-/:-@\s]/g))