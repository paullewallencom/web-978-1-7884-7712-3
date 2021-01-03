## Video 1
```
npm install lodash

import _ from 'lodash'

console.log(_.random(1,100))

const dogs = [{name: 'Jazz', age: 4}, {name: 'Mr Ruffles', age: 10}, {name: 'Edgar', age: 5}]

console.log(_.map(dogs, (dog) => dog.name))

console.log(dogs)

console.log(_.filter(dogs, (dog) => dog.age > 7))

console.log(_.sortBy(dogs, (dog) => dog.age))

console.log(_.find(dogs, (dog) => dog.name === 'Jazz'))

console.log(_.keys(dogs[0]))

console.log(_.first(dogs))

console.log(_.last(dogs))

const cat = { name: 'Mr Tiddles', address: { houseNumber: 1, zipcode: '12345' }}

console.log(_.get(cat, 'address.houseNumber'))

console.log(_.chain(dogs).map('age').sum().value())


const sayHello = _.throttle(() => console.log('Hello!'), 1000)

// _.times(100000000, sayHello)



#http://stringjs.com/
```

## Video 2

```
npm install moment

import moment from 'moment'


const now = moment()

console.log(now.format())

const party = moment("1999-12-31");
console.log(party.format())
const reallyParty = moment("1999-12-31 23:59:59");
console.log(reallyParty.format())
console.log(reallyParty.format('Mo MMM YYYY H:m:s'))
console.log(reallyParty.isoWeekday())
const lastParty = reallyParty.subtract(1000, 'years')
console.log(lastParty.format())

console.log(party.diff(lastParty, 'months'))

console.log(moment("1999/12/31 23|59|59", 'YYYY/MM/DD HH|mm|ss').format());

console.log(party.fromNow())
console.log(moment().subtract(1.5, 'hours').fromNow())
console.log(moment().subtract(1.5, 'seconds').fromNow())


```

# Video 3

```
npm install superagent superagent-es6-promise

import request from 'superagent-es6-promise'

fetch('https://maps.googleapis.com/maps/api/geocode/json?address=san%20fran&sensor=false')
  .then((response) => response.json())
  .then((x) => console.log(x))

request.get('https://maps.googleapis.com/maps/api/geocode/json?address=san%20fran&sensor=false')
  .then((response) => console.log(response.body))

```
