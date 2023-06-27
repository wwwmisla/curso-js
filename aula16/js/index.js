// Exercícios

const nome = prompt('Digite o seu nome completo:');

/*
window.document.body.innerHTML
window.document.body.innerHTML = 'Escrever'
window.document.body.innerHTML = 'Escrever outra coisa'
document.body.innerHTML += 'Escrever outra coisa'
document.body.innerHTML += 'Escrever outra coisa <br />'
*/

// document.body.innerHTML = `O seu nome é: ${nome}<br />`;
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong>. <br />`; // certo
document.body.innerHTML += `O seu nome tem <strong>${nome.length}</strong> letras. <br />`; // certo
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong>. <br />`; // certo, poderia usar o nome.charAt(1), mas escolhi essa forma mesmo (notação de colchetes)
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <strong>${nome.indexOf('a')}</strong>. <br />`; // certo 
document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong>${nome.lastIndexOf('a')}</strong>. <br />`; // certo 
document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${nome.slice(-3)}</strong>. <br />`; // certo, ${nome.slice(-3, nome.length)}
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>. <br />`; // certo
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong>. <br />`; // certo
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong>. <br />`; // certo