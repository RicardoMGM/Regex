const texto = 'supermercado hipermercado minimercado mercado'

// | -> Significa OU . Como tem o "?" depois do grupo esse grupo é opcional
console.log(texto.match(/(super|hiper|mini)?mercado/g))
// A mesda da de cima só para não precisar repetir a parte "per"
console.log(texto.match(/((hi|su)per|mini)?mercado/g))
