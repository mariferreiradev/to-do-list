const modalAddTarefas = document.querySelector('.tela-modal')
const btnAddModal = document.querySelector('.btn-add-tarefas')
const btnaddTarefasModal = document.querySelector('.btn-add')
const btnSairModal = document.querySelector('.btn-sair')
const spanModal = document.querySelector ('.alerta-add-tarefa')

function addTarefasModal() {
    modalAddTarefas.classList.remove('hidden')
}

function mostrarSpan() {
    spanModal.classList.remove('hidden')
}

function removerModal() {
    modalAddTarefas.classList.add('hidden')
    spanModal.classList.add('hidden')
}

btnAddModal.addEventListener('click', addTarefasModal)
btnaddTarefasModal.addEventListener('click', mostrarSpan)
btnSairModal.addEventListener('click', removerModal)