let button = document.getElementById('btn');

button.addEventListener('click', () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(response => { document.getElementById('dogImage').src = response.message; })
});