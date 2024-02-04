function drawTriangle (h,s) {
    for (let i = 1; i <= h; i++) {
        var p = '';
        for (let j = 1; j <= i; j++) {
            p=p+s
        }
      console.log(p);
    }
}
drawTriangle(14, '++');


