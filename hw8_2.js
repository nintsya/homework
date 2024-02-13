// Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
//  var services = {
//  	"стрижка": "60 грн",
//  	"гоління": "80 грн",
//  	"Миття голови": "100 грн"
//  };
//  "Послуги" можуть додаватися по ходу роботи:
//  services['Розбити скло'] = "200 грн";

const { values } = require("lodash")

//const { sum, max } = require("lodash");

//  створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
//  створити метод minPrice() - який повертає мінімальний price
//  створити метод maxPrice() - який повертає максимальний price

var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100,
    price: function () {
        let s=0
        let values = Object.values(this)
        for (let i=0; i<values.length; i++){
            if (isNaN(values[i])) {
                continue
            }
            s+=values[i]
        }
        return s
    } , 
    maxPrice: function () {
        let mx=0
        let values = Object.values(this)
        for (let i=0; i<values.length; i++){
            if (isNaN(values[i])) {
                continue
            }
            if (mx<values[i]) {
                mx=values[i]
            }
        }
        return mx
    }  ,
    minPrice: function () {
        let mn = Infinity
        let values = Object.values(this)
        for (let i=0; i<values.length; i++){
            if (isNaN(values[i])) {
                continue
            }
            if (mn>values[i]) {
                mn=values[i]
            }
        }
        return mn    
    } 
}

services['Розбити скло'] = 2000;
services['coffee'] = 30;
console.log (services.price());
console.log (services.maxPrice());
console.log (services.minPrice());
