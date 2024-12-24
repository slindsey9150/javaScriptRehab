// here we'll practice some object methods

console.log("this is where we'll practice objects");

let me = { 
myFName : "Logan",
myLName : "Lindsey",
myCity : "Minneapolis",
myState : "Minnesota"
}

let person1 = {
    fName : "John",
    lName : "Doe",
    age : 50,
    address : "123 spruce"
}

let person2 = {
    fName : "Jane",
    lName : "Doe",
}
// Using Object.assign
console.log("object assign", Object.assign(person1, person2));
// ! The second object gets the values from the first object that it doesn't already have.


// Using object.entries
let person3 = {
    fName : "Giiwedin",
    lName : "Bitch",
    age : "old",
    address : "3267 hell street",
    hairColor : "African American",
    eyeColor : "latinx",
}
let person3info = Object.entries(person3)
console.log("using Object.entries on person3:", person3info);
// ! Returns an array of arrays

// Usinf fromEntries() which is the opposite of entries()

const fruits = [
    ["apples", 200],
    ["bananas", 32121],
    ["currants", 69]
]
let fruitsObj = Object.fromEntries(fruits)

console.log("Here is an object made out of the fruits array:", fruitsObj);
// ! Created an object exactly how I was expecting (With keys and values)

// Using Object.values()
const stateInfo = {
    name: "Minnesota",
    capital : "St Paul",
    population : 3123232,
    founder : "Some White Man",

}
let stateValues = Object.values(stateInfo)
console.log("Here are the state values:", stateValues);
// ! Just returns the objects values and no keys


// using the groupBy method
// Create an Array
const lefruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to Group Elements
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Group by Quantity
  const result = Object.groupBy(lefruits, myCallback);
  console.log("Results of groupby on lefruits array:", result);
  


console.log("This is me:", me);

if( me.myFName === "stevie"){
    console.log("My name is Stevie");
}
else{
    console.log("my name isn't stevie.... it's", me.myFName);
    
}