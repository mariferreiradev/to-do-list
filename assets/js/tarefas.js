import { salvarTarefa } from './local-storage.js'

const entradaTarefa = document.querySelector('#input-tarefas')
const btnAddTarefa = document.querySelector('.btn-add')
const listTarefas = document.querySelector('.card-tarefas')

let chaveTarefa = 'tarefasCurtoPrazo'

function addTarefas() {
    const estadoCheckbox = false
    const tarefa = entradaTarefa.value

    addTarefaNaDom(estadoCheckbox, tarefa)
    salvarTarefa(estadoCheckbox, tarefa, chaveTarefa)
    entradaTarefa.value = ''
}

function addTarefaNaDom(estadoCheckbox, tarefa) {
    let divTarefas = document.createElement('div')

    let checkBoxTarefas = document.createElement('input');
    checkBoxTarefas.setAttribute('type', 'checkbox');
    if (estadoCheckbox) {
        checkBoxTarefas.setAttribute('checked', true)
    }
    checkBoxTarefas.addEventListener('change', atualizarTarefas)
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
    const tarefaParaRemover = e.target.parentElement
    listTarefas.removeChild(tarefaParaRemover)
    const texto = tarefaParaRemover.querySelector('span').innerText
    const estado = tarefaParaRemover.querySelector('input').checked
    const tarefas = localStorage.getItem(chaveTarefa)
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
    localStorage.setItem(chaveTarefa, tarefasFiltradasString)
}

function carregarTarefas() {
    const tarefas = localStorage.getItem(chaveTarefa)
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

function atualizarTarefas(e) {
    const tarefaParaEditar = e.target.parentElement
    const texto = tarefaParaEditar.querySelector('span').innerText
    const estado = tarefaParaEditar.querySelector('input').checked
    const tarefas = localStorage.getItem(chaveTarefa)
    if (!tarefas){
        return
    }
    const tarefasArray = tarefas.split('@@@')
    const tarefasEditadas = tarefasArray.map((tarefa) => {
        const [estadoAtualString, textoAtual] = tarefa.split('%%%')

        if(texto === textoAtual) {
            return `${estado}%%%${texto}`
        }
        return tarefa
    })
    const tarefasEditadasString = tarefasEditadas.join('@@@')
    localStorage.setItem(chaveTarefa, tarefasEditadasString)
}

function paginasLocalStorage() {
    const pagAtual = localStorage.getItem('paginaAtual')
    if(pagAtual === 'pag-um') {
        chaveTarefa = 'tarefasCurtoPrazo'
    } else if(pagAtual === 'pag-dois') {
        chaveTarefa = 'tarefasMedioPrazo'
    } else if(pagAtual === 'pag-tres') {
        chaveTarefa = 'tarefasLongoPrazo'
    }  
}

btnAddTarefa.addEventListener('click', addTarefas)

paginasLocalStorage()
carregarTarefas()

