let items = [67,99,5,2]
 

function enqueue (arr,number) {

   arr.push(number)
}

enqueue(items,4)

console.log(items)

function dequeue (arr) {

  arr.shift()
}
dequeue(items)

console.log(items)
