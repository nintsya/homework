// Написати свою реалізацію функції isNaN. 

function myIsNaN(x){
    return (0*x) !== 0
}

function TestCases () {
    cases=[1, "wqe", "12", true, '12', '37,5', '37.5', undefined, null, NaN, 0, '-']
    for (let i=0; i<cases.length; i++){
        console.log( myIsNaN(cases[i])===isNaN(cases[i]), cases[i])
    }
}

TestCases()