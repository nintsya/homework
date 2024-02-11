// Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), 
// яка приймає чотири аргументи:


// рядок, до якого буде додаватися символ.
// символ, який буде додаватися.
// Скільки додавати символів
// булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
// Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, 
// то додаєте тільки один символ
// Функція повина повертати новий рядок

function pad (row,symb,quant,bool){

    quant2 = quant - row.length
    if (bool === true) {
        res = getSymbolQuantity(symb,quant2) + row 
    }
    else {
        res = row + getSymbolQuantity(symb, quant2)
    }
    return res
}

function getSymbolQuantity (symb, quant){
    addedRow = ''
    for (let i=0; i<quant; i++) {
        addedRow = addedRow+symb
    }
    return addedRow 
}

console.log(pad('dadm', '-', 7, true))
console.log(pad('123', '+', 5, false))
console.log('Вимоги до завдання написані повністю в розріз з правилами написання вимог до програм - присутні неточності, протиріччя, неоднозначності. \nБудь ласка, зверніть на це увагу для наступних завдань - це наш час')
