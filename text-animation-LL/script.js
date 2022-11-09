const text = document.querySelector(".text-anim");
const strText = text.textContent;

//split string into an array
const textArr = strText.split("");

//the span in line 11-13 repeats this string. To get rid of it,...
text.textContent = "";

//create spans for each letter of the string
for (let i = 0; i < textArr.length; i++){
    text.innerHTML += "<span>" + textArr[i] + "</span>";
}

//every 50 milliseconds, add class to each letter
let char = 0;
let timer = setInterval(onTick, 500);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === textArr.length){
        animComplete();
        return;
    }
}

//once animation is complete, stop the timer.
function animComplete(){
    clearInterval(timer);
    timer = null;
}