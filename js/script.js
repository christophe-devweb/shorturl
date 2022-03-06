'use strict';
var urlapi = "https://api.shrtco.de/v2/shorten?url=";

var bouton = document.querySelector("#bouton");
var lienshort = document.querySelector("#lienshort");
var copie = document.querySelector("#copie");
var lienlong;
var demandelien;
    
function lance() {
  lienlong = document.querySelector("#basic-url").value;
  demandelien = urlapi + lienlong;
  console.log(demandelien);
  
  fetch(demandelien , {cache: "no-cache"})
    .then((response) => response.json())
    .then(function(details) {
      lienshort.innerHTML = details.result.full_short_link;
    })

}     

function copierpapiers() {
 navigator.clipboard.writeText(lienshort.textContent);
}

document.addEventListener('DOMContentLoaded',function(){

   bouton.addEventListener("click" , lance);
   copie.addEventListener("click" , copierpapiers);

});