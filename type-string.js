const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const superSenha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao1 = "O Leo disse 'oi!'"
const citacao2 = "Meu nome é ";
const meuNome = "Leonardo";

console.log(citacao1)

// concatenação (+)

console.log(citacao2 + meuNome)

//template string OU template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// comparaçao

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// comparaçao com conversao para caracteres minusculos

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

// contagem de caracteres em uma string

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
