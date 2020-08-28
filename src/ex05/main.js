/**
 * Crie uma tela com um <input/> que deve receber o nome de um usuário no github.
 * Após digitar o nome de usuário e clicar no botão buscar, a aplicação deve
 * buscar pela API do GH os dados de repositórios do usuário e mostrá-los em tela.
 * URL de exemplo: https://api.github.com/users/01ch01/repos
 * Basta alterar '01ch01' pelo nome de usuário.
 */

function find() {
  let inputElement = document.querySelector('#user');
  let btnElement = document.querySelector('button');

  let user = inputElement.value;
  let ulElement = document.querySelector('.list');

  btnElement.onclick = () => {
    axios
      .get('https://api.github.com/users/' + user + '/repos')
      .then(function (result) {
        console.log(result);
        for (let i = 0; i < result.data.length; i++) {
          let liElement = document.createElement('li');
          liElement.innerHTML = result.data[i].name;
          ulElement.appendChild(liElement);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
