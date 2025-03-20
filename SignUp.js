"use strict";
 let passOne = document.querySelector("#pass1");
  let passTwo = document.querySelector("#pass2");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
 
//   console.log(passOne.value, passTwo.value);
  if (passOne.value !== passTwo.value) {
    alert("Incorrect Details");
    e.preventDefault();
    passOne.focus();
    
  }
});
