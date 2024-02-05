function pow (x,y){
    var r=1
    if (y>0){
        for (let i=0; i<y; i++){
            r=r*x
        }
        return r
    }
    if (y<0){
        for (let i=0; i<Math.abs(y); i++){
            r=r/x
        }
        return r
    }
    if (y===0){
        return r
    }
}

console.log(pow(2,5));
console.log(pow(0.25,5));
console.log(pow(-2,-5));