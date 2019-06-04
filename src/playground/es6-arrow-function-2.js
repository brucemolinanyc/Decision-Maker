console.log('running')

const add = function(a,b){
    console.log(arguments)
    return a + b
}

console.log(add(55,21))


const user = {
    name: 'Bruce',
    cities: ['NYC', 'Astoria', 'Manhattan'],
    printPlacesLived(){
       return this.cities.map((city) =>  this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacesLived())


const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 4,
    multiply(){
        return this.numbers.map ((el) => el * this.multiplyBy)
    }
}

console.log(multiplier.multiply(multiplier.multiplyBy))