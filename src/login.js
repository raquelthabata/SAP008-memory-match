const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");

//acima estou selecionando as tag do html, com os seletores de dom


//as funções foram criadas através de uma arrow function
//dentro da função o parametro passado é um evento, mas poderia ser qll nome
//criei uma variavel para armazenar o valor que estará dentro do input
//se o valor for maior que 2, no caso a string tiver mais de 2 caracteres, seleciono o botão e o "removeAttribute" irá remover o atributo de desabilitado do botão
//se não o setAttribute adiciona o desabilitado

// removeAttribute remove um atributo
//setAttribute adiciona um atributo e dentro dele é recebido dois argumentos, no caso como não temos o outro, adicionei uma string vazia

const validateInput = (banana) => {
    let targetEvent = banana.target.value
    if (targetEvent.length > 2 ){
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "");
    }

}

//nessa função o parametro é um evento
//foi adicionado um preventDefault(), que é uma função que previne um comportamento padrao de determinada coisa, nesse caso, previne que o submit recarregue a página
//o localStorage permite acessar um objeto Storage local, é uma propriedade que permite guardar informações no browser do user, se a pag for recarregada, não perdemos o valor, nesse caso, iremos guardar o nome que será inserido no input e enviado com o submit. Ele recebe dois argumentos, o primeiro é uma chave e o outro o valor
//O método setItem() da interface Storage, quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista.
//por fim mudamos a pagina de local com o windows location adicionadno o local do html 
const handleSubmit = (event) => {
    event.preventDefault(); 
    localStorage.setItem('player',input.value);
    window.location = 'game.html';

}


//os eventos são colocados abaixo da função, pois se forem colocados acima da um erro, pois não da pra acessar a função antes de inicializa-la 
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);


//localStorage aparecer todos os dados que estão salvos na pag