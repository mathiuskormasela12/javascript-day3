const database = require('./database');

function searchApp({ name, age }) {
  return new Promise((resolve, reject) => {
    const results = database.filter(item => item.name === name || item.age === age);

    if(results) 
      resolve(results);
    else 
      reject(results);
  });
}

async function app(data, callback) {
  try {
    const results = await searchApp(data);

    if(results.length === 1) {
      callback(results[0]);
    } else {
      callback(results);
    }
  } catch(err) {
    callback(err);
  }
}

module.exports = app;