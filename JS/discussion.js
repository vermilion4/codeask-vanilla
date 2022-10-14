let aside = document.querySelector(".left-col");
let forum = document.querySelector(".forum");


aside.addEventListener('mouseover', (event) => {
    forum.style.width= "86%";
});

aside.addEventListener('mouseout', (event) => {
    forum.style.width= "100%";
});