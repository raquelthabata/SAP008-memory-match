
import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js'

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


/*const createCard = () => {
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
//chamando a função para ser executada, ela não recebe nenhum parâmetro 
*/

//1.3 na função acima criei fiz muitas repetições de códigos , para facilitar, vou criar uma função para criar os elementos

const createElements = (tag, nameOfClass)=>{
    const element = document.createElement(tag);
    element.className = nameOfClass;
    return element;
}
 //essa função está recebendo como parametro o nome da tag e o nome da classe que queremos criar 
 // criei uma constante chamada elemento que vai receber o método document.creatElements, o elemento que ela vai criar passamos através da tag que é o parametro colocado na função
 //em seguida peguei o elemento e adicionei através do método className a classe que ele irá criar, e o nome dessa classe será o parametro que a função irá receber
 //por fim é retornado o elemento pronto 

 //1.4 agora reaproveitando a função de criar elemento para a função de criar o card, ela ficará assim:

 const pokemons = data.items;


const gerarImg = (objeto)=>{
    const imgItems = [];
    objeto.forEach((objeto)=>{
        imgItems.push(objeto.image)

    })

    return imgItems;
}

const pokemonsImages = gerarImg(pokemons)

const createCard = (pokemon) => {
    const card = createElements('div', 'card');
    const front = createElements('div', ' face front');
    const back = createElements('div', ' face back');

    front.style.backgroundImage = `url(${pokemon})`;

    card.appendChild(front);
    card.appendChild(back);

    return card;

}
//na constante card, front e back que criei ao invés de utilizar o método createElements, chamo a função que criei que é para criar os elementos e passamos os dois parametros que ela recebe, o nome da tag, ex: div e o nome da classe, ex: card
//depois é adicionado normalmente as tags front back como filhos da tag card 
//por fim retornado o card


//chamando a função
//essa função é somente para criar a carta

//2: preciso criar uma função para carregar o jogo


const loadGame = () => {
 pokemonsImages.forEach((pokemon)=>{
    const card = createCard(pokemon);
    grid.appendChild(card);
 });
}

loadGame()
