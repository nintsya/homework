var arreus = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test_test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.po@rohov@yahoo.com"
    },
    {
        userName:"dan",
        lastName:"til",
        email:"d.yahoon@ukr.net"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.sru" 
    },
];

var re = /^[\w._]+@(yahoo|gmail)\.com$/g;
for (let i=0; i<arreus.length; i++) {
    var res = arreus[i].email.match(re);
    console.log(res)
}

