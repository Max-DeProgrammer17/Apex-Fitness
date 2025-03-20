"use strict";
//Menu 
let closer = document.querySelector(".closer");
let opener = document.querySelector(".opener");
let menu = document.querySelector(".menu");

opener.addEventListener("click", ()=>{
  menu.style.display="block";
});

closer.addEventListener("click", () => {
  menu.style.display = "none";
});

//shopping cart icon
let shopcount = document.querySelector(".count");
let btns = document.querySelectorAll(".btnn");
btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        shopcount.innerHTML++;
    })
})
console.log(btns);