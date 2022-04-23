//display the pets in list items **not the best or most common solution**
function displayPet(){
    
    // let petsDiv = document.getElementById("pets"); //this is a div on register.html
    // petsDiv.innerHTML=""; //clear the field
    let tmp=""; //clear the field
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]; //get each pet
        tmp+=`<li>${pet.name} --- ${pet.age}</li>`; //concatenation
        console.log(tmp);
        //This is the code to add elements into the HTML DOM
        // let li = document.createElement("li"); //creating the li tag
        // let text = document.createTextNode(pet.name); //creating the text
        // li.appendChild(text);
        // petsDiv.appendChild(li);
    }
    document.getElementById("pets").innerHTML=tmp;
    
}
//display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        tmp+=`
        <div class="pet">
            <h4>${pet.name}</h4>
            <label>Age: ${pet.age}</label><br>
            <label>Gender: ${pet.gender}</label><br>
            <label>Breed: ${pet.breed}</label><br>
            <label>Owner: ${pet.ownersName}</label><br>
            <label>Contact Phone: ${pet.contactPhone}</label>
        </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}

//display the pets in table
function displayTable(){
    let tr="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
    tr+=`
    
    <tr id="${pet.id}">
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.ownersName}</td>
        <td>${pet.contactPhone}</td>
        <td><button onclick="deletePet(${pet.id});">🗑️</button></td>
    </tr>
    `;
    }
    document.getElementById("pets").innerHTML=tr;
}