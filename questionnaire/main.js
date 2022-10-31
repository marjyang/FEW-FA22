document.getElementById('submit').addEventListener('click', () => {
    let nameBox = document.getElementById('name');
    let ageBox = document.getElementById('age');
    let costumeBox = document.getElementById('costume');
    let ratingBox = document.getElementById('rating');

    document.getElementById('text').innerText = `${nameBox.value} was dressed up as ${costumeBox.value} and rated their halloweekend experience a ${ratingBox.value} out of 10!`;
    nameBox = "";
    ageBox = "";
    costumeBox = "";
    ratingBox = "";
});
