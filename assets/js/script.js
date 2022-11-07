const entradaTarefa = document.querySelector('#input-tarefas')
const btnAddTarefa = document.querySelector('.btn-add')
const listTarefas = document.querySelector('.card-tarefas')

function AddTarefas() {
    let divTarefas = document.createElement('div')

    let checkBoxTarefas = document.createElement('input');
    checkBoxTarefas.setAttribute('type', 'checkbox');
    divTarefas.append(checkBoxTarefas);

    let spanTarefas = document.createElement('span')
    divTarefas.append(spanTarefas)

    spanTarefas.innerText = entradaTarefa.value
    entradaTarefa.value = ''

    let deletarTarefas = document.createElement('img')
    deletarTarefas.setAttribute('src', './assets/img/icon-delete.png')
    deletarTarefas.setAttribute('width', '20px')
    divTarefas.append(deletarTarefas)

    listTarefas.prepend(divTarefas)
}

btnAddTarefa.addEventListener('click', AddTarefas)