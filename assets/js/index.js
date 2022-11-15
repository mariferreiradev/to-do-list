import { salvarTarefa } from './local-storage.js'

const modalAddTarefas = document.querySelector('.tela-modal')
const inputModal = document.querySelector('#input-tarefas')
const btnAddTarefasModal = document.querySelectorAll('.btn-add-tarefas')
const btnaddModal = document.querySelector('.btn-add')
const btnSairModal = document.querySelector('.btn-sair')
const spanModal = document.querySelector ('.alerta-add-tarefa')
const btnIrParaTarefas = document.querySelectorAll('.btn-tarefas')
const body = document.querySelector('body')

let chaveTarefa

function loopBtnIrParaTarefas () {
    btnIrParaTarefas.forEach((btnIrParaTarefas) => {
        btnIrParaTarefas.addEventListener('click', separarPaginas)
    });
}

function loopBtnAddTarefasModal() {
    btnAddTarefasModal.forEach((btnAddTarefasModal) => {
        btnAddTarefasModal.addEventListener('click', addTarefasModal)
    });
}

function addTarefasModal(e) {
    window.scrollTo(0,0)
    body.style.overflow = 'hidden'
    modalAddTarefas.classList.remove('hidden')
    const pagAtual = e.target.dataset.pagina
    if(pagAtual === 'pag-um') {
        chaveTarefa = 'tarefasCurtoPrazo'
    } else if(pagAtual === 'pag-dois') {
        chaveTarefa = 'tarefasMedioPrazo'
    } else if(pagAtual === 'pag-tres') {
        chaveTarefa = 'tarefasLongoPrazo'
    }
}

function mostrarSpan() {
    if (inputModal.value === '') {
        spanModal.classList.remove('hidden')
        spanModal.innerHTML = "Digite uma tarefa!"
        inputModal.value = ''
    } else {
        spanModal.classList.remove('hidden')
        salvarTarefa(false, inputModal.value, chaveTarefa)
        spanModal.innerHTML = "Tarefa adicionada!"
        inputModal.value = ''
    }
}

function removerModal() {
    modalAddTarefas.classList.add('hidden')
    spanModal.classList.add('hidden')
    body.style.overflow = 'initial'
}

function separarPaginas(e) {
    const pagina = e.target.dataset.pagina
    localStorage.setItem ('paginaAtual', pagina)
}

loopBtnIrParaTarefas()
loopBtnAddTarefasModal()

btnSairModal.addEventListener('click', removerModal)
btnaddModal.addEventListener('click', mostrarSpan)
