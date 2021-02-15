function displayPage(){
let num = document.getElementById("numberip").value;
if(num>2){
  prompt("Sorry, the requested page is not available. There are only two pages to display!");
}
else{
displayBooks(num);
}
}

async function displayBooks(pageNum){
    try{         
        let response = await fetch(`https://www.anapioficeandfire.com/api/books?page=${pageNum}&pageSize=10`);
        let data = await response.json();
        let output = document.getElementById("container");
        output.innerHTML = "";
        output.style.border = "2px solid rgb(216, 47, 47)";
        data.forEach(element => {
        output.innerHTML += "Book Name: " +
        element["name"] + "<br>" + "Author: " + element["authors"][0] + "<br>" + "ISBN: " + element["ISBN"] + "<br>" + "Pages: " + element["numberOfPages"] + "<br>" +
        "URL" + element["url: "] + "<br>" + "country: " + element["country"] + "<hr>";
        });
        }   
  catch(error){
    console.log(error);
  }  
}

async function displayCharacters(){
  try{
    let response = await fetch(`https://www.anapioficeandfire.com/api/characters`);
    let data = await response.json();
    let output = document.getElementById("container");
    output.innerHTML = "";
    output.style.border = "2px solid rgb(216, 47, 47)";
    data.forEach(element =>{
      output.innerHTML += "Character Name: " + element["aliases"][0] + "<br>" +
      "allegiances: " + element["allegiances"][0] + "<br>" + 
      "gender: " + element["gender"] + "<br>" +
      "playedBy: " + element["playedBy"] + "<br>" +
      "culture: " + element["culture"] + "<hr>";
    })
  }
  catch(error){
    console.log(error);
  }
}

async function displayCharacter(specificCharacter){
  try{
    let response = await fetch(`https://www.anapioficeandfire.com/api/characters/${specificCharacter}`);
    let data = await response.json();
    let output = document.getElementById("container");
    output.innerHTML = "";
    output.innerHTML += "Character Name: " + data["aliases"][0] + "<br>" +
      "allegiances: " + data["allegiances"][0] + "<br>" + 
      "gender: " + data["gender"] + "<br>" +
      "playedBy: " + data["playedBy"] + "<br>" +
      "culture: " + data["culture"];    
  }
  catch(error){
    console.log(error);
  }
}

async function displayHouses(){
  let response = await fetch(`https://www.anapioficeandfire.com/api/houses`);
  let data = await response.json();
  let output = document.getElementById("container");
  output.innerHTML = "";
  output.style.border = "2px solid rgb(216, 47, 47)";
  data.forEach(element => {
    output.innerHTML += "Name: " + element["name"] + "<br>" + 
    "Region: " + element["region"] + "<br>" + 
    "Heir: " + element["heir"] + "<br>" +
    "Current Lord: " + element["currentLord"] + "<br>" +
    "Arms: " + element["coatOfArms"] + "<br>" +
    "Seats: " +  element["seats"][0] + "<br>" +
    "Overlord: " + element["overlord"] + "<hr>";
  })
}

async function displayHouse(specificHouse){
  let response = await fetch(`https://www.anapioficeandfire.com/api/houses/${specificHouse}`);
  let data = await response.json();
  let output = document.getElementById("container");
  output.innerHTML = "";
  output.innerHTML += "Name: " + data["name"] + "<br>" + 
    "Region: " + data["region"] + "<br>" + 
    "Heir: " + data["heir"] + "<br>" +
    "Current Lord: " + data["currentLord"] + "<br>" +
    "Arms: " + data["coatOfArms"] + "<br>" +
    "Seats: " +  data["seats"][0] + "<br>" +
    "Overlord: " + data["overlord"];
  }

