let total=100
let tipPercent=undefined

let tipFunction = function(total, tipPercent = .1) {
    return `A tip of ${tipPercent*100}% on Rs.${total} would be Rs.${total*tipPercent}`
}

let toPay = tipFunction(total,tipPercent)
console.log(toPay)
let age =4
console.log(`Hey my age is ${age}`)