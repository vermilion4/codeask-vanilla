// VARIABLES
const iconFunction = document.querySelectorAll('.iconFunction');
const upperIcons = document.getElementById('upperIcons');
const sideBar = document.getElementById('sideBar');
const questionPage = document.getElementById('questionPage');

// JAVASCRIPT FOR SIDEBAR
sideBar.onmouseover = function() {
  for (let i = 0; i < iconFunction.length; i++) {
      iconFunction[i].style.display = 'block';
  }
  upperIcons.style.alignItems = 'start';
  questionPage.style.width = 'calc(59% - 76px)';
  questionPage.style.marginLeft = 'calc(120px + 76px)';
  
}

sideBar.onmouseout = function() {
  for (let i = 0; i < iconFunction.length; i++) {
      iconFunction[i].style.display = 'none';
    }
    upperIcons.style.alignItems = 'center';
    questionPage.style.width = '59%';
    questionPage.style.marginLeft = '120px';
}

// CLOSE BUTTON FOR MODAL POP UP



let questionList = JSON.parse(localStorage.getItem("question"))  ? JSON.parse(localStorage.getItem("question")) : [];
function display(){

  if (questionList[0]!=null || questionList[0]!=undefined){

  JSON.parse(localStorage.getItem("question")).forEach((element,index) => {

      let node1 = 
      `<div class="question-box">
  
     
      <img src="./IMAGES/OURTEAM/Clement.png" alt="">
  <div class="question-content">
    <div class="question-statement">
      <p>${element.body}</p>
    </div>
    <div class="question-box-tags">
      <ul>
        <li>${element.tags}</li>
      </ul>
      <p>asked 5 hours ago by <span>@${element.title}</span></p>
    </div>
   
  </div>
  </div>
       `

      let eachDisplay = document.createElement("div");
      eachDisplay.classList.add("questions")
      eachDisplay.innerHTML = node1;
      let display = document.querySelector(".questions-wrapper");
      display.appendChild(eachDisplay);        
});
}
}     

