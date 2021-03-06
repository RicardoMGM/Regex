# Regex
Projeto para aprender os conceitos básicos de expressões regulares (Regex).

## Pré requisitos
<ul>
<li>Instale o Node JS</li>
<li>Visual Studio Code</li>
<li>Extensão: "Code Runner" instalada no Visual Studio Code</li>
</ul>

## Execução
<ul>
  <li>O conteúdo está separado por aquivo dentro da pasta src.</li>
  <li>Em cada arquivo, tem comentários explicando o conteúdo.</li>
  <li>Basta executar individualmente cada arquivo, para ver o resultado da aplicação do regex referente ao conteúdo.</li> 
</ul>

## Metacaracteres

### Representantes

meta   | mnemônico      | função
-------|----------------|----------------------------------------
.      | ponto          | um caractere qualquer
[...]  | lista          | lista de caracteres permitidos
[^...] | lista negada   | lista de caracteres proibidos

### Quantificadores

|meta   | mnemônico      | função
|-------|----------------|----------------------------------------
|?      | opcional       | zero ou um
|*      | asterisco      | zero, um ou mais
|+      | mais           | um ou mais
|{n,m}  | chaves         | de n até m

### Âncoras

meta   | mnemônico      | função
-------|----------------|----------------------------------------
^      | circunflexo    | início da linha
$      | cifrão         | fim da linha
\b     | borda          | início ou fim de palavra

### Outros

|meta    | mnemônico      | função
|--------|----------------|----------------------------------------
|\c      | escape         | torna literal o caractere c
|\|      | ou             | ou um ou outro
|(...)   | grupo          | delimita um grupo
|\1...\9 | retrovisor     | texto casado nos grupos 1...9

## Tabela Unicode
https://unicode-table.com/pt/

## Bibliografia
Projeto criado com base no curso de "Fundamentos de Expressões Regulares (Regex)", do professor: Leonardo Moura Leitao.
https://www.udemy.com/course/curso-regex
