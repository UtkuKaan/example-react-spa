//
// Object destructuring
//

// const person = {
//     name: 'Utku',
//     age: '18',
//     location: {
//         city: 'Ankara',
//         temp: 22
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (temperature && city) {
//     console.log(`It's ${temperature}C in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee, , mediumPrice] = item;
console.log(`A medium ${hotCoffee} costs ${mediumPrice}.`);