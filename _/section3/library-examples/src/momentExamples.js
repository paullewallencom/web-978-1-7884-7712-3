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
