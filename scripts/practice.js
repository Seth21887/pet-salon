
//objects literal use {}
let student1 = {
    //attr:value,
    firstName:"Astrid",
    lastName:"Batres-Guerrero",
    age:25,
    isActive:true
}

let student2 = {
    firstName:"Seth",
    lastName:"LaFountain",
    age:22,
    isActive:true
}
let student3 = {
    firstName:"Ben",
    lastName:"Vance",
    age:25,
    isActive:false,
    hobbies:["listen to music", "read", "play zelda"],
    address:{
        street: "Palm Street",
        zip: "22796",
        number:"262-k"
    }
}

console.log(student1.firstName);
console.log(student2['lastName']);
console.log(student3.hobbies[1]); //display read
console.log(student3.address.zip); //display zip
console.log(student3["address"]["zip"]);

//challenge: create an object for a client with the attributes first name, last name, subscription type, active or not, credits

let client1 = {
    firstName:"Joseph",
    lastName:"Josephson",
    subType:"Annual",
    isActive:true,
    credits:24.37
}

console.log(client1);

// let students=[{
//     //attr:value,
//     firstName:"Astrid",
//     lastName:"Batres-Guerrero",
//     age:25,
//     isActive:true
// },
// {
//     firstName:"Seth",
//     lastName:"LaFountain",
//     age:22,
//     isActive:true
// },
// {
//     firstName:"Ben",
//     lastName:"Vance",
//     age:25,
//     isActive:false,
//     hobbies:["listen to music", "read", "play zelda"],
//     address:{
//         street: "Palm Street",
//         zip: "22796",
//         number:"262-k"
//     }
// }];

//object constructor

function displayStudent(){
    let tmp=""
    for(let i=0;i<students.length;i++){
        tmp+=`<li>${students[i].firstName}</li>`;
        console.log(tmp);

        document.getElementById("students").innerHTML=tmp;
        
    }
}

displayStudent();

// let p = document.createElement("p");
// console.log(p);
// let text = document.createTextNode("This is a paragraph.");
// console.log(text);
// p.appendChild(text);

// let div=document.getElementById("students");
// div.appendChild(p)