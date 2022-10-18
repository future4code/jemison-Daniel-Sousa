//Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const newTasks = process.argv[2];

const todoList = [
    'Estudar matematica'
]


function addNewTasks (tasksNew){
    const newToDoList = [...todoList, tasksNew]
    return newToDoList
}

console.log(addNewTasks(newTasks))