var prompt = require('prompt');
var schema = {
  properties: {
    age: {
      required: true,
      description: "Скільки вам років?"
    }
  }
};

prompt.start();
prompt.get(schema, function (err, result) {
  if (result.age>100) {
    console.log ("Ви щасливчик! Вам вже дуже багато, але в душі 18")
  }
  else {
    switch (result.age % 10){
      case 1:
        console.log('Вам ' + result.age + ' рік');
        break
      case 2:
      case 3:
      case 4:
        console.log('Вам ' + result.age + ' роки');
        break
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
        console.log('Вам ' + result.age + ' років');
        break
      default:
        console.log('На жаль, ви ввели невід\'ємне число, літери чи спецсимволи');
    }
  }  
});

