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

export { salvarTarefa }