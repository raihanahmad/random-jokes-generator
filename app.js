// TARGET UI BTN AND ADD EVENT
document.getElementById('btn').addEventListener('click', jokesGenerator);

// JOKES GENERATOR FUNCTION
function jokesGenerator(e) {
  // TARGET AND GET INPUT VALUE
  const numberOfJokes = document.getElementById('number').value;

  // CREATE NEW XHR OBJECT
  const xhr = new XMLHttpRequest();

  // OPEN EXTERNAL API
  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  // ONLOAD
  xhr.onload = function () {
    if (this.status === 200) {
      const jokes = JSON.parse(this.responseText);

      let output = '';

      if (jokes.type === 'success') {

        jokes.value.forEach(function (joke) {
          output += `
            <li>${joke.joke}</li>
          `;
        });
      } else {
        output += `<li>Somethig wrong</li>`;
      }

      // TARGET UI AND ADD API DATA
      document.getElementById('joke-list').innerHTML = output;
    }
  }

  // SEND
  xhr.send();

  e.preventDefault();
}