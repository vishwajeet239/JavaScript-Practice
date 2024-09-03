function fetchData(callback) {
    console.log('Testing');
    setTimeout(()=>{
        console.log('data fetched');
        callback();
    },1000)
    console.log('still fetching...');
}

function processData() {
    console.log('processing data');
}

fetchData(processData);