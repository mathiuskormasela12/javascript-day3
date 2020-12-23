const fetch = require('node-fetch');

function editResults(response) {
  return response.map(item => {
    return {
      name: item.name
    }
  })
}

function handleFetch() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if(!response.ok) {
        throw new Error("Failed to Request");
      }
      return response.json();
    })
    .then(response => editResults(response));
}

module.exports = handleFetch;