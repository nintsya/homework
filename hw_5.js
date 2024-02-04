var unit = 'h'
var amount = 90

switch (unit){
    case ('km'): 
        console.log(amount +' кілометрів це '+amount*1000 + ' метрів');
        break
    case ('kg'): 
        console.log(amount +' кілограм це '+amount*1000 + ' грам');
        break
    case ('h'): 
        console.log(amount +' годин це '+amount*60 + ' хвилин');
        break
    default:
        console.log('ви ввели невалідну одиницю виміру');
}
