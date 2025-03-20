"use strict";
//quotes changer
let userinfo = document.querySelector(".userinfo");
let textCont = document.querySelector(".textCont");
let leftbtn = document.querySelector(".leftbtn");
let rightbtn = document.querySelector(".rightbtn");

let changer = [
  {
    info: "Brian Hall, 678 Birch St, Anytown, USA",
    review:
      "I was skeptical about joining a gym, but Apex Fitness exceeded my expectations. The facilities are clean and modern, and the trainer are top-notch!",
  },

  {
    info: " Emily Wilson,  123 Main St, Anytown, USA",
    review:
      "I've been going to Apex Fitness for 6 months now, and I'm obsessed! The equipment is top-notch, and the trainers are knowledgeable and supportive. I've seen amazing results!",
  },

  {
    info: "David Lee, 456 Elm St, Anytown, USA",
    review:
      "Apex Fitness helped me lose 30 pounds and gain confidence. The group classes are engaging, and the staff is always willing to lend a hand."
  },

  {
    info: "Sophia Patel,  789 Oak St, Anytown, USA",
    review:
      "Apex Fitness is spotless, and the atmosphere is electric! The front desk staff is friendly, and the personal training sessions are tailored to my needs"
  },

  {
    info: " Mark Davis, 321 Pine St, Anytown, USA",
    review:
      "I've tried several gyms, but Apex Fitness stands out. The variety of equipment and classes is impressive, and the membership fees are reasonable"
  },

  {
    info: "Kevin White, 890 Walnut St, Anytown, USA",
    review:
      " Apex Fitness has convenient hours that fit my busy schedule. The gym is always bustling, but never too crowded."
  }
];

let changerIndex = 0;
function change(){
   userinfo.textContent = changer[changerIndex].info;
     textCont.textContent = changer[changerIndex].review;
}
  leftbtn.addEventListener("click", ()=>{
    changerIndex = (changerIndex - 1 + changer.length) % changer.length;
    change();
  });

    rightbtn.addEventListener("click", () => {
      changerIndex = (changerIndex + 1) % changer.length;
      change();
    });

//Top Button
let topbtn = document.querySelector(".topbtn");
window.addEventListener("scroll", () => {
  if(window.scrollY > 700){
   topbtn.style.display="block";
  }else{
     topbtn.style.display = "none";
  }
});

topbtn.addEventListener("click", () => {
   window.scrollTo(
    {top:0, 
      behavior:'smooth'
    });
});
