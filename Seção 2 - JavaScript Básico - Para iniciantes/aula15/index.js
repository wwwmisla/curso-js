// Mais sobres strings

/*
Srings são indexadas, ou seja, 01234567
let umaString = "Um \"texto\"";
let umaString = "Um \\texto";

console.log(umaString);
*/

// Pegando o elemento pelo index
let nome = 'Wislaine';

console.log(nome[2]);

// CharAt()
console.log(nome.charAt(2));

// Concat()
console.log(nome.concat(' ', 'Alves', ' da ', 'Silva')); // concat
console.log(nome + ' Alves da Silva'); 
console.log(`${nome} Alves da Silva`); // template strings

// IndexOf()
const nomeCompleto = 'Misla Wislaine';
console.log(nomeCompleto.indexOf('Wislaine'));

// LastIndexOf()
console.log(nomeCompleto.lastIndexOf('Wislaine'));

// Expressão regular
console.log(nomeCompleto.match(/[a-z]/g));
console.log(nomeCompleto.search(/s/));
console.log(nomeCompleto.replace('Misla', 'Wislaine'));
const rima = 'O rato roeu a roupa do rei de roma.';
console.log(rima.replace(/r/g, '#'));
console.log(rima.length);
console.log(rima.slice(2, 6));
// console.log(rima.slice(-3)); mesma coisa que 32 pois seria -> console.log(rima.length - 3);
console.log(rima.slice(-5));
console.log(rima.slice(-5, -1));
console.log(rima.substring(rima.length -5, rima.length -1));
console.log(rima.split(' ', 2));
console.log(rima.split(' '));
console.log(rima.toUpperCase());
console.log(rima.toLowerCase());

