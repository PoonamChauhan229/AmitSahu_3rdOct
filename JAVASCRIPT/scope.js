var a=20; //global scope 
let b=40; //global scope
const c=90; //global scope

{
    {
        console.log(a) //20
        console.log(b) //undefined
        console.log(c) //undefined
    }
    console.log(a) //20
    console.log(b) //undefined
    console.log(c) //undefined
}

console.log(a) //20
console.log(b) //40
console.log(c) //90


// ________________________________________

// scope >> limit >> boundaries
// {} >> scope
// {
    // block of code >> block scope
// }
console.log("________________________________________")
var p=90
console.log(p)
console.log("________________________________________")
{
    var q=190 
    console.log(p)
    console.log(q)  
    console.log("________________________________________") 
    {
        var r=900
        console.log(p)
        console.log(q)
        console.log(r)
        console.log("________________________________________")
        {
            var s=920
            console.log(p)
            console.log(q)
            console.log(r)
            console.log(s)
            console.log("________________________________________")
        }
    }
}
            console.log(p)
            console.log(q)
            console.log(r)
            console.log(s)
            console.log("________________________________________")


