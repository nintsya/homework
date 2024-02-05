function drawTriangle (h,s) {
    for (let i = 1; i <= h; i++) {
        var p = '';
        for (let j = 1; j <= i; j++) {
            p=p+s
        }
      console.log(p);
    }
}
drawTriangle(14, '+');


function drawTriangle2 (h,s) {
    let i=0
    while (i<h){ 
        let p= s
        let j=0
        while (j<i) {
            p=p+s
            j++
        }
        console.log(p)
        i++
    }
}
drawTriangle2(10, '-');