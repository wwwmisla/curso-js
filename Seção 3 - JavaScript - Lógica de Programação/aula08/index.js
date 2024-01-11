const data = new Date();
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data02 = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix - valor em milisegundos
console.log(data02.toString());

const data03 = new Date(2024, 0, 10, 7, 15, 23); // 0-11 mes - a,m,d,h,M,s,ms
console.log(data03.toString());

const data04 = new Date('2024-01-10 23:04:59'); //formato mais utilizado
console.log(data04.toString());