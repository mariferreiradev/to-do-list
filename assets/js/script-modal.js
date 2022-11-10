const modalAddTarefas = document.querySelector('.tela-modal')
const inputModal = document.querySelector('#input-tarefas')
const btnAddTarefasModal = document.querySelectorAll('.btn-add-tarefas')
const btnaddModal = document.querySelector('.btn-add')
const btnSairModal = document.querySelector('.btn-sair')
const spanModal = document.querySelector ('.alerta-add-tarefa')

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
        spanModal.innerHTML = "Tarefa adicionada!"
        inputModal.value = ''
    }
}

function removerModal() {
    modalAddTarefas.classList.add('hidden')
    spanModal.classList.add('hidden')
}

loopBtnAddTarefasModal()

btnSairModal.addEventListener('click', removerModal)
btnaddModal.addEventListener('click', mostrarSpan)
