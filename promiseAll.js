const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p1 is resolved');
        resolve(10);
    },1000)
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p2 is resolved');
        resolve(20);
    },2000)
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('p3 is resolved');
        resolve(30);
    },3000)
});

Promise.all([p1,p2,p3]).then((results)=>{
    // const total = results.reduce((a,c)=>a+c);
    console.log(results.reduce((a,c)=>a+c));
});


// promise.all return a single promise that resolves when all the promises have been resolved. the returned promise resolve to an array of results of the input promises
// or it rejects with an error of the first rejected promise