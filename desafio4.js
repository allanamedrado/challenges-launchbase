const user = {
    name: "Allana",
    transactions: [],
    balance: 0
};

function createTransaction({type, value}){
     user.transactions.push({type, value})
     
    if (type == "credit") {
       user.balance += value       
    } else if (type == "debit") {
       user.balance -= value
    } else {
        console.log ("The transaction type isn't valid")
    }
}

function getHigherTransactionByType({type}) {
    let higherTransaction
    let higherValue = 0

    for (const transaction of user.transactions) {
        if(user.transactions.type === type && user.transactions.value > higherValue){
            higherValue = transactions.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
    console.log(higherTransaction)
}

function getAverageTransactionValue() {
    let sum = 0
    for (const transaction of user.transactions) {
        sum += user.transactions.values
    } 
    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        debit: 0,
        credit: 0
    };

    for (const transaction of user.transactions) {
        if(user.transactions.type === 'credit') {
            count.credit++ 
        } else if (user.transactions.type === 'debit') {
            count.debit++
        } else {
            console.log (count)
        }
    }
    return count
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);
console.log(user.transactions)

getHigherTransactionByType({type: "credit"}); 
getHigherTransactionByType({type: "debit"});

getAverageTransactionValue();

getTransactionsCount();
