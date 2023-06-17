let nome = 'João'; // String

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

//

let sobrenome; // Declarou a variável
sobrenome = 'Alves'; // Inicializando a variável
console.log(sobrenome);
sobrenome = 'Silva';
console.log(sobrenome);
// let sobrenome; // Erro quando a variável já foi declarada

// Não podemos criar variáveis com palavras reservadas, por exemplo: let if;
// Variáveis precisam ter nomes significativos 
let nomeCliente = 'Maria';
console.log(nomeCliente);

// Não pode começar o nome de uma variável com um número, começar com letras minusculas 
// Não podem conter espaços ou traços (-)
// Utilizamos camelCase
let nomeCompletoDoCliente = 'Maria Alves';
console.log(nomeCompletoDoCliente);
// Case-sensitive 
let nomeDoCliente = 'Mario';
let nomedocliente = 'Mario';
console.log(nomeDoCliente, nomedocliente);

// Não podemos redeclarar variáveis com let
// NÃO UTILIZAR VAR, UTILIZAR LET PARA COISAS QUE IRÃO VARIAR.