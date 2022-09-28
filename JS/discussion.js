let asidedis = document.querySelector(".left-col");
let forum = document.querySelector(".forum");


asidedis.addEventListener('mouseover', (event) => {
    forum.style.width= "86%";
});

asidedis.addEventListener('mouseout', (event) => {
    forum.style.width= "100%";
});