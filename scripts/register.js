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
    }
}
let pets =[{
            name:"Scooby",
            age:50,
            breed:"Dane",
            gender:"Male",
            service:"Grooming",
            ownersName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:40,
            breed:"Mixed",
            gender:"Male",
            service:"Grooming",
            ownersName:"Shaggy",
            contactPhone:"555-555-5555"
        },
        {
            name:"Bowser",
            age:12,
            breed:"English Bulldog",
            gender:"Male",
            service:"Grooming",
            ownersName:"Seth",
            contactPhone:"619-555-4444"
        },
        {
            name:"Tommy Pickles",
            age:6,
            breed:"Pug",
            gender:"Male",
            service:"Grooming",
            ownersName:"Seth",
            contactPhone:"619-555-4444"
        }
    ];

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