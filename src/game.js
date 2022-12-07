
import data from './data/pokemon/pokemon.js';

const spanPlayer = document.querySelector('.player');

const grid = document.querySelector('.grid');

const createElements = (tag, nameOfClass) => {
    const element = document.createElement(tag);
    element.className = nameOfClass;
    return element;
}

let firstCard = '';
let secondCard = '';


const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    };

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }
    else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        const firstPoke = firstCard.getAttribute('name');
        const secondPoke = secondCard.getAttribute('name');

        if (secondPoke === firstPoke) {

            firstCard.firstChild.classList.add('disabled-card');
            secondCard.firstChild.classList.add('disabled-card');
            firstCard = '';
            secondCard = '';
        } else {
            setTimeout(() => {
                firstCard.classList.remove('reveal-card');
                secondCard.classList.remove('reveal-card');
                firstCard = '';
                secondCard = '';
            }, 600);

        };
    };
};

const createCard = (pokemon) => {
    const card = createElements('div', 'card');
    const front = createElements('div', ' face front');
    const back = createElements('div', ' face back');

    card.setAttribute('name', pokemon.id);


    front.style.backgroundImage = `url(${pokemon.image})`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    return card;

};

const loadGame = () => {
    const duplicatePokemons = [...data.items, ...data.items].sort(() => {
        return Math.random() - 0.5;
    })

    duplicatePokemons.forEach((pokemon) => {
        const card = createCard(pokemon);
        grid.appendChild(card);
    });
};

window.onload = () => {
    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML =`Player: ${playerName}`;
    loadGame()
};
