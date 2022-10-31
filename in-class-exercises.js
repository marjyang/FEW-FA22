// In-Class Exercises

// 10/26/2022
// Chapter 7 - Store Data in Arrays, Question 4

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let input = "";
let array = [];

while(input != "stop"){
    input = prompt("Enter a word. Enter 'stop' to quit");
    array.push(input);
}

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}