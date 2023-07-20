const todoList = []
const todoListTwo = []

renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    for (let i = 0; i < todoListTwo.length; i++) {
        const { name, date } = todoListTwo[i]
        const html = `
        <p>
            ${name} ${date}
            <button onclick="todoListTwo.splice(${i},1); renderTodoList()">Delete</button>
        </p>`
        todoListHTML += html
    }

    document.querySelector('.js-todoList')
        .innerHTML = todoListHTML
}

function addTodo() {
    const inputEl = document.querySelector('.js-input')
    const name = inputEl.value

    todoList.push(name)

    inputEl.value = ''
}

function addTodoTwo() {
    const inputEl = document.querySelector('.js-inputs')
    const dateEl = document.querySelector('.js-date')
    const name = inputEl.value
    const date = dateEl.value

    todoListTwo.push({name, date})

    inputEl.value = ''
    renderTodoList()
}