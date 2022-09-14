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

