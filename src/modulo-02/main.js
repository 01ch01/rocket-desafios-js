/**
 * 1º Exercício:
 * Crie um botão que ao ser clicado cria um novo elemento em tela com a forma
 * de um quadrado vermelho com 100px de altura e largura. Sempre que o botão
 * for clicado um novo quadrado deve aparecer na tela.
 *
 * 2º Exercício:
 * Utilizando o resultado do primeiro desafio, toda vez que o usuário passar
 * o mouse por cima de algum quadrado troque sua cor para uma cor aleatória.
 *
 * 3º Exercício:
 * A partir de um vetor de nomes, preencha uma lista <ul/> no HTML com esse vetor.
 *
 * 4º Exercício:
 * Seguindo o resultado do exercício anterior adicione um input em tela e
 * um botão que ao ser clicado, deve adicionar um novo item a lista de nomes.
 * Além disso, o conteúdo do input deve ser apagado após o clique.
 */

function createBox() {
  let boxElement = document.createElement('div');
  let boxContainer = document.querySelector('.app');

  boxElement.style.width = '5rem';
  boxElement.style.height = '5rem';
  boxElement.style.backgroundColor = 'magenta';
  boxElement.style.margin = '1rem';

  boxContainer.appendChild(boxElement);

  boxElement.onmouseover = () => {
    let newColor = getRandomColors();
    boxElement.style.backgroundColor = newColor;
  };
}

function getRandomColors() {
  let letters = '0123456789ABCDEF';

  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function createList() {
  let listContainer = document.querySelector('.demo');
  let ulElement = document.createElement('ul');
  ulElement.id = 'myList';

  let names = ['Cláudio', 'Rayanne', 'Caio', 'Cristiane', 'Rodrigo'];

  for (let i = 0; i < names.length; i++) {
    let liElement = document.createElement('li');
    liElement.innerHTML = names[i];
    ulElement.appendChild(liElement);
  }

  listContainer.appendChild(ulElement);
}

function addName() {
  let listContainer = document.querySelector('#myList');
  let liElement = document.createElement('li');

  let nameInput = document.querySelector('#newName');
  let newName = nameInput.value;

  liElement.innerHTML = newName;
  listContainer.appendChild(liElement);
  nameInput.value = '';
}
