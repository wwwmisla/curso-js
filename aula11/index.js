/* 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Operadores Aritméticos -> Atribuição e incrementação
 *  + Adição e faz também a concatenação
 *  - Subtração
 *  / Divisão
 *  * Multiplicação e ** Potenciação
 *  % Resto da divisão
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  Precedência dos operadores
 *  1. () 2. ** 3. * / % 4. + - 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  Incremento = ++
 *  Decremento = --
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

const num1 = 5;
const num2 = 10;
console.log('Inicio');
console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log('Fim');

let contador = 1;
console.log('Inicio');
console.log(contador);
console.log(contador++);
console.log(++contador);
console.log(contador);
console.log('Fim');

let contador2 = 10;
console.log('Inicio');
console.log(contador2);
console.log(contador2--);
console.log(--contador2);
console.log(contador2);
console.log('Fim');

// Operadores de atribuição 
let contador3 = 0;

contador3 += 5; // contador3 = contador + 5;
contador3 += 5;
contador3 += 5;
console.log(contador3);

// NaN - Not a number | Conversão -> parseInt(inteiro), parseFloat(decimais), Number()
const valorInicial = 10;
// const valorFinal = '5';
const valorFinal = parseInt('5'); 
console.log(valorInicial + valorFinal);
console.log(typeof valorFinal);