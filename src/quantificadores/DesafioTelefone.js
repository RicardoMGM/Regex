const texto = `
Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    - (85) 99988-7766
    - (21)3261-8899
`
// () -> são meta caracteres por isso tem que usar o scape
// Os parenteses são opcionais por isso tem que utilizar o metacaracter "?"
// O ddd após o ")" é opcional por isso no espaço "\s" utilizo o "?" para informar que é opcional
// Os dígitos dentro dos "()" vai de 0 até 2 porque o ddd é pcional
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))
