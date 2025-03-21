"use strict";
let passOne = document.querySelector("#pass1");
let passTwo = document.querySelector("#pass2");
let userName = document.querySelector("#fname");
let userEmail = document.querySelector("#email");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  //   console.log(passOne.value, passTwo.value);

  if (
    (passOne.value ==="") ||
    (passTwo.value ==="") ||
    (userEmail.value ==="") ||
    (userName.value ==="")
  ) {
    alert("Error: Ensure you fill all fields");
    e.preventDefault();
    userName.focus();
  }

  if(!(userEmail.value.includes("@"))){
    console.log("Ensure your Email includes @");
    e.preventDefault();
    userEmail.focus();
  }
  if (passOne.value !== passTwo.value) {
    alert("Incorrect Password Details");
    e.preventDefault();
    passOne.focus();
  } else {
    localStorage.setItem("Username", userName.value);
    localStorage.setItem("Email", userEmail.value);
    localStorage.setItem("Password", passOne.value);
  }
});
