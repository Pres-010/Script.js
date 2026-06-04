//? Type conversion
// console.log(Number("2.5"));
// console.log(parseInt("2.34"));
// console.log(parseFloat("2.34px"));
// console.log(+"23");
// console.log(String(2.43));
// console.log(Boolean("Hello"));

// Falsy values: 0 undefined null NaN ''

//? Type coersion
// console.log(78 * "12");
// console.log(23*23);
// function AddNumbers(a = 32, b = 23) /*function parameters*/ {
//     return a+b
// }
// AddNumbers() /* function arguments*/
// console.log(AddNumbers());
// for (let i = 0; i <= 3; i++) {
//     console.log(i);
    
    
// }
const btn = document.querySelector("button")
const p = document.querySelector("p")
const CalculateAge = function(country) {
        console.log(this);
        
        this.age = 2026 - this.birthYear
        console.log(`${this.firstName} is ${this.age} years old, and is from ${country}`);
        
    }
let Kizito = {
    firstName: "UMUGWANEZA",
    birthYear: 2009,
}
CalculateAge.call(Kizito, "USA")
const Chris = {
    firstName: "BAMBE",
    birthYear: 2011,
}
CalculateAge.call(Chris, "Rwanda")

const presley = {
    firstName: "Mukunzi",
    birthYear: 2010,
}

btn.addEventListener("click", CalculateAgePresley)
function CalculateAgePresley() {
    CalculateAge.call(presley, "Uganda")
}
//? Timers

// setTimeout(() => {
//     console.log("Run after 3 seconds"); 
// }, 3000)
//  let timer = setInterval(() => {
//     console.log(Date.now());  
// }, 1000)
// clearInterval(timer)
// setInterval(() => {
//     p.textContent = new Date().toLocaleString()
// }, 1000);
    
    let Time = 20
    let timer = setInterval(() => {
        if (Time === -1) {
          alert("The quiz has ended!")
          clearInterval(timer)
          return
        }
    const Minutes = Math.trunc(Time/60)
    const Seconds = Time % 60
    p.textContent = `${Minutes}:${Seconds}`
    Time--
    }, 1000); 
//? first class and high order functions
// A first class function is a feature in JavaScript 
// that enables a function to behave as a regular value 
// and to be passed in other functions as an argument, and to be returned inside other functions
// A high order function is the function that receives a first class function as an argument, or returns it.
// A function without a name is called an anonymous function
// let name = " Pr es le y "
// console.log(name);
// let replaceAllEmptySpaces = (str) => {
//  return str.replaceAll(" ", "")
// }
// let modifiedStr = (fn, str) => {
//     return fn(str)
// }
// let lastString = modifiedStr(replaceAllEmptySpaces, name)
// console.log(lastString);
// let arr = [
//     { firstName: "Kizito", Age: 17, isSmart: true},
//     { firstName: "Chris", Age: 15, isSmart: false}
// ]
// arr.forEach( (ar, index, arr) => {console.log(ar);
//     console.log(index);
//     console.log(arr);
    
    
// })
const arr1 = [1,2,3,4,5]
let arr2 = []; 
for (const arr of arr1) {
    arr2.push(arr**2)    
}
console.log(arr2);
