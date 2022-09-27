// VARIABLES
// const iconFunction = document.querySelectorAll(".iconFunction");
const upperIcons = document.getElementById("upperIcons");
const sideBar = document.getElementById("sideBar");
const answerPage = document.getElementById("answerPage");
const dashboard = document.getElementById("dashboard-mainpage");


// JAVASCRIPT FOR SIDEBAR
sideBar.addEventListener('mouseover', (event) => {
  for (let i = 0; i < iconFunction.length; i++) {
      iconFunction[i].style.display = "block";
  }
  upperIcons.style.alignItems = "start";
  answerPage.style.width = "calc(59% - 76px)";
  answerPage.style.marginLeft = "calc(120px + 76px)";

  dashboard.style.width = "calc(100% - 76px)";
  dashboard.style.marginLeft = "calc(125px + 76px)";
})
// sideBar.onmouseover = function () {
//   for (let i = 0; i < iconFunction.length; i++) {
//       iconFunction[i].style.display = "block";
//   }
//   upperIcons.style.alignItems = "start";
//   answerPage.style.width = "calc(59% - 76px)";
//   answerPage.style.marginLeft = "calc(120px + 76px)";

//   dashboard.style.width = "calc(100% - 76px)";
//   dashboard.style.marginLeft = "calc(125px + 76px)";
// };

sideBar.addEventListener('mouseout', (event) => {
for (let i = 0; i < iconFunction.length; i++) {
    iconFunction[i].style.display = "none";
  }
  upperIcons.style.alignItems = "center";
  answerPage.style.width = "59%";
  answerPage.style.marginLeft = "120px";
})
// sideBar.onmouseout = function () {
//   for (let i = 0; i < iconFunction.length; i++) {
//     iconFunction[i].style.display = "none";
//   }
//   upperIcons.style.alignItems = "center";
//   answerPage.style.width = "59%";
//   answerPage.style.marginLeft = "120px";
// };

let asidedis = document.querySelector(".left-col");
let ansPage = document.querySelector(".answer-page");

asidedis.addEventListener('mouseover', (event) => {
    ansPage.style.width= "86%";
});

asidedis.addEventListener('mouseout', (event) => {
    ansPage.style.width= "100%";
});