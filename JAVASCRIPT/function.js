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
    return 100          //static return            //prints outside the funtion
    //console.log("Total:",num1+num2) //wont exceute neither print will happen
}
add(45,3)
add(100,3)
console.log(add(78,2)) // o/p >> variable
let data=add(6,7)
console.log(data)
console.log(data+600)


function sum(num1,num2){
    // console.log(num1+num2)
    let total=num1+num2
    return total
}
let data1=sum(100,400)
console.log(data1)

function multiply(x){
    // print >> data *2
    // data1*2
    console.log(x*2)
}
multiply(data1)

// funct1 >> Subjects >>Sci , Mat, eng >> total
function totalMarks(sci,math,eng){
    total=sci+math+eng
    return total
}

// funct2 >> cal % >>total from function1  
function calPercent(x,y){
    // (marksObtained/totalMarks) *100  >>258/300 *100
    let percent=(x/y)*100
    return percent
}
// funct3 >> print % and total marks scored by student
function printMessage(s1,s2,s3,tm){
    // percentage , totalmarks
    let marksObtained=totalMarks(s1,s2,s3)
    let percentage=calPercent(marksObtained,tm)
    console.log(`My marks is: ${marksObtained} and my Percentage is:${percentage}%`)
}
printMessage(90,89,79,300) //args sci math eng >> total 300




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


