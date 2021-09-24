function totalAmountOfMoney (checking, saving) {
  const total = checking + saving
  return total 
}
let myBalance = totalAmountOfMoney(3000, 5000)
console.log(`Total amount of money on your account is  $ ${myBalance}`)