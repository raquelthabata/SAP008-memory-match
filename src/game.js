
import data from './data/pokemon/pokemon.js'

const pokemons = data.items;
let cardHtml = '';
const gerarImg = (objeto)=>{
    objeto.forEach((objeto)=>{
        objeto.image 
    })
}

gerarImg(pokemons)



//1: a gente precisa criar toda a estrutura doq está no html para aparecer nossa carta, quem vai criar essa estrutura é função que irei criar
 /*
 <div class="grid">
      <div class="card">
      <div class=" face front"></div>
      <div class="face back"></div>
    </div>
  </div>
*/

//1.1 selecionei onde será criado os cards que no caso é na div grid lá no html
const grid = document.querySelector('.grid'); 

//1.2 função parar criar o card
//método .createElements(recebe a tag do elemento que quero criar) para criar um elemento HTML
//método .className para criar uma classe e nome para o elemento que criamos
//método .appendChild(elemento que vai receber) adiciona um filho a um elemento no HTML


const createCard = () => {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    //até aqui eles foram criados porém estão separados, precisamos colocar dentro da div card, para isso utilizamos o método .appendChild(aqui dentro o elemento que criamos)

    card.appendChild(front);
    card.appendChild(back);

    //agora precisamos adicionar dentro da div grid, então utilizamos o mesmo método appendChild

    grid.appendChild(card);

    //o grid vai receber o card já com os filhos dele dentro, que são o front e o back


}

createCard()




/*const createCard = (pokemonName) => {
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



























/*const spanPlayer = document.querySelector ('.player'); // onde será o nome do jogador 

const time = document.querySelector('.timer') // onde aparecerá o tempo de jogo*/






/*const createElements = (tag, nameOfClass) => {
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