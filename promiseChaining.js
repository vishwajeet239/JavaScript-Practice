let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(10);
    }, 1000);
});


p.then((value)=>{
    console.log(value);
    return value*2;
}).then((value)=>{
    console.log(value);
})