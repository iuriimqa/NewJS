const {greeting,hello} = require('./modules/greeting');
const {sum,multi} = require('./modules/sum')
greeting("John");

hello("Ann");

console.log(sum(5,6));

console.log(multi(6,5));