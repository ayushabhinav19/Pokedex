import data from "./data.js"


let mainbox = document.getElementById("mainbox");
let card=document.getElementById("pokemoncard");

let code = "";
let nam=[];

for (let pokemon of data) {
  
  let name = pokemon.name.english;
  nam.push(name)
  let image = pokemon.image.hires;
  let type = pokemon.type[0];
  
  code =
    code +
    `<div id="${name}" class="cardbox">
    <div id="image">
        <img src="${image}" alt="${name}">
    </div>
    <div id="characterdetail" class="charactername">
        <div class="${type}">
            Name: ${name}<br>Type: ${type}
        </div>
    </div>
</div>
`;

}

mainbox.innerHTML = code;
const inputbox=document.getElementById("search");

function inputEvent(event){
    const value=event.target.value
    if(value===''){
      window.location.reload();
    }
      
    code=''
      
    for(let i=0;i<nam.length;i++){
        let charname=data[i].name.english;
        let chartype=data[i].type[0];
        let charimg=data[i].image.hires
            if(value==nam[i]){
              mainbox.innerHTML = "";
                code =
                    code +
                        `<div id="${charname}" class="cardbox">
                            <div id="image">
                                 <img src="${charimg}" alt="${charname}">
                              </div>
                            <div id="characterdetail" class="charactername">
                            <div class="${chartype}">
                               Name: ${charname}<br>Type: ${chartype}
                             </div>
                          </div>
                      </div>`;

                    }
            else{
              mainbox.innerText=value+" NOT FOUND"
            }
                  
    }
    mainbox.innerHTML = code;
  };
  
  
inputbox.addEventListener("input",inputEvent);