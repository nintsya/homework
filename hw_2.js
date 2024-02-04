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
prompt.get(schema, function (err, result) 
{
if (result.age>100) console.log ("Ви щасливчик! Вам вже дуже багато, але в душі 18")
else
  switch (result.age % 10){
    case 1:
      console.log('Вам ' + result.age + ' рік');
      break
    case 2,3,4:
      console.log('Вам ' + result.age + ' роки');
      break
    case 5,6,7,8,9,0:
      console.log('Вам ' + result.age + ' років');
    default:
      console.log('На жаль, ви ввели невід\'ємне число, літери чи спецсимволи');
  }
}
);

