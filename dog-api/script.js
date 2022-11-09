const randomDog = {
    initialize: () => {
        randomDog.fetchDog();
    },

    fetchDog: () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(response => randomDog.logData(response))
        .catch(error => console.log(error));
    },

    logData: response => {
        document.getElementById('dogImage').src = response.message;
        console.log(response.message);
    },
}