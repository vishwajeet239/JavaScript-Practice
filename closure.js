function greet(name) {
    return function you(message){
        console.log(name + ' ' + message);
    }
}

let greeting = greet('john');
greeting('how are you');