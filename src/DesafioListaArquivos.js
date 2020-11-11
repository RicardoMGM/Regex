const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3';

//Mostra todas as ocorrências de .mp3 na listagem
console.log(texto.match(/\.mp3/g));

//Mostra os nomes dos arquivos mp3
// \w -> pega os caracteres
// + -> metacaracter que faz a junção
// \.mp3 -> busca sequência .mp3
console.log(texto.match(/\w+\.mp3/g));