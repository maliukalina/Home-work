/*function halfPyramid(height){
for (i=0; i<height; i++){
  let row = ""
  for(j=0; j<=i; j++) {
  row += "#"
  }
console.log(row)
}
}

halfPyramid(5)*/


function halfPyramid(height) {

  let str = ""

  for(i=0; i<height;i++) {
    str=str.concat("#")
    console.log(str)
  }
}
halfPyramid(5)
