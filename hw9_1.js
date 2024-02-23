arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

function myComp() {
   return 0.5-Math.random();
}

console.log("before my sort: " + arr);
arr.sort(myComp)
console.log("after my sort: " + arr);