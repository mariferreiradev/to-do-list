function salvarTarefa(estadoCheckbox, tarefa, chaveTarefa) {
    const tarefas = localStorage.getItem(chaveTarefa) ?? ''
    if(tarefas) {
        const novasTarefas = `${tarefas}@@@${estadoCheckbox}%%%${tarefa}`
        localStorage.setItem(chaveTarefa, novasTarefas)
    } else {
        const novasTarefas = `${estadoCheckbox}%%%${tarefa}`
        localStorage.setItem(chaveTarefa, novasTarefas)     
    }
}

export { salvarTarefa }