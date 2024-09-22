const { faker } = require('@faker-js/faker');

let getRandomUser =()=> {
  return [
     faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
    
  ];
}
console.log(getRandomUser())