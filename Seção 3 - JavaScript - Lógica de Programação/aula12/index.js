// ... rest, ... spread
//                    0             1           2
//                 0   1   2    0   1  2    0  1  2
const numeros = [ [1 , 2 , 3], [4 , 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]);

const [,[,,seis]] = numeros;
console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista3);
console.log(lista3[2]);