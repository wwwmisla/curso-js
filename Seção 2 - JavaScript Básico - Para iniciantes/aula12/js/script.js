/*
    *   ALERT, CONFIRM E PROMPT 
    * window
    * window.alert('Mensagem');
    * window.confirm('Deseja realmente apagar?');
    * window.prompt('Digite o seu nome:');
    * Essas são 'funções'
*/

//alert('Com a nossa mensagem.');

// confirm('Deseja realmente apagar?');

// prompt('Digite o seu nome:');

let confirma = confirm('Qualquer mensagem');

console.log(confirma);
//confirma

let num1 = prompt('Digite um número');

console.log(num1);
// num1

let num2 = prompt('Digite outro número');

console.log(num2);
// num2

console.log(num1 + num2);

console.log(typeof num1, typeof num2);

num1 = parseInt(num1);
num2 = parseInt(num2);

console.log(num1 + num2);

console.log(typeof num1, typeof num2);