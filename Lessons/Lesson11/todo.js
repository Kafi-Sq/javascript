const todoList = []
const todoListTwo = []

renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    for (let i = 0; i < todoListTwo.length; i++) {
        const todo = todoListTwo[i]
        const html = `<p>${todo}</p>`
        todoListHTML += html
    }

    document.querySelector('.js-todoList')
        .innerHTML = todoListHTML
}

function addTodo() {
    const inputEl = document.querySelector('.js-input')
    const name = inputEl.value

    todoList.push(name)
    console.log(todoList)

    inputEl.value = ''
}

function addTodoTwo() {
    const inputEl = document.querySelector('.js-inputs')
    const name = inputEl.value

    todoListTwo.push(name)
    console.log(todoListTwo)

    inputEl.value = ''
    renderTodoList()
}