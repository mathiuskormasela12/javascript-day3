function comparePoint(point) {
  return new Promise((resolve, reject) => {
    if(typeof point !== 'number')
      reject('Nilai harus angka');
    else if(point >= 90 && point <= 100) 
      resolve('Nilai anda sangat bagus');
    else if(point >= 80 && point < 90)
      resolve('Nilai anda bagus');
    else if(point >= 75 && point < 80) 
      resolve('Nilai anda cukup');
    else if(point < 75 && point >= 0)
      reject('Nilai anda kurang, belajar lagi ya');
    else 
      reject('Nilai tidak dikenali');
  });
}

async function app(point, callback) {
  try {
    const results = await comparePoint(point);
    callback(results);
  } catch(err) {
    callback(err);
  }
}

module.exports = app;