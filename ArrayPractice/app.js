// We're going to practice some array methods here

let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

// Remove the last object in the array

console.log("Removing the last item in the daysOfTheWeek array:", daysOfTheWeek.pop());
// ! So what this did was actually returned the last item in the console lpog because of course it did. I will probably need to use a 
// ! Function to return the array.

function removeLastItem ( anArray ) {

    anArray.pop()
    return console.log("Here's the array:", anArray);

}
// ! The pop from the previous console log still affected the array... interesting 


// Remove first object in an array
// return the first item in a console log
let firstDay = daysOfTheWeek.shift()
console.log("First item in the daysOfTheWeek array ", firstDay);

// Put the first day back on the array

console.log("Adding sunday back to days of the week:", daysOfTheWeek.unshift(firstDay), daysOfTheWeek);


removeLastItem( daysOfTheWeek )

// return the length of the array
console.log( "length of days of the week array:", daysOfTheWeek.length);
// ! WHen using the .lenght method dont use parentheses

// change the array to a string
// console.log("the array as a string:", daysOfTheWeek.toString());
// ! Separates the elements with commas

// Return the third element in the array
console.log("Third element in the array:", daysOfTheWeek.at(2));
console.log("Third element in the array:", daysOfTheWeek[2]);
// ! Don't really need the at method when you can just use square brackets

// Join an array into a string and separate it with *

// console.log("Months of the year separated by * :", monthsOfTheYear.join(" * "));

// Remove then return december
let lastMonth = monthsOfTheYear.pop()
console.log("Months of the year after removing december:", monthsOfTheYear);
console.log("Months of the year after returning december:", monthsOfTheYear.push(lastMonth), monthsOfTheYear);









