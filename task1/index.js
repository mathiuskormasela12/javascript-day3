const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];

      let cek = dataDay.find((item) => {
        return item === day;
      });

      if(cek) {
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'));
      }
    }, 3000);
  });
}

// promise handling with then & catch
cekHariKerja('rabu')
  .then(results => console.log(results))
  .catch(err => {
    throw err;
  });
/* 
  Kode diatas berfungsi untuk handling sebuah
  promise dengan menggunakan then and catch.
  Pada bagian action then itu merupakan 
  sebuah method yang di eksekusi ketika
  sebuah promise sudah fullfilled, namun
  untuk method catch akan di eksekusi
  ketika promisenya rejected.
*/

// promise handling with try & catch
async function handlePromise() {
  try {
    const result = await cekHariKerja('rabu');
    console.log(result);
  } catch(err) {
    throw err;
  }
}

handlePromise();
/* 
  Kode diatas berfungsi untuk handling sebuah
  promise dengan menggunakan async await.
  Async await merupakan cara untuk handling
  promise dengan cara yang mirip dengan
  function synchronous sehingga terlihat
  seperti function biasa. Ketika ada
  sebuah function yg memiliki keyword async,
  itu menandakan function tersebut merupakan
  function asynchronous yang di tulis seperti
  function sychronous. Pada keword await berfungsi
  untuk menunggu hingga suatu promise fullfiled
  baru akan mengeksekusi baris kode selanjutnya.
  Blok try akan di jalankan ketika sebuah promise
  sudah fullfiled dan untuk blok catch akan di jalankan
  ketika sebuah promise sudah rejected.
*/

// promise handling with callback
function handlePromiseWithCallback(day, callback) {
  cekHariKerja(day)
    .then(result => callback(null, result)) 
    .catch(err => callback(new Error(err)));
}

handlePromiseWithCallback('rabu', (err, result) => {
  if(!err)
    console.log(result);
  else 
    throw err;
});
/* 
  Kode diatas berfungsi untuk handling sebuah
  promise dengan menggunakan callback. Dimana
  pada function handlePromiseWithCallback terdapat
  sebuah function yang mengembalikan promise lalu
  di handle terlebih dahulu menggunakan
  then & catch lalu result dan error dari
  then & catch tersebut di lempar ke dalam callback
  sebagai parameternya, sehingga pada saat kita
  panggil function handlePromiseWithCallback kita
  harus mengirimkan dua parameter yaitu day
  dan juga callbacknya yang memiliki dua 
  parameter juga yaitu err, ketika promisenya
  reject dan result ketika promisenya fullfiled.
*/