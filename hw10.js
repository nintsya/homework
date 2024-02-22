var str = "Some small row with numAbers 3 8 =7 fot testing with A";
var re = /[^aA]{6,}/g;
var res = str.match(re);
console.log(res);

