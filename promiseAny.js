const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 rejected');
    reject('error');
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 fulfilled');
    resolve(2);
  }, 2000);
});

const p = Promise.any([p1, p2]);
p.then((value) => {
  console.log('Returned Promise');
  console.log(value);
});

// promise.any returned a promise that resolved first
// if all the promises are rejected then the promise is rejected with a aggregate error object