
import data from './data/pokemon/pokemon.js'
//0: primeiro importei as informações do arquivo data
//criei uma função para gerar a imagem de dentro do objeto, através do forEach que percorre cada objeto do array. 
//passei um objeto como parametro, dentro da função criei uma constante que recebeu um array vazio.
//passei um forEach no objeto que recebe items como parametro e através do método push, a constante com array vazio puxa os dados de items.image 
//por fim retorna a constante que recebe um array com todas url das imagens


const gerarImg = (objeto) => {
    const imgItems = [];
    objeto.forEach((items) => {
        imgItems.push(items.image)

    })

    return imgItems;
}

const pokemonsImages = gerarImg(data.items)
//criei uma constante para guardar o resultado das imagens que veio através da execução da função

//1: preciso criar toda a estrutura doq está no html para aparecer nossa carta, quem vai criar essa estrutura é função que irei criar
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

const createElements = (tag, nameOfClass) => {
    const element = document.createElement(tag);
    element.className = nameOfClass;
    return element;
}
//essa função está recebendo como parametro o nome da tag e o nome da classe que queremos criar 
// criei uma constante chamada elemento que vai receber o método document.creatElements, o elemento que ela vai criar passamos através da tag que é o parametro colocado na função
//em seguida peguei o elemento e adicionei através do método className a classe que ele irá criar, e o nome dessa classe será o parametro que a função irá receber
//por fim é retornado o elemento pronto 

//1.4 agora reaproveitando a função de criar elemento para a função de criar o card, ela ficará assim:
//1.5 criando a função revelCard para que ela possa ser executada no evento de click
//target para recuperar o elemento que foi clicado
//posso adicionar o parentNode para recuperar o pai do elemento clicado
//através do classList e o add adicionamos uma nova classe a esse elemento pai que será a classe no css que irá revelar a carta com o click
//cliquei na primeira carta vou guardar na varivel firstCard cliquei na segunda guardo no secondCard, para poder comparar as duas e vê se são iguais
let firstCard = '';
let secondCard = '';


const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return; //se o target já tiver uma classe com o nome reveal-card ele vai bater no return e vai pro fim da função, não vai fazer nada
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
    } //se a varivel for vazia, eu adiciono a classe de revelar a carta e salvo esse valor na varivel
    else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;

        const firstPoke = firstCard.getAttribute('name');
        const secondPoke = secondCard.getAttribute('name');

        if (secondPoke === firstPoke) {

            firstCard.classList.add('disabled-card');
            secondCard.classList.add('disabled-card');
            firstCard = '';
            secondCard = '';
        }

    } //mesma coisa aqui


    //como comparar as duas cartas para aplicar a classe disabled-card se as duas forem iguais?



}

const createCard = (pokemon) => {
    const card = createElements('div', 'card');
    const front = createElements('div', ' face front');
    const back = createElements('div', ' back');

    card.setAttribute('name', pokemon.id)


    front.style.backgroundImage = `url(${pokemon.image})`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    //evento de click adicionado para a carta virar quando clicar e mostrar o outro lado e a função que será executada se chama revealCard. Explicando no item 4

    return card;

}
//na constante card, front e back que criei ao invés de utilizar o método createElements, chamo a função que criei que é para criar os elementos e passamos os dois parametros que ela recebe, o nome da tag, ex: div e o nome da classe, ex: card
//adicionei a imagem que será adicionada no backgroundImage da div front e utilizei o templatestring para inserir a variavel com a url das imagens
//depois é adicionado normalmente as tags front back como filhos da tag card 
//por fim retornado o card
//essa função é somente para criar a carta

//2: preciso criar uma função para carregar o jogo


//2: criar uma função para carregar o jogo
//a função contém a constante com o array de imagens e nela é passado um forEach para cada imagem dentro do array crio uma constante chamada card que recebe a função de criar card com o parametro pokemon que é cada imagem
//por fim adiciono a constante card como filho da div grid

/*const loadGame = () => {
 pokemonsImages.forEach((pokemon)=>{
    const card = createCard(pokemon);
    grid.appendChild(card);
 });
}

loadGame() */
//chamando a função de carregar o jogo

//3: duplicar o array na função acima, para que haja um par de cada imagem
//criei uma constante que vai receber o array duplicado
//preciso pegar os elementos do array de imagens e espalhar, para isso utilizei um operador de espalhamento, que espalha um array dentro de outro, que é, colocar 3 pontos ... e colocar o array
//como quero que seja duplicado, adicionei o array 2 vezes dentro da constante 
//a constante tem os mesmo elementos do array de pokemonsImages, porém eles estão espalhados.
//e no lugar da constante pokemonsImages eu substituo pela nova constante com o array duplicado
//porém eles estão na mesma ordem, para consertar isso utilizei o método sort para embaralhar o array, ele ordena em ordem alfabética, porém ele também recebe uma função dentro dele para determinar como quero essa ordenação
//utilizei o metodo Match.random como retorno para função do sort, pois ele gera um número aletório, subtrai por 0.5 para que ele não fique sempre com o mesmo padrão, pois o sort precisa receber um número maior ou menor que 0, vai retornar um número negativo ou positivo aleatoriamente


const loadGame = () => {
    const duplicatePokemons = [...data.items, ...data.items].sort(() => {
        return Math.random() - 0.5
    })

    duplicatePokemons.forEach((pokemon) => {
        const card = createCard(pokemon);
        grid.appendChild(card);
    });
}
loadGame()

   //4: adicionar um evento de escuta nas cartas, para que elas virem quando clicar. Como já estou criando as cartas na função createCard, adicionei o evento diretamente lá