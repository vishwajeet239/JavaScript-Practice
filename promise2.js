function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Set this to `false` to simulate rejection

      if (success) {
        resolve([
          { username: "john", age: 30 },
          { username: "mike", age: 20 },
        ]);
      } else {
        reject("no user found");
      }
    }, 1000);

    console.log("this is synchronous");
  });
}

function add(a,b) {
    return a+b;
}

// getUsers()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.error(reason);
//   });

getUsers()
.then((add)=>{
    console.log(add);
})
.catch((reason)=>{
    console.error(reason);
})
