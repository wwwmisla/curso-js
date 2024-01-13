const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    //tagCriada.innerHTML = texto; forma 01
    //tagCriada.innerText = texto; forma 2

    let textoCriado = document.createTextNode(texto); // forma 3
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    // console.log(tag, texto);
}

container.appendChild(div);
