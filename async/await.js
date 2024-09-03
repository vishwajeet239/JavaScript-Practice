function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: "john", age: 30 },
                { username: "mike", age: 20 },
            ]);
        }, 3000); // 2-second delay to simulate fetching data from an API
    });
}

async function getUserData() {
    let user=await fetchUserData();
    console.log('fetching... please wait 3 sec');
    console.log(user);
    
}

getUserData();