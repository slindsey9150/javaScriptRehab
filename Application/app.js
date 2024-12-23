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
for (let i = 0; i < 90; i ++){
    friendsAtParty ++
}
console.log("friends at party after for loop", friendsAtParty);

console.log(helloSentence);


runHello()
yearlyRentDisplay()
