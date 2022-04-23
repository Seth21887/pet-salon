let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"787",
        zip:"23456"
    },
    hours:{
        open:"9:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[]
}

let c=0; //this is a counter var
//name,age,gender,breed,service,owner name, contact phone
//this is the constructor model
function Pet(name,age,breed,gender,service,ownersName,contactPhone){
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.gender=gender;
    this.service=service;
    this.ownersName=ownersName;
    this.contactPhone=contactPhone;
    this.id=c++; //increase the var 1 every time its used
}

//get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtPhone");

function isValid(aPet){
    //return false value when the pet is not valid
    //return true value if the pet is valid
    let valid=true;
    if(aPet.name.length==0){ //this means name is blank, not valid
        valid=false;
        console.error("Invalid name");
    }
    if(aPet.service.length==0){
        valid=false;
        console.error("Invalid service");
    }
    if(aPet.age.length==0){
        valid=false;
        console.error("Invalid age");
    }
    return valid; //it could be true or false
}
function register(){
    //create the pet
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    if(isValid(thePet)){
    //push the pet into the array
    petSalon.pets.push(thePet);
    displayTable();
    //clear the inputs
    clearInputs();
    }
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
}

function deletePet(petID){
    //previous actions
        //we need an id in the pet constructor
        //we need a delete button in the HTML
    console.log("Deleting " + petID);
    //in this function
        //travel the array (for loop)
    let deleteIndex;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(petID==pet.id){
            deleteIndex=i;
            console.log("I found it in position: " + i);
        }
        
        //find the id (if function)
        //get the position in the array (store in a variable)
    }
        
        //remove from the array (splice())
        petSalon.pets.splice(deleteIndex,1);
        //remove from the HTML (remove())
        document.getElementById(petID).remove();
        //display to the user a message
}

function searchPet(){
    //previous actions
        //add an inputSearch on the html
        //add a search button on the HTML
        //get the string
        let searchString = document.getElementById("txtSearch").value;
        console.log("Searching " + searchString);
    //in this function
        //travel the array (for loop)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(searchString.toLowerCase() === pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("highlight");
        }else{
            document.getElementById(pet.id).classList.remove("highlight");
        }
    }
        //find the id (if function)
        //highlight the result
}

let scooby = new Pet("Scooby",50,"Dane","Male","Grooming","Shaggy","555-555-5555");
let scrappy = new Pet("Scrappy",40,"Mixed","Male","Grooming","Shaggy","555-555-5555");
let bowser = new Pet("Bowser", 12, "English Bulldog", "Male", "Grooming", "Seth", "619-555-4444");
let tommyPickles = new Pet("Tommy Pickles",6,"Pug","Male","Grooming","Seth","619-555-4444");
petSalon.pets.push(scooby,scrappy,bowser,tommyPickles);

displayTable();

console.log(scooby,scrappy,bowser,tommyPickles);

//create 3 pets

// let pets =[{
//             name:"Scooby",
//             age:50,
//             breed:"Dane",
//             gender:"Male",
//             service:"Grooming",
//             ownersName:"Shaggy",
//             contactPhone:"555-555-5555"
//         },
//         {
//             name:"Scrappy",
//             age:40,
//             breed:"Mixed",
//             gender:"Male",
//             service:"Grooming",
//             ownersName:"Shaggy",
//             contactPhone:"555-555-5555"
//         },
//         {
//             name:"Bowser",
//             age:12,
//             breed:"English Bulldog",
//             gender:"Male",
//             service:"Grooming",
//             ownersName:"Seth",
//             contactPhone:"619-555-4444"
//         },
//         {
//             name:"Tommy Pickles",
//             age:6,
//             breed:"Pug",
//             gender:"Male",
//             service:"Grooming",
//             ownersName:"Seth",
//             contactPhone:"619-555-4444"
//         }
//     ];

console.log(petSalon);

function displaySalonInfo(){
    document.getElementById("salon").innerHTML=`<p>${petSalon.name} <br>Address: ${petSalon.address.number} ${petSalon.address.street} ${petSalon.address.zip} <br>Hours of Operation: ${petSalon.hours.open} to ${petSalon.hours.close}</p>`;
}

displaySalonInfo();


function displayPetsNames(){
    for(let i=0;i<pets.length;i++){
        console.log(`<li>${pets[i].name}</li>`);

        document.getElementById("pets").innerHTML+=`<li>${pets[i].name}</li>`;

    }
}

displayPetsNames();