const account = {
    name: 'Parv Garg',
    expenses: [],
    addExpense: function(description,amount){
        this.expenses.push({
            description: description,
            amount: amount
        })},
    getAccountSummary: function() {
        let totalExpenses = 0, totalIncome=0   
        for(count = 0; count < account.expenses.length; count++){
            totalExpenses+= account.expenses[count].amount
        }
        for(count = 0; count < account.income.length; count++){
            totalIncome+= account.income[count].amount
        }
        return `${account.name} has balance of $${totalIncome - totalExpenses}. Income of ${totalIncome}, and Expense of ${totalExpenses}`
        },
    income: [],
    addIncome: function(description,amount){
        this.income.push({
            description: description,
            amount: amount
        })
    } 
}
//Expenses -> description, amount 
// addExpense -> description, amount 
//getAcoountSummary -> Total up all the expenses -> Parv Garg has $XXXX in expenses. 

account.addIncome('programming',1000)
account.addIncome('part time', 500)
account.addExpense('Rent', 950)
account.addExpense('Romance', 30)

// console.log(account)
console.log(account.getAccountSummary())