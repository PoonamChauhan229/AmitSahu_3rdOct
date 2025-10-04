// Composite Datatypes
//  Arrays & Objects
//  arrays and objects >>its is the same

// arrays >> [] >> hetrogrnous datatypes mix >> str, num, boolean, [] ,{}
// index no >> start>0 end>length-1
// 5 items >> countable
// 1000 items >> length >> property
// access >> 

// methods  >>() .methodName() >> functions
// property >>   .propertyName

let arr=[2,"23",true,"true",[1,2,3]]
     //  0  1    2     3       4   
arr[3] //true
arr[1] //23


arr[0]=90 
arr[6]=100
// ,,,,,,1-98 >> undefined
arr[99]=100
console.log(arr)
console.log(arr)
console.log(arr[4][0])
console.log(arr.length)
console.log(typeof(arr)) // object

// {
//     0:2,
//     1:23,
//     2:true
// }
// Objects >> key :value
// {
//     key:value,...,,,,n 
// }
// keys are not repeated , always unique
// values are not unique
let stuObj={
    studenName:"Amit",
    age:20,
    location:"new Panvel",
    isStudent:true,
    hobbies:["singing","coding","dancing"],
    first_name:"test1323",
    "last name":"test456", // using dot notation ?,
    20:"yuyuyu",
    marks:{
        math:67,
        sci:90,
        evs:100
    }
}
console.log(stuObj)
// Accessing dot operator || dot notation
// .
console.log(stuObj.hobbies)
console.log(stuObj.first_name)

//
console.log(stuObj["last name"]) 
console.log(stuObj[20])


// Adding
// dot opertaor || square bracket
stuObj.nickName="amitSahu" //key =nickName , value amitSahu


stuObj["city Name"]="Mumbai"
stuObj[404]="Notfound Error"
console.log(stuObj)

// Updating
// Existing value >> update
stuObj[404]="Not Found"
stuObj.first_name="tet789"
console.log(stuObj)

// Adding ||Updating >> very thin line 
// no exitence =add || existence =update

// Deleting  >> delete keyword
delete stuObj[20]
console.log(stuObj)


// Nested Objects
console.log(stuObj.marks.evs)
stuObj.marks.physical=80
console.log(stuObj.marks)

//  values which assign to a varaible
let a1=null
let b1=undefined
let str=" "
console.log(a1,b1,str)
// datatypes > primtive +composite + Trivial (undefined and null)
// scope
// hoisting
// keywords varibles
// functions >>