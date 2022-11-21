
import data from './data/pokemon/pokemon.js'

const pokemons = data.items;

const gerarImg = (objeto)=>{
    objeto.forEach((objeto)=>{
        objeto.image
    })
}

gerarImg(pokemons)





/*const grid = document.querySelector('.grid'); //onde será criado os cards

const spanPlayer = document.querySelector ('.player'); // onde será o nome do jogador 

const time = document.querySelector('.timer') // onde aparecerá o tempo de jogo

const createElements = (tag, nameOfClass) => {
    const element = document.createElement(tag);
    element.className = nameOfClass;
    return element;
}

const checkEndGame = () =>{
const disabledCard = document.querySelectorAll('.disabled-card');
if (disabledCard.length === 18){
    clearInterval(this.loop);
alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${time.innerHTML}`);
}


}

let firstCard = '';
let secondCard = '';

const checkCards = () => {
    const firstPokemon = firstCard.getAttribute('data-pokemonName');
    const secondPokemon = secondCard.getAttribute('data-pokemonName');

    if (firstPokemon === secondPokemon) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        firstCard = '';
        secondCard = '';

        checkEndGame()
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            firstCard = '';
            secondCard = '';

        }, 600)

    }
}



const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }


    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards()
    }
}
const createCard = (pokemonName) => {
    const card = createElements('div', 'card');
    const front = createElements('div', ' face front');
    const back = createElements('div', ' face back');

    front.style.backgroundImage = gerarImg(pokemons);

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-pokemonName', pokemonName);

    return card;

}

const loadGame = () => {
    const duplicatePokemons = [...pokemons, ...pokemons];

    const embaralharArray = duplicatePokemons.sort(() => Math.random() - 0.5);

    embaralharArray.forEach((pokemonName) => {
        const card = createCard(pokemonName)
        grid.appendChild(card);
    });
}

const startTimer = ()=>{
    this.loop = setInterval(()=>{
        const currentTimer = Number(time.innerHTML);
         time.innerHTML = currentTimer + 1;
    }, 1000)
}

window.onload = () =>{
    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName;
    startTimer()
    loadGame()
};
*/