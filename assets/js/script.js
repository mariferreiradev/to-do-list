const entradaTarefa = document.querySelector('#input-tarefas')
const btnAddTarefa = document.querySelector('.btn-add')
const listTarefas = document.querySelector('.card-tarefas')

function addTarefas() {
    const estadoCheckbox = false
    const tarefa = entradaTarefa.value

    addTarefaNaDom(estadoCheckbox, tarefa)
    salvarTarefa(estadoCheckbox, tarefa)
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

function salvarTarefa(estadoCheckbox, tarefa) {
    const tarefas = localStorage.getItem('tarefas') ?? ''
    if(tarefas) {
        const novasTarefas = `${tarefas}@@@${estadoCheckbox}%%%${tarefa}`
        localStorage.setItem('tarefas', novasTarefas)
    } else {
        const novasTarefas = `${estadoCheckbox}%%%${tarefa}`
        localStorage.setItem('tarefas', novasTarefas)     
    }
}

function deletarTarefas (e) {
    const tarefaParaRemover = e.target.parentElement
    listTarefas.removeChild(tarefaParaRemover)
    const texto = tarefaParaRemover.querySelector('span').innerText
    const estado = tarefaParaRemover.querySelector('input').checked
    const tarefas = localStorage.getItem('tarefas')
    if (!tarefas){
        return
    }
    const tarefasArray = tarefas.split('@@@')
    const tarefasFiltradas = tarefasArray.filter((tarefa) => {
        const [estadoAtualString, textoAtual] = tarefa.split('%%%')
        const estadoAtual = estadoAtualString === 'true'
        if (texto !== textoAtual || estado !== estadoAtual) {
            return tarefa
        }
    })
    const tarefasFiltradasString = tarefasFiltradas.join('@@@')
    localStorage.setItem('tarefas', tarefasFiltradasString)
}

function carregarTarefas() {
    const tarefas = localStorage.getItem('tarefas')
    if (!tarefas) {
        return
    }
    const listaTarefas = tarefas.split('@@@')
    listaTarefas.forEach((tarefas) => {
        const [estadoCheckboxString, tarefa] = tarefas.split('%%%')
        const estadoCheckbox = estadoCheckboxString === 'true'
        addTarefaNaDom(estadoCheckbox, tarefa)
    })
}

btnAddTarefa.addEventListener('click', addTarefas)

carregarTarefas()