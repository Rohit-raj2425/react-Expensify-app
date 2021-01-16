//
// Object destructuring
//

// const person = {
//     name : 'Rohit',
//     age : 22,
//     location : {
//         city : 'Patna',
//         temp : 19
//     }
// }

// const { name, age } = person

// console.log(`${name} is ${age}.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'ryan holiday',
//     publisher: {
//        // name: 'penguin'
//     }
// }

// const { name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice] = item;

console.log(`A Medium ${itemName} costs ${mediumPrice}.`);

