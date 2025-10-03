console.log("________________________________________")
let p=90 //global variable
console.log(p)//90
console.log("________________________________________")
{
    let q=190  //global variable  >> local varaible
    console.log(p)//90
    console.log(q)//190
    console.log("________________________________________") 
    {
        let r=900
        console.log(p)//90
        console.log(q)//190
        console.log(r)//900
        console.log("________________________________________")
        {
            let s=920 //local variable
            console.log(p)//90
            console.log(q)//190
            console.log(r)//900
            console.log(s)//920
            console.log("________________________________________")
        }
    }
        console.log(p)//90
        console.log(q)//190
        console.log(r)//error >> encounter 
        console.log(s)//error
}
            console.log(p)//90
            console.log(q)//error
            console.log(r)//error
            console.log(s)//error 
            console.log("________________________________________")

        // scope >> limit >>reach to that particular variable >> error >> not defined  || not decleared
        // not defined >> error || undefined >> datatype >> value to unassigned varaible