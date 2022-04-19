
//objects literal use {}
// let student1 = {
//     //attr:value,
//     firstName:"Astrid",
//     lastName:"Batres-Guerrero",
//     age:25,
//     isActive:true
// }

// let student2 = {
//     firstName:"Seth",
//     lastName:"LaFountain",
//     age:22,
//     isActive:true
// }
// let student3 = {
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
// }

// console.log(student1.firstName);
// console.log(student2['lastName']);
// console.log(student3.hobbies[1]); //display read
// console.log(student3.address.zip); //display zip
// console.log(student3["address"]["zip"]);

// //challenge: create an object for a client with the attributes first name, last name, subscription type, active or not, credits

// let client1 = {
//     firstName:"Joseph",
//     lastName:"Josephson",
//     subType:"Annual",
//     isActive:true,
//     credits:24.37
// }

// console.log(client1);

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

//these are local variables, they are only available here.
function Students(fname,lname,age,isActive){
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.isActive=isActive;
}

let student1 = new Students("Astrid","Bates-Guerrero",25,true);
let student2 = new Students("Alexis","Aldrete",25,true);

console.log(student1,student2);

//Exercise:
//Create an object constructor function and two objects
function BasketballPlayers(fname,lname,position, jerseyNumber, team){
    this.firstName=fname;
    this.lastName=lname;
    this.position=position;
    this.jerseyNumber=jerseyNumber;
    this.team=team;
}

let player1 = new BasketballPlayers("Kobe","Bryant","SG",8,"Lakers");
let player2 = new BasketballPlayers("Lebron","James","SF",6,"Lakers");

console.log(player1,player2);

// function displayStudent(){
//     let tmp=""
//     for(let i=0;i<students.length;i++){
//         tmp+=`<li>${students[i].firstName}</li>`;
//         console.log(tmp);

//         document.getElementById("students").innerHTML=tmp;
        
//     }
// }

//displayStudent();

// let p = document.createElement("p");
// console.log(p);
// let text = document.createTextNode("This is a paragraph.");
// console.log(text);
// p.appendChild(text);

// let div=document.getElementById("students");
// div.appendChild(p)