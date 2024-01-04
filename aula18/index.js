let num1 = 9.54578;
let num2 = Math.floor(num1); 
// arredonda pra baixo
let num3 = Math.ceil(num1);
// arredonda pra cima
let num4 = Math.round(num1);
// arredonda pro mais próximo 

console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1,2,3,4,5,6,7,8,9,10,1000));
// maior número
console.log(Math.min(1,2,3,4,5,6,7,8,9,10,1000));
//menor número

console.log(Math.random());
//gera número aleatório

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
//gera número aleatório entre 10 e 5 sem casas decimais
console.log(aleatorio);

// PI, pow
console.log(Math.PI);
console.log(Math.pow(2,10));
console.log(2 ** 10);

//descobrir raiz quadrada
let num5 = 9;
console.log(num5 ** (1/2));
console.log(num5 ** 0.5);

console.log(100 / 0);
//em algumas linguagens gera erro, mas aqui não (gera um infinity e é true)