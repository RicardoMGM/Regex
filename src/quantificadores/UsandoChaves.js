const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir uma quantificador usa {}
// Pega com um ou dois dígitos
console.log(texto.match(/\d{1,2}/g))
// Pega só os dígitos de 2 posições
console.log(texto.match(/[0-9]{2}/g))
// Como não definiu o valór após a vírgula ele vai pegar o máximo de caractéres possível
console.log(texto.match(/\d{1,}/g))

// Pega com exatamente 7 digitos
// \w -> trabalha com os grupos do short hand
console.log(texto.match(/\w{7}/g))
console.log(texto.match(/[\wõã]{7,}/g))

// no futuro...
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))
