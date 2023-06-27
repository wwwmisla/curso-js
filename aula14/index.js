let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
    varA = 'B';
    varB = 'C';
    varC = 'A';
*/

/*
varA = varB; // B
varB = varC; // C
varC = varA; // B
*/

/* Solução
const varATemp = varA;
varA = varB; // B
varB = varC; // C
varC = varATemp; // A
*/

// Solução moderna 
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);