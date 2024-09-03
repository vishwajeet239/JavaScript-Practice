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


Promise.race([p1,p2]).then((value)=>{
    console.log(value);
}).then(()=>{
    console.log('hi');
})

// returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.