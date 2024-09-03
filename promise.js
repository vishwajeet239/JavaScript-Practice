let a = new Promise((resolve,reject)=>{
    let success= true;

    if(success) {
        resolve(()=>{
            return 5;
        });
    }
    else {
        reject("operation failed");
    }
})

a.then((value)=>{
    console.log(value());
})
.catch((reason)=>{
    console.error(reason);
})
.finally(()=>{
    console.log("promise is settled");
});