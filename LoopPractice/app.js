// This page will be for practicing loops 

const people = [
    {"id": 1, "firstName": "Alice", "lastName": "Johnson", "age": 32, "city": "New York"},
    {"id": 2, "firstName": "Bob", "lastName": "Smith", "age": 28, "city": "Los Angeles"},
    {"id": 3, "firstName": "Charlie", "lastName": "Brown", "age": 45, "city": "Chicago"},
    {"id": 4, "firstName": "Diana", "lastName": "Miller", "age": 35, "city": "Houston"},
    {"id": 5, "firstName": "Eva", "lastName": "Davis", "age": 22, "city": "Phoenix"},
    {"id": 6, "firstName": "Frank", "lastName": "Martinez", "age": 39, "city": "Philadelphia"},
    {"id": 7, "firstName": "Grace", "lastName": "Hernandez", "age": 26, "city": "San Antonio"},
    {"id": 8, "firstName": "Henry", "lastName": "Lopez", "age": 33, "city": "San Diego"},
    {"id": 9, "firstName": "Isabel", "lastName": "Gonzalez", "age": 40, "city": "Dallas"},
    {"id": 10, "firstName": "Jack", "lastName": "Wilson", "age": 50, "city": "San Jose"},
    {"id": 11, "firstName": "Kathy", "lastName": "Anderson", "age": 29, "city": "Austin"},
    {"id": 12, "firstName": "Louis", "lastName": "Thomas", "age": 24, "city": "Jacksonville"},
    {"id": 13, "firstName": "Megan", "lastName": "Taylor", "age": 30, "city": "Fort Worth"},
    {"id": 14, "firstName": "Nathan", "lastName": "Moore", "age": 37, "city": "Columbus"},
    {"id": 15, "firstName": "Olivia", "lastName": "Jackson", "age": 42, "city": "Indianapolis"},
    {"id": 16, "firstName": "Paul", "lastName": "White", "age": 38, "city": "Charlotte"},
    {"id": 17, "firstName": "Quinn", "lastName": "Harris", "age": 34, "city": "Seattle"},
    {"id": 18, "firstName": "Rachel", "lastName": "Clark", "age": 31, "city": "Denver"},
    {"id": 19, "firstName": "Steve", "lastName": "Lewis", "age": 48, "city": "Washington D.C."},
    {"id": 20, "firstName": "Tina", "lastName": "Roberts", "age": 53, "city": "Boston"},
    {"id": 21, "firstName": "Ursula", "lastName": "Walker", "age": 21, "city": "El Paso"},
    {"id": 22, "firstName": "Victor", "lastName": "Young", "age": 27, "city": "Nashville"},
    {"id": 23, "firstName": "Wendy", "lastName": "King", "age": 44, "city": "Detroit"},
    {"id": 24, "firstName": "Xander", "lastName": "Scott", "age": 31, "city": "Oklahoma City"},
    {"id": 25, "firstName": "Yvonne", "lastName": "Green", "age": 56, "city": "Portland"},
    {"id": 26, "firstName": "Zachary", "lastName": "Adams", "age": 29, "city": "Las Vegas"},
    {"id": 27, "firstName": "Amelia", "lastName": "Baker", "age": 30, "city": "Louisville"},
    {"id": 28, "firstName": "Ben", "lastName": "Gonzalez", "age": 28, "city": "Milwaukee"},
    {"id": 29, "firstName": "Chloe", "lastName": "Perez", "age": 32, "city": "Tucson"},
    {"id": 30, "firstName": "Daniel", "lastName": "Morris", "age": 41, "city": "Fresno"},
    {"id": 31, "firstName": "Ella", "lastName": "Rodriguez", "age": 33, "city": "Sacramento"},
    {"id": 32, "firstName": "Felix", "lastName": "Murphy", "age": 39, "city": "Kansas City"},
    {"id": 33, "firstName": "Gina", "lastName": "Cook", "age": 38, "city": "Mesa"},
    {"id": 34, "firstName": "Holly", "lastName": "Bailey", "age": 42, "city": "Atlanta"},
    {"id": 35, "firstName": "Isaac", "lastName": "Rivera", "age": 36, "city": "Miami"},
    {"id": 36, "firstName": "Jackie", "lastName": "Evans", "age": 41, "city": "Oakland"},
    {"id": 37, "firstName": "Kendra", "lastName": "Gonzalez", "age": 35, "city": "Cleveland"},
    {"id": 38, "firstName": "Liam", "lastName": "Carter", "age": 27, "city": "Virginia Beach"},
    {"id": 39, "firstName": "Maya", "lastName": "Mitchell", "age": 34, "city": "Raleigh"},
    {"id": 40, "firstName": "Nina", "lastName": "Roberts", "age": 29, "city": "Long Beach"},
    {"id": 41, "firstName": "Oscar", "lastName": "Perez", "age": 45, "city": "New Orleans"},
    {"id": 42, "firstName": "Paige", "lastName": "Ross", "age": 32, "city": "Minneapolis"},
    {"id": 43, "firstName": "Quincy", "lastName": "Jenkins", "age": 41, "city": "Bakersfield"},
    {"id": 44, "firstName": "Rita", "lastName": "Gray", "age": 50, "city": "Stockton"},
    {"id": 45, "firstName": "Seth", "lastName": "Hill", "age": 48, "city": "Corpus Christi"},
    {"id": 46, "firstName": "Tanya", "lastName": "Adams", "age": 36, "city": "Anchorage"},
    {"id": 47, "firstName": "Ulysses", "lastName": "Nelson", "age": 54, "city": "Cincinnati"},
    {"id": 48, "firstName": "Vera", "lastName": "Hall", "age": 46, "city": "Saint Paul"},
    {"id": 49, "firstName": "Walter", "lastName": "Allen", "age": 59, "city": "Pittsburgh"},
    {"id": 50, "firstName": "Ximena", "lastName": "Bennett", "age": 33, "city": "Saint Louis"},
    {"id": 51, "firstName": "Yara", "lastName": "Sanders", "age": 40, "city": "Chula Vista"},
    {"id": 52, "firstName": "Zane", "lastName": "Morris", "age": 28, "city": "Toledo"},
    {"id": 53, "firstName": "Aiden", "lastName": "Evans", "age": 25, "city": "Fort Wayne"},
    {"id": 54, "firstName": "Brooke", "lastName": "Ward", "age": 34, "city": "Baton Rouge"},
    {"id": 55, "firstName": "Cameron", "lastName": "Perez", "age": 27, "city": "Durham"},
    {"id": 56, "firstName": "Dylan", "lastName": "Gray", "age": 12, "city": "Richmond"},
]
// Goes through the array and returns the firstName of each object
function parsePeople () {
    // This for loop now checks each person's age then tells you if they can legally drink or not
    for(person of people){
        if (person.age >= 21){
            console.log(`${person.firstName} can legally drink because their age is ${person.age}`);
        }
        else{
            console.log(`${person.firstName} can't legally drink because their age is ${person.age}`);
            
        }
        // console.log(person.firstName);
        
    }
}
parsePeople()
  

