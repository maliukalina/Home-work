const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
 


function trueamount () {
  let trueNumber = 0
  for (i=0; i<testArray.length; i++) {
    if (testArray[i]) {
      trueNumber++
  }
  
  }
  console.log("the number of true values there are", trueNumber)
    
}

trueamount()

