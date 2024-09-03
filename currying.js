// function add(x,y,z) {
//     return x+y+z;
// }


function add(x) {
    return function(y) {
        return function(z) {
            return x+y+z;
        }
    }
}


const b=add(1)(2);
console.log(b);
console.log(add(4)(6)(3));