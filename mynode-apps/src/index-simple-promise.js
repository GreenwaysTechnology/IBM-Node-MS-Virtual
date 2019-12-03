//Promise Factory api : Success

function getPromise() {
      return Promise.resolve('done');
}
console.log('start')
getPromise().then(res => console.log(res));
console.log('end');