//promise means eventual completion of async operations

const promise1 = new Promise((resolve, reject) => {
  resolve('foo');
});

promise1
.then((value) => {
  console.log(value);
  //expected output: "foo"
  return '1'
})
.then((value) => {
  console.log(value);
})
.then(() => {
  throw new Error('some error')
})
.catch(e => {
  console.log(e)
})
.finally(() => {
  console.log('promise final section')
}) 

console.log('=======', promise1);
