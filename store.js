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


let arr = [];

//shopping cart icon
let shopcount = document.querySelector(".count");
let btns = document.querySelectorAll(".btnn");
btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        shopcount.innerHTML++;
        let cart = btn.closest(".cart");
      let nname = cart.querySelector("h2").textContent;
      let price = cart.querySelector("h3").textContent;

      console.log( nname, price);

        
    })
});



console.log(cart);