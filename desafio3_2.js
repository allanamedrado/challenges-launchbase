const users = [
  {
    name: "Salvio",
    income: [115.3, 48.7, 98.3, 14.5],
    expense: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    income: [24.6, 214.3, 45.3],
    expense: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    income: [9.8, 120.3, 340.2, 45.3],
    expense: [450.2, 29.9]
  }
];

function calculateBalance(income, expense) {
  let balance 
 
  let balanceIncome = sumNumbers(income)
  let balanceExpense = sumNumbers(expense)

  balance = balanceIncome - balanceExpense
  return balance
}  

function sumNumbers(numbers){
  let sum = 0
  for (const number of numbers) {
    sum += number
  }

  return sum
}


for (const user of users) {
  let balance = calculateBalance(user.income, user.expense)

  if (balance > 0){
  console.log(`${user.name} have balance POSITIVE of ${balance}`)
  } else if (balance == 0){
    console.log(`${user.name} have balance ZERO`)
  } else {
    console.log(`${user.name} have balance NEGATIVE of ${balance}`)
  }
}


