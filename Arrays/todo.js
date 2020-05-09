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
{
// const deleteTodos = function(todos, x)
// {
//     for(let count=0; count < todos.length; count++)
//     {
//         if (todos[count].text.toLowerCase() === x)
//         {
//             console.log(count)
//             todos.splice(count,count)
//         }
//     }
// }

// deleteTodos(todos,'buy food')
}
{
// const getThinsgToDo = function(todos){
//     return todos.filter(function (todo){
//         return !todo.completed
//     })
// }

// console.log(getThinsgToDo(todos))
}

const sorttodos= function (todos){
    return todos.sort( function(a,b)
    {
        if (a.completed === true && b.completed === false)
        {
            return 1
        }
        else if (a.completed === false && b.completed === true){
            return -1
        }
        else{
            return 0
        }
    })
}
console.log(sorttodos(todos))
