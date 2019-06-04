const square = function (x) {
    return x * x
}

console.log(square(8))

// const squareArrow = (x) => {
//     return x * x
// }

const squareArrow = (x) => x * x

console.log(squareArrow(9))


// getFirstName('Mike Smith') -> "Mike"
const getFirstName = (name) => {
    const split = name.split(" ")
    return split[0]
}

console.log(getFirstName("Mike Smith"))