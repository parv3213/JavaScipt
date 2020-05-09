const todos = [
    {
        text: 'Order cat food', 
        completed: true
    },
    {
         text: 'Clean kitchen',
         completed: false
    }, 
    {
        text: 'Buy food',
        completed: true
    }, 
     {
        text: 'Do work',
        completed: false
    },
        {
            text:'Exercise',
            completed: true
        }
]

//filter
const filters = {
    searchText: '',
    hideCompleted: false
}

//render todos  
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        let a= todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        if (filters.hideCompleted === true){
            b = !todo.completed
            return a && b 
        }
        return a
    })
    
    //fitering the incompleted
    const incompletedTodos = filteredTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML=''
    //Summary
    const todosSummary = document.createElement('h2')
    todosSummary.textContent = `You have ${incompletedTodos.length} todos remaining`
    document.querySelector('#todos').appendChild(todosSummary)
    //for empty filteredTodos
    let x= filteredTodos.length
    if (x === 0 ){
        const todoWrite = document.createElement('p')
        todoWrite.textContent = "Element not found"
        document.querySelector('#todos').appendChild(todoWrite)
    }
    // appending todos 
    filteredTodos.forEach(function(todo)
    {
        const todoWrite = document.createElement('p')
        todoWrite.textContent = todo.text
        document.querySelector('#todos').appendChild(todoWrite)    
    })    
}

//call rendertodos
renderTodos(todos,filters)  

// search to filter
document.querySelector('#search-todo').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})
//Adding a new todo
document.querySelector("#addNewTodo").addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoName.value,
        completed: false
    })
    e.target.elements.todoName.value = ''
    renderTodos(todos,filters)  
})

//Checkbox for hiding the completed
document.querySelector("#hide-completed").addEventListener('change',function(e){
    filters.hideCompleted= e.target.checked
    renderTodos(todos,filters)
})

