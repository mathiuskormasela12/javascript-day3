const handleFetch = require('./utility');

async function getAllUsersName(callback) {
  try {
    const results = await handleFetch()
    callback(results);
  } catch(err) {
    callback(err);
  }
}


module.exports = getAllUsersName;