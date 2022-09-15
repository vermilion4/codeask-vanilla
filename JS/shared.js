function hamburger() {
    let menu = document.querySelector(".mobile-nav-menu");
    let hamburgerStroke = document.querySelector(".mobile-nav");

    menu.style.display === "block" ?  menu.style.display = "none" :  menu.style.display = "block";

    // hamburgerStroke.classList.toggle("open");
  }


  // JAVASCRIPT FOR SIDEBAR
function hideIconFunction() {
 let iconFunction = document.querySelectorAll('.iconFunction');
 // for (let i = 0; i < iconFunction.length; i++) {
 //  iconFunction[i].style.display = 'none';
 // }
 iconFunction.forEach(icon => {
 icon.style.display = 'none';
});

document.getElementById('upperIcons').style.alignItems = 'center';
}

function displayIconFunction() {
 let iconFunction = document.querySelectorAll('.iconFunction');
 iconFunction.forEach(icon => {
 icon.style.display = 'flex';
});

document.getElementById('upperIcons').style.alignItems = 'start';
}


  
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


