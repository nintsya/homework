// fruits = ['appple', 'pear']
// for (i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// function add (q,y) {
//     return q+y
// }

function factorial (x) {
    for (let i=1; i<=x; i++) {
        x=x*factorial(x)
        return x
    }
}

console.log(factorial(5))
