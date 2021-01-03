import _ from 'lodash'

console.log('Hello lodash!')

console.log(_.random(1,100))

const dogs = [{name: 'Jazz', age: 4}, {name: 'Mr Ruffles', age: 10}, {name: 'Edgar', age: 5}]

console.log(_.map(dogs, 'name'))

console.log(dogs)

console.log(_.reject(dogs, (dog) => dog.age > 7))

console.log(_.sortBy(dogs, (dog) => dog.age))

console.log(_.find(dogs, (dog) => dog.name === 'Jazz'))

console.log(_.keys(dogs[0]))

console.log(_.last(dogs))

const cat = { name: 'Mr Tiddles', address: { houseNumber: 1, zipcode: '12345' }}

console.log(_.get(cat, 'address.houseNumber'))

_.sum(_.map(dogs, 'age'))
console.log(_.chain(dogs).map('age').sum().value())


const sayHello = _.throttle(() => console.log('Hello!'), 1000)

_.times(100000000, sayHello)


