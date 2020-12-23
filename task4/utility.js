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
    .then(response => {
      if(response.length > 0) {
        return editResults(response);
      } else {
        throw new Error(response);
      }
    });
}

module.exports = handleFetch;