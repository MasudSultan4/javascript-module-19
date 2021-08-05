// function factorial(number){
//     let fact = 1;
//     for(let i = 1; i <= number; i++){
//         fact = fact * i
//     }
//     return fact;
// }

// let result = factorial(7);
// console.log(result)







function getFactorial(number){
    let fact = 1;
    for(let i = 1; i <=number; i++){
        fact = fact * i;
    }
    return fact;
} 

console.log(getFactorial(10))