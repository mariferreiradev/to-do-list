const modalAddTarefas = document.querySelector('.tela-modal')
const btnAddModal = document.querySelector('.btn-add-tarefas')
const btnaddTarefasModal = document.querySelector('.btn-add')
const spanModal = document.querySelector ('.alerta-add-tarefa')

function addTarefasModal() {
    modalAddTarefas.classList.remove('hidden')
}

function mostrarSpan() {
    spanModal.classList.remove('hidden')
}

btnAddModal.addEventListener('click', addTarefasModal)
btnaddTarefasModal.addEventListener('click', mostrarSpan)