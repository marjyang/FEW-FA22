const image = document.getElementById("image");
const char = document.getElementById("name")
const alive = document.getElementById("alive")
const dead = document.getElementById("dead")
const unknown = document.getElementById("unknown")
const scoreText = document.getElementById("score")

let button = document.getElementById('btn');
let status = "";
let score = 0;

function randomChar(){
    fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
    .then(response => response.json())
    .then(response => {
        char.innerHTML = response.name;
        image.src = response.image;
        status = response.status;
    })
    .catch(error => console.log(error));
}


randomChar();

alive.addEventListener("click", (e) => {
    if (status == "Alive"){
        document.body.style.backgroundColor = 'green';
        score ++;
    }
    else{
        document.body.style.backgroundColor = 'red';
        score --;
    }
    updateScore(score)
    randomChar();
})

dead.addEventListener("click", (e) => {
    if (status == "Dead"){
        document.body.style.backgroundColor = 'green';
        score ++;
    }
    else{
        document.body.style.backgroundColor = 'red';
        score --;
    }
    updateScore(score)
    randomChar();
})

unknown.addEventListener("click", (e) => {
    if (status == "Unknown"){
        document.body.style.backgroundColor = 'green';
        score ++;
    }
    else{
        document.body.style.backgroundColor = 'red';
        score --;
    }
    updateScore(score)
    randomChar();
})

function updateScore(score){
    scoreText.innerHTML = score;
}

function rightAns(){
    document.body.style.backgroundColor = 'green';
}

function wrongAns(){
    document.body.style.backgroundColor = 'rgb(245, 98, 98)';
}