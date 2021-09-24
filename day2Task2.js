const cars =[

{
  make: "Tesla",
  model: "Model3",
  color: "red",
},
{
  make: "Honda",
  model: "Accord",
  color: "black",
},
{
  make: "Ford",
  model: "Edge",
  color: "blue",
},
{
  make: "Audi",
  model: "Q7",
  color: "white",
},
]
function carName(car) {
  const carMakeModel = car.make + " " + car.model
  console.log(carMakeModel)
}
for(i=0; i<cars.length; i++) {
  carName(cars[i])
}
