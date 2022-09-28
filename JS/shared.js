function hamburger() {
  let menu = document.querySelector(".mobile-nav-menu");
  let hamburgerStroke = document.querySelector(".mobile-nav");

  menu.style.display === "block" ?  menu.style.display = "none" :  menu.style.display = "block";

  // hamburgerStroke.classList.toggle("open");
}


// JAVASCRIPT FOR SIDEBAR
const iconFunction = document.querySelectorAll('.iconFunction');
const upperIcons = document.getElementById('upperIcons');
const sideBar = document.getElementById('sideBar');
const mainPage = document.getElementById('mainPage');
const dashboard = document.getElementById('dashboard-mainpage');

sideBar.addEventListener('mouseover', () => {
for (let i = 0; i < iconFunction.length; i++) {
    iconFunction[i].style.display = "block";
}
upperIcons.style.alignItems = "start";
// answerPage.style.width = "calc(59% - 76px)";
// answerPage.style.marginLeft = "calc(120px + 76px)";

dashboard.style.width = "calc(100% - 76px)";
dashboard.style.marginLeft = "calc(125px + 76px)";
})

sideBar.addEventListener('mouseout', () => {
for (let i = 0; i < iconFunction.length; i++) {
  iconFunction[i].style.display = "none";
}
upperIcons.style.alignItems = "center";
// answerPage.style.width = "59%";
// answerPage.style.marginLeft = "120px";
})

let asidedis = document.querySelector(".left-col");
let ansPage = document.querySelector(".answer-page");

asidedis.addEventListener('mouseover', () => {
ansPage.style.width = "calc(59% - 76px)";
ansPage.style.marginLeft = "calc(120px + 76px)";
  // ansPage.style.width= "86%";
});

asidedis.addEventListener('mouseout', () => {
ansPage.style.width = "59%";
ansPage.style.marginLeft = "120px";
  // ansPage.style.width= "100%";
});

// sideBar.onmouseover = function() {
//   for (let i = 0; i < iconFunction.length; i++) {
//       iconFunction[i].style.display = "block";
//   }
//   upperIcons.style.alignItems = 'start';
//   mainPage.style.width = 'calc(59% - 76px)';
//   mainPage.style.marginLeft = 'calc(120px + 76px)';

//   dashboard.style.width = 'calc(100% - 76px)';
//   dashboard.style.marginLeft = 'calc(125px + 76px)';

// }

// sideBar.onmouseout = function() {
//   for (let i = 0; i < iconFunction.length; i++) {
//       iconFunction[i].style.display = 'none';
//     }
//     upperIcons.style.alignItems = 'center';
//     mainPage.style.width = '59%';
//     mainPage.style.marginLeft = '120px';

//     dashboard.style.width = '100%';
//     dashboard.style.marginLeft = '125px';
// }




// Animation for Shapes GSAP
// Add this to JavaScript Page: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js" integrity="sha512-Mf/xUqfWvDIr+1B6zfnIDIiG7XHzyP/guXUWgV6PgaQoIFeXkJQR5XWh9fqAiCiRCpemabt3naV4jhDWVnuYDQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 
// Classes: {
//   FadeInOut, moveLeft, moveRight, moveTop, moveBottom
// }

let t1 = gsap.timeline({repeat: -1})
t1.to(".fadeInOut", { 
 opacity: 0,
 duration: 7, 
 ease: "power1.out"
})
t1.to(".fadeInOut", {
opacity: 1,
duration:7,
ease: "power1.out"
})


let t2 = gsap.timeline({repeat: -1})
t2.to(".moveLeft", { 
duration: 7, 
 ease: "power1.out",
 xPercent: -80

})
t2.to(".moveLeft", {
duration: 7, 
 ease: "power1.out",
xPercent: 0
})

let t3 = gsap.timeline({repeat: -1})
t3.to(".moveRight", {
duration: 7, 
 ease: "power1.out", 
xPercent: 80
})
t3.to(".moveRight", {
duration: 7, 
 ease: "power1.out",
xPercent: 0
})


let t4 = gsap.timeline({repeat: -1})
t4.to(".moveTop", { 
duration: 7, 
 ease: "power1.out",
yPercent: -80
})
t4.to(".moveTop", {
duration: 7, 
 ease: "power1.out",
yPercent: 0
})


let t5 = gsap.timeline({repeat: -1})
t5.to(".moveBottom", { 
 duration: 7, 
 ease: "power1.out",
 yPercent: 80
})
t5.to(".moveBottom", {
duration: 7, 
 ease: "power1.out",
 yPercent: 0
})

