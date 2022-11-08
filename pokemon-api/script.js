let randomNum = Math.floor(Math.random() * 100);
let button = document.getElementById('get-random');

const app = {
    initialize: () => {
     app.fetchPokemon();
    },

    fetchPokemon: () => {
      fetch('https://pokeapi.co/api/v2/pokemon/' + randomNum)
        .then(response => response.json())
        .then(response => app.populatePokemon(response))
        .catch(error => console.log(error));
    },
  
    populatePokemon: response => {
      $('#pokemon').attr('src', response.sprites);
    },
} 


const randomPokemon = {
    initialize: () => {
        randomPokemon.fetchPokemon();
    },

    fetchPokemon: () => {
        randomPokemonNum = Math.floor(Math.random() * 500);

        console.log("Getting Pokemon #: " + randomPokemonNum);
      fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonNum)
        .then(response => response.json())
        .then(response => randomPokemon.logData(response))

        // .then(response => app.randomImage(response))
        .catch(error => console.log(error));
    },
    logData: response => {
        console.log(response);
        console.log(response.sprites);
    },

    randomImage: response => {
        console.log(response);
      $('#pokemon').attr('src', response.message);
    },

    randomPokemon: response => {

    }
}


randomPokemon.initialize();