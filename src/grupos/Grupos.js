const texto1 = 'O José Simão é muito engraçado... hehehehehehe'

// + -> Pega um ou mais "he"
console.log(texto1.match(/(he)+/g))

// ? -> opcional
const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
