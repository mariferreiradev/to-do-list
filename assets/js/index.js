import { salvarTarefa } from './local-storage.js'

const modalAddTarefas = document.querySelector('.tela-modal')
const inputModal = document.querySelector('#input-tarefas')
const btnAddTarefasModal = document.querySelectorAll('.btn-add-tarefas')
const btnaddModal = document.querySelector('.btn-add')
const btnSairModal = document.querySelector('.btn-sair')
const spanModal = document.querySelector ('.alerta-add-tarefa')
const btnIrParaTarefas = document.querySelectorAll('.btn-tarefas')

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

function addTarefasModal() {
    modalAddTarefas.classList.remove('hidden')
}

function mostrarSpan() {
    if (inputModal.value === '') {
        spanModal.classList.remove('hidden')
        spanModal.innerHTML = "Digite uma tarefa!"
        inputModal.value = ''
    } else {
        spanModal.classList.remove('hidden')
        salvarTarefa(false, inputModal.value)
        spanModal.innerHTML = "Tarefa adicionada!"
        inputModal.value = ''
    }
}

function removerModal() {
    modalAddTarefas.classList.add('hidden')
    spanModal.classList.add('hidden')
}

function separarPaginas(e) {
    const pagina = e.target.dataset.pagina
    localStorage.setItem ('paginaAtual', pagina)
}

loopBtnIrParaTarefas()
loopBtnAddTarefasModal()

btnSairModal.addEventListener('click', removerModal)
btnaddModal.addEventListener('click', mostrarSpan)
