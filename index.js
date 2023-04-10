const Person =require('./person');
const Logger = require('./logger');

const logger = new Logger();

logger.on('message',(data) => console.log('called listener' , data));

logger.log('Hello');

const pers = new Person('Akhila R', 23, 'Associate Software Engineer');
pers.wel();