let myPromise = function () {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/01ch01');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(log(JSON.parse(xhr.responseText)));
      } else {
        reject('Request error');
      }
    };
  });
};

myPromise()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.warn(error);
  });
