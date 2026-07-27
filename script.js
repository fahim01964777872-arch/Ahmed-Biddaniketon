// =============================
// Ahmed Biddaniketon Website
// script.js
// =============================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Sticky Navbar Shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    }else{
        header.style.boxShadow = "none";
    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

// Scroll Animation

const cards=document.querySelectorAll(
".teacher-card,.branch-box,.founder-card,.notice-box,.gallery-grid img"
);

function reveal(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

}

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".6s";

});

window.addEventListener("scroll",reveal);

reveal();

// Gallery Image Popup

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.left="0";

popup.style.top="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.9)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.zIndex="9999";

popup.innerHTML=`
<img src="${img.src}"
style="
max-width:90%;
max-height:90%;
border-radius:15px;
box-shadow:0 0 30px #fff;">
`;

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

});

});

console.log("Ahmed Biddaniketon Website Loaded Successfully");
