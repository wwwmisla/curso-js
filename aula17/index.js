// Padrão para precisão dos números: IEEE 754-2008
let num1 = 10; // number
let num2 = 2.5; // number
let num3 = 1; // number
let num4 = 2.55455404040245; // number

/* 

console.log(num1.toString() + num2);
// num1 = num1.toString(); // transforma em string para sempre
console.log(typeof num1);

console.log(num1.toString(2)); // representação binaria

console.log(num4.toFixed(2)); // para ter uma precisão maior dos números

console.log(Number.isInteger(num4)); // verifica se o número é um inteiro
console.log(Number.isInteger(num1));

let temp = num1 * 'Ola'; 
console.log(Number.isNaN(temp)); // verifica se é um número

let temp = num1 + '5';

console.log(Number.isNaN(temp));

let num5 = 0.7;
let num6 = 0.1;

num5 += num6; // 0.8
num5 += num6; // 0.9
num5 += num6; // 1.0
num5 += num6; // 1.1
num5 += num6; // 1.2
num5 += num6; // 1.3
num5 += num6; // 1.4
num5 += num6; // 1.5
num5 += num6; // 1.6
num5 += num6; // 1.7
num5 += num6; // 1.8
num5 += num6; // 1.9
num5 += num6; // 2.0

// num5 = num5.toFixed(2); // forma errada

num5 = parseFloat(num5.toFixed(2)); // pode ser usado o Number(num5.toFixed(2))
console.log(num5);
console.log(Number.isInteger(num5));
*/

let num7 = 0.7;
let num8 = 0.1;

num7 = ((num7 * 100 ) + (num8 * 100)) / 100; // 0.8
num7 = ((num7 * 100 ) + (num8 * 100)) / 100; // 0.9
num7 = ((num7 * 100 ) + (num8 * 100)) / 100; // 1.0

console.log(num7);
console.log(Number.isInteger(num7));
