let myAccount ={
    name: "Parv Garg",
    income: 0,
    expense: 0
}

let addIncome= function(account){
    income=100
    account.income+=income
}

let addExpense= function(account)
{
    expense = 50
    account.expense+=expense
}

let resent= function(account)
{
    account.income=0
    account.expense=0
}

let accountSummary = function(account) {
    console.log(`Account for ${account.name} has $${account.income-account.expense}. $${account.income} in income and $${account.expense} as expense`)
}
addIncome(myAccount)
addExpense(myAccount)
console.log(myAccount)
accountSummary(myAccount)
resent(myAccount)
console.log(myAccount)
