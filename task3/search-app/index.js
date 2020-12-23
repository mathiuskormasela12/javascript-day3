const app = require('./app');

const search = {
  name: "Agung"
};

app(search, results => {
  console.log(results);
});


