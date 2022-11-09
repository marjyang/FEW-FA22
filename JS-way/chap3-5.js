// The Javascript Way - Chapter 3 Add Conditions ---------------------------------------------------------------------------------------

// 1. Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. 
// Incorrect inputs must be taken into account.

function chapter3(){
    let input = prompt("Enter a day of the week: ");
    let dayName = input.toLowerCase();

    switch(dayName){
        case "monday":
            console.log("Tuesday");
            alert(`Tuesday`);
            break;
        case "tuesday":
            console.log("Wednesday");
            alert(`Wednesday`);
            break;
        case "wednesday":
            console.log("Thursday");
            alert(`Thursday`);
            break;
        case "thursday":
            console.log("Friday");
            alert(`Friday`);
            break;
        case "friday":
            console.log("Saturday");
            alert(`Saturday`);
            break;
        case "saturday":
            console.log("Sunday");
            alert(`Sunday`);
            break;
        case "sunday":
            console.log("Monday");
            alert(`Monday`);
            break;
        default:
            console.log("Not a valid day.")
            alert(`Not a valid day.`);
    }
}

// The Javascript Way - Chapter 4 Repeat statement ---------------------------------------------------------------------------------------

// 1. Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.

function chapter4(){
    //version1
    // for (let i = 0; i < 10; i++){
    //     console.log("Turn " + i);
    //     i++;
    // }

    //version2
    let turns = Number(prompt("How many turns? "));
    for (let i = 0; i < turns; i++){
        console.log("Turn " + i+1);
        alert(`Turn ${i+1}`);
    }
}

// 2. Parity
// Improve the program so that it also shows odd numbers.

function chapter41(){
    // for (let i = 1; i <= 10; i++) {
    //     if (i % 2 === 0) {
    //         console.log(`${i} is even`);
    //     }else{
    //         console.log(`${i} is odd`);
    //     }
    // }

    // Improve it again to replace the initial number 1 by a number given by the user.

    let initial = Number(prompt("Give an initial number: "));
    for (let i = initial; i <= initial + 10; i++){
        if (i % 2 === 0) {
            alert(`${i} is even`);
            console.log(`${i} is even`);
        }else{
            alert(`${i} is odd`);
            console.log(`${i} is odd`);
        }
    }
}

// The Javascript Way - Chapter 5 Write functions ---------------------------------------------------------------------------------------

// 1. Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

function chapter5(){
    function sayHello(firstName, lastName) {
        const message = `Hello, ${firstName} ${lastName}!`;
        return message;
    }
    // TODO: ask user for first and last name
    // TODO: call sayHello() and show its result

    const firstName = prompt("Enter your first name: ");
    const lastName = prompt("Enter your last name: ");
    alert(sayHello(firstName, lastName));
}


// 2. Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x

function chapter51(){
    // function square1(x) {
    //     return Math.pow(x, 2);;
    // }
    
    // // Square the given number x
    // const square2 = x => {
    //     return Math.pow(x, 2);;
    // }

    // When it's done, update the program so that it shows the square of every number between 0 and 10.
    function square(){
        for (let i = 0; i <=10; i++){
            squareof = Math.pow(i, 2);
            alert(squareof);
        }
    }
    square();
}