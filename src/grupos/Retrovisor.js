const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
// \1 -> Retrovisor mostra o conteúdo que foi capturado pelo grupo no caso o grupo 1
// .* -> Pega qualquer coisa entre a abertura e fechamento da tag
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
// '$2' -> subistituiu pelo conteúdo do grupo 2
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

const texto3 = 'abcdefghijkll'
// JavaScript suporta mais do que 9 retrovisores
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))
