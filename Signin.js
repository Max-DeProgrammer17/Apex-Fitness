"use strict";
let userEmail = document.querySelector("#email");
let password = document.querySelector("#pass");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) =>{
    if(userEmail.value === "" || password.value == ""){
        alert("Error - Please Ensure You Fill all fields");
        e.preventDefault();
        userEmail.focus();
    }else{
        localStorage.setItem("UserEmail.SignIn", userEmail.value);
        localStorage.setItem("Password.SignIn", password.value);
    }
})