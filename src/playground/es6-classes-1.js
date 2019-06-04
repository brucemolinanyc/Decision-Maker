
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }

    getGreeting(){
        return `Hi, my name is ${this.name} `
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}



class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor()){
            return description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }

    hasLocation(){
        return !!this.location
    }

    getGreeting(){
        let description = super.getGreeting()
        if (this.hasLocation()){
            return description + `  and he lives in ${this.location}`
        }
        return description
    }
}


const me = new Traveler('Bruce Molina', 37, 'NYC')
const other = new Traveler( undefined,undefined , 'nowhere')

// console.log(me.hasMajor())
// console.log(me.getDescription())
// // console.log(other.hasMajor())
// console.log(other.getDescription())
console.log(me.getGreeting())
console.log(other.getGreeting())