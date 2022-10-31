// The Javascript Way - Chapter 6: Create your first objects ---------------------------------------------------------------------------------------

// 3. Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

function chapter6(){
    const r = Number(prompt("Enter the circle radius:"));

    // TODO: create the circle object here
    const circle = {
        circumference: 2*3.14*r,
        area: 3.14*r*r,

        describe(){
            return `Its circumference is ${this.circumference}\nIts area is ${this.area}`;
        }
    }
    // console.log(circle.describe());
    alert(circle.describe());
}

// 4.Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex", A balance property set to 0., A credit method adding the (positive or negative) value passed as an argument to the account balance., A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

function chapter61(){
    const alex = {
        name: "Alex",
        balance: 0,
        
        describe() {
            return `owner: ${this.name}, balance: ${this.balance}`;
        }
    }
    console.log(alex.describe());
    
    alex.balance += 250;
    alex.balance -= 80;
    
    // console.log(alex.describe());    
    alert(alex.describe());
}


// The Javascript Way - Chapter 7: Store data in arrays ---------------------------------------------------------------------------------------

// 3. Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

function chapter7(){
    const values = [3, 11, 7, 2, 9, 10];
    
    let max = values[0];

    for (let i = 0; i < values.length; i++){
      if (values[i] > max){
        max = values[i];
      }
    }
    // console.log(max);
    alert(max);
}

// The Javascript Way - Chapter 8: Work with strings ---------------------------------------------------------------------------------------

// 1. Word info
// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

function chapter8(){
    const word = prompt("Enter a word:");
    const len = word.length;
    let lowCase = "";
    let upCase = "";
    
    for (let i = 0; i < word.length; i++){
        if (word[i] == word[i].toLowerCase()){
            lowCase+=word[i];
        }else{
            upCase+=word[i];
        }
    }

    const result = `Word length: ${len}\nLowercase values: ${lowCase}\nUppercase values: ${upCase}`;
    // console.log(result);
    alert(result);
}