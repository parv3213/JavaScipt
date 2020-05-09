//challange 

//lenght more than 8 and doen't contain 'password'

isValidPassword= function(arg){
    console.log(arg)
    return (arg.length>8 && !arg.includes('password'))
}

console.log(isValidPassword("abc"))
console.log(isValidPassword("abcdef231esssssd"))
console.log(isValidPassword("abcdef231essdpassword"))    