// let hello = '1'

// const monthlyRent = 815
// let yearlyRent = monthlyRent * 12
// function yearlyRentDisplay () {
//     console.log("Yearly Rent", yearlyRent);
    
// }
// function runHello(){
//     console.log("hello world", hello);
// }

// let firstName = "Stevie"
// let lastName = "Lindsey"

// let helloSentence = `Hello ${firstName} ${lastName}, how are you doing today?`
// let skyIsBlue = 0

// if (skyIsBlue == true){
//     console.log("the sky is blue");
    
// }
// else{
//     console.log("The sky is not blue");
    
// }

// let friendsAtParty = 0
// console.log("friends at Party before while loop:", friendsAtParty);

// // Practicing a while loop

// while(friendsAtParty < 10){
//     friendsAtParty = friendsAtParty + 1
// }
// console.log("friends at Party after while loop:", friendsAtParty);

// // Practicing a for loop
// for (let i = 0; i < 10; i ++){
//     friendsAtParty ++
//     console.log("friends at party during for loop", friendsAtParty);
    
// }
// console.log("friends at party after for loop", friendsAtParty);

// console.log(helloSentence);

// const timesToRepeat = 5
// let character = '🤣'
// let theAnswer = " "

// for(let i = 0; i < timesToRepeat; i++){
//     theAnswer = theAnswer + character
// }
// console.log("theAnswer:", theAnswer);



// function doAddition (firstNum, secondNum) {

//     return console.log(`Here is some addition:  ${firstNum} + ${secondNum} = `, firstNum + secondNum)

// }

// function doSubtraction ( firstNum, secondNum ) {

//     return console.log(`Here is some subtraction: ${firstNum} - ${secondNum} = `, firstNum - secondNum);
    
// }

// function doMultiplication ( firstNum, secondNum ) {

//     return console.log(`Here is some multiplication: ${firstNum} * ${secondNum} = `, firstNum * secondNum);
    
// }

// function doDivision ( firstNum, secondNum ) {

//     return console.log(`Here is some division: ${firstNum} / ${secondNum} = `, firstNum / secondNum);
    
// }

// doAddition( 9, 8 ) 
// doSubtraction( 9, 8 )
// doMultiplication( 9, 8 )
// doDivision (9, 8 )

// runHello()
// yearlyRentDisplay()
