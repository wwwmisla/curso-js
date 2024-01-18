/* 
- inserir tarefa - ok 
- deletar uma tarefa - ok
- deletar todas as tarefas - 
- marcar como concluída - 
- editar - 
- limitar quantidade de tarefa - 
- não pode repetir o nome - 
- não pode enviar vazio - ok
- enviar pelo enter - ok
*/

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const btnApagarTudo = document.querySelector('.btn-del-all');
const tarefas = document.querySelector('.tarefas');

// Cria elemento li
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Add tarefa com o enter
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) {
            inputTarefa.style.border = '1px solid red';
            alert('Digite algo para inserir na sua lista de tarefas!');

            return;
        }
        
        criaTarefa(inputTarefa.value);
    }
});

// Limpa input depois que uma tarefa é enviada
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Criação do botão apagar
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa.');
    li.appendChild(botaoApagar);

}

// Criação de uma nova tarefa
function criaTarefa(textoInput) {
    inputTarefa.style.border = '2px solid var(--color-black)';

    const li = criaLi();
    li.innerText = textoInput;
    li.setAttribute('class', 'li');
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) {
        inputTarefa.style.border = '1px solid red';
        alert('Digite algo para inserir na sua lista de tarefas!');

        return ;
    }
    
    criaTarefa(inputTarefa.value);
});

// Apagar tarefa
document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }   

});

// Salvar tarefas no localStorage
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;

        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();

        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);    
    }
}

adicionaTarefasSalvas();