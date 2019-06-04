var nameVar = 'Andrew';
nameVar = 'Mike'
console.log('nameVar', nameVar)

// you can reassign and that can cause problems in code that gets busy

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
// nameConst = 'Gunther'

console.log('nameConst', nameConst)

//Block scoping

var fullName = 'Jen Mead'
let firstName

if (fullName){
     firstName = fullName.split(' ')[0];
     console.log(firstName);
}
console.log(firstName);
