/**
 * Crie uma função que recebe a idade de um usuário e retorna uma Promise que
 * depois de 2 segundos retornará se o usuário é maior de 18 anos ou não. Se
 * o usuário ter mais que 18 anos de idade, o resultado deve cair no .then()
 * Caso contrário, no .catch()
 */

function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

function main() {
  let inputElement = document.querySelector('#age');
  let age = inputElement.value;

  checkAge(age)
    .then((response) => {
      console.log('Maior que 18 anos');
    })
    .catch((error) => {
      console.log('Menor que 18 anos');
    });
}
