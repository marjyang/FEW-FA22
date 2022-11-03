
let firstNBox = document.getElementById('first-name');
let lastNBox = document.getElementById('last-name');
let emailBox = document.getElementById('email');
let checkBox = document.getElementById('check-box');
let loadAnim = document.getElementById('loading');

function emptyInputCheck(){
    if (firstNBox.value === ''){
        firstNBox.classList.add('red-border');
        console.log(`${firstNBox.classList}`);
    } else {
        firstNBox.classList.remove('red-border');
    }
    if (lastNBox.value === ''){
        lastNBox.classList.add('red-border');
        console.log(`${lastNBox.classList}`);
    } else {
        lastNBox.classList.remove('red-border');
    }
    if (emailBox.value === ''){
        emailBox.classList.add('red-border');
        console.log(`${emailBox.classList}`);
    } else {
        emailBox.classList.remove('red-border');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email));
    return re.test(email);
}

document.getElementById('submit').addEventListener('click', () => {
    emptyInputCheck();
    validateEmail(emailBox.value);
    if (validateEmail(emailBox.value) === false){
        emailBox.classList.add('red-border');
        document.getElementById('not-valid').innerText = "your email is invalid.";
    }else{
        console.log('successful');
    }

    
    loadAnim.classList.add('loader');

});
