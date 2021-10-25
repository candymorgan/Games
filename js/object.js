

// let fun = function(){
//     let data = {
//         fname: "Adimchinobi",
//         lname: "Uju-Azorji",
//         age: "16",
//         discipline: "computer science"
        
//     }
//     //hoe to assign a new value to an object
//     data.age = 20; // OR data["age"] = 20;
//     // console.log(data["fname"]); OR console.log(data.fname);
//     //how to know the type of variable, ie string,int etc..
//     console.log(typeof parseInt("age"));
// }

// fun();


//How to declare a fuction inside an object.
let data = {
    fname: "Adimchinobi",
    lname: "Uju-Azorji",
    age: "16",
    discipline: "computer science",
    // using an arrow function
    // correction: ()=>{
    //     let num1 = 2;
    //     let num2 = 3;
    //     let sum = num1 + num2;
    //     console.log(sum);
    // },
    display: function(){
        console.log(this);
    }

    
    
}
//The right way to declare an arrow function.
let correction = ()=>{
    let num1 = 2;
    let num2 = 3;
    let sum = num1 + num2;
    console.log(sum);
}
data.display(); 
correction();