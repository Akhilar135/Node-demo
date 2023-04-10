console.log(__dirname,__filename);

class Person {
    constructor(name, age, job){
        this.name=name;
        this.age=age;
        this.job=job;
    }
    wel(){
        console.log(`Hello I am ${this.name}, I am ${this.age} years old and I am a ${this.job}`);
    }
}
module.exports =Person;