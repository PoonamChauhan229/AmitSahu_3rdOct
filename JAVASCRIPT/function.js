// functions >> heart of JS
// resuablity >>  react is famous
// DRY  CODE>> dont repeat yourself

// function functionName(){
    // block of code >> 100 lines 
// }

// memory >> entire function 1000line>> get stored >> occupancny unnecssary 
// create function >> no use >> immediately rid off >> remove || comment-(in future)

// call || invocation ||invoke
// functionName()

// Hoisting >> functions
// function >> outupt >> resusability of that output 
// functions >> 100 lines >>execute >>ms/s/min
// function >> small chunks >>10 functions >> 10lines 0.1-0.2ms
// pass the control/value>> function .... >> few ms
// error handling easy , debugging time to solve any error 
// dry,modular,clean,reusable

// welcome greet grreting
function welcome(){ // define a function >> welcom
    // block of code
    console.log("Welcome to world of Javascript") // 10 times >> 4 lines *10 >> 40 lines
    // console statements
    // perform >> execution >>
}
welcome() // invokation of function
welcome()
welcome()
welcome()
welcome()
welcome()

// function with parameters
// parameters >> define a function >>pass a parameter/variable >>(param1,param2,........paramn)
// arguments  >> invoke a function >>pass a value >> in sync with paramater/varaible

// param1, param2 >> age , email
// arg1,   arg2   >>20   ,test123@gmail.com
// age=20 || email =test123@gmail.com
// age:20 || email:test123@gmail.com

function greetings(name,age,email){ // define a function >>parameter
    // block of code
    // console.log("Welcome to the world of Js",name)
    console.log(name,age,email) // usage of the parameters
}
greetings("Amit",20,"test@gmail.com") //invoke a function >> arguments
greetings("John",34,"john@gmail.com") // user 

// addition: return statement
function add(num1,num2){
    // console.log(2+2) // dynamic output >> 45,3 >>48|| 100,3 >>103
    console.log("Total:",num1+num2) //prints inside the funtion
    return 1                        //prints outside the funtion
    console.log("Total:",num1+num2) //wont exceute neither print will happen
   
}
add(45,3)
add(100,3)
console.log(add(78,2))


// function with paramenter/ without parameter but with return statement

// Types of Function
// Annoymous function
// Normal function
// Arrow Function >> ES6 Function


// Function excetion:
// block of code >> execute ?
// executes >> prints inside the funtion >>  console.log() inside >>clear
// executes >> prints outside the funtion >> return inside        >>clear

// executes >> prints inside || outside the funtion >> console.log() return inside
// rule >> console.log() >> above ur return statement >> retutn last line 
// rule not followed >> not execute || no print


