/*
Misla Wislaine tem 20 anos, pesa 50 kg
tem 1.6 de altura e seu IMC é de 25.925925925925924
Misla nasceu em 2003
*/

const nome = 'Misla';
const sobrenome = 'Wislaine';
const idade = 20;
const peso = 50;
const altura = 1.60; // Altura em M
let imc = peso / (altura * altura); // Indice de Massa Corporal
let anoNascimento = 2023 - idade;

// + 
// template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);