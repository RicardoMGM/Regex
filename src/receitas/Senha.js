const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`
// Qualquer caracter entre 6 e 20 caracteres
console.log(texto.match(/^.{6,20}$/gm))
// Verifica se temabém tem alguma letras maiúsculas entre A - Z
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
// Adiciona um segundo grupo de letras minúsculas, verifica também se tem dígitos, e verifica se tem caracteres especiais.
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))
