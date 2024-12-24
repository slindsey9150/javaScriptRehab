let hello = '1'

const monthlyRent = 815
let yearlyRent = monthlyRent * 12
function yearlyRentDisplay () {
    console.log("Yearly Rent", yearlyRent);
    
}
function runHello(){
    console.log("hello world", hello);
}

let firstName = "Stevie"
let lastName = "Lindsey"

let helloSentence = `Hello ${firstName} ${lastName}, how are you doing today?`
let skyIsBlue = 0

if (skyIsBlue == true){
    console.log("the sky is blue");
    
}
else{
    console.log("The sky is not blue");
    
}

let friendsAtParty = 0
console.log("friends at Party before while loop:", friendsAtParty);

// Practicing a while loop

while(friendsAtParty < 10){
    friendsAtParty = friendsAtParty + 1
}
console.log("friends at Party after while loop:", friendsAtParty);

// Practicing a for loop
for (let i = 0; i < 10; i ++){
    friendsAtParty ++
    console.log("friends at party during for loop", friendsAtParty);
    
}
console.log("friends at party after for loop", friendsAtParty);

console.log(helloSentence);

const timesToRepeat = 5
let character = '🤣'
let theAnswer = " "

for(let i = 0; i < timesToRepeat; i++){
    theAnswer = theAnswer + character
}
console.log("theAnswer:", theAnswer);



function doAddition (firstNum, secondNum) {

    return console.log(`Here is some addition:  ${firstNum} + ${secondNum} = `, firstNum + secondNum)

}

function doSubtraction ( firstNum, secondNum ) {

    return console.log(`Here is some subtraction: ${firstNum} - ${secondNum} = `, firstNum - secondNum);
    
}

function doMultiplication ( firstNum, secondNum ) {

    return console.log(`Here is some multiplication: ${firstNum} * ${secondNum} = `, firstNum * secondNum);
    
}

function doDivision ( firstNum, secondNum ) {

    return console.log(`Here is some division: ${firstNum} / ${secondNum} = `, firstNum / secondNum);
    
}

doAddition( 9, 8 ) 
doSubtraction( 9, 8 )
doMultiplication( 9, 8 )
doDivision (9, 8 )

runHello()
yearlyRentDisplay()
