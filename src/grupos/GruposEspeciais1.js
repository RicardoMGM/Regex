const texto = 'João é calmo, mas no transito fica nervoso.'

// À-ú -> pega todas as letras acentuadas
console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead
// +(?=,) -> pega a palavra que tem uma "," na frente
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
// +(?=\.) -> pega a palavra que tem um "." na frente
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
// +(?=, mas) -> pega a palavra que tem um "mas" na frente
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead
// \b -> Borda
// (?!,) -> paralvras que não estejam na frente de ","
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
// "[\s|\.]" Que tenha um espaço ou ponto depois da palavra
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
