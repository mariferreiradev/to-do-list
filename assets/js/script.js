const entradaTarefa = document.querySelector('#input-tarefas')
const btnAddTarefa = document.querySelector('.btn-add')
const listTarefas = document.querySelector('.card-tarefas')

function addTarefas() {
    const estadoCheckbox = false
    const tarefa = entradaTarefa.value

    addTarefaNaDom(estadoCheckbox, tarefa)
    entradaTarefa.value = ''
}

function addTarefaNaDom(estadoCheckbox, tarefa) {
    let divTarefas = document.createElement('div')

    let checkBoxTarefas = document.createElement('input');
    checkBoxTarefas.setAttribute('type', 'checkbox');
    if (estadoCheckbox) {
        checkBoxTarefas.setAttribute('checked', true)
    }
    divTarefas.append(checkBoxTarefas);

    let spanTarefas = document.createElement('span')
    spanTarefas.innerText = tarefa
    divTarefas.append(spanTarefas)

    let imgLixeira = document.createElement('img')
    imgLixeira.setAttribute('src', './assets/img/icon-delete.png')
    imgLixeira.setAttribute('width', '20px')
    imgLixeira.addEventListener('click', deletarTarefas)
    divTarefas.append(imgLixeira)

    listTarefas.prepend(divTarefas)
}

function deletarTarefas (e) {
    listTarefas.removeChild(e.target.parentElement)
}

btnAddTarefa.addEventListener('click', addTarefas)
