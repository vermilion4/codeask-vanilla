function hamburger() {
    let menu = document.querySelector(".mobile-nav-menu");
    let hamburgerStroke = document.querySelector(".mobile-nav");

    menu.style.display === "block" ?  menu.style.display = "none" :  menu.style.display = "block";

    // hamburgerStroke.classList.toggle("open");
  }