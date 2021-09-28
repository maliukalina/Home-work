//Functions
function enqueue (arr,number) {
  arr.push(number)
}

function dequeue (arr) {
  arr.shift()
}

//Main code

let items = [67,99,5,2]
console.log("Initial array:", items)
enqueue(items,4)
console.log("Added item to array:", items)
dequeue(items)
console.log("Removed item from array:", items)
