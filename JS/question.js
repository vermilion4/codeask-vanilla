// VARIABLES
const iconFunction = document.querySelectorAll('.iconFunction');
const upperIcons = document.getElementById('upperIcons');
const sideBar = document.getElementById('sideBar');
const questionPage = document.getElementById('questionPage');
const questionHeader = document.getElementById('questionHeader');
let loginModal = document.querySelector('.modal');
const session = localStorage.getItem('session')


window.addEventListener('load', function () {
  let avatar =  document.querySelector('.avatar');
  display()
  
  const {name} = JSON.parse(session)
  // console.log(session)
  const arrayName = name.split(" ")

  avatar.setAttribute("src", `https://ui-avatars.com/api/?name=${arrayName.join("+")}`)


})




// render modal only if user is not signed in or registered

if (session == null) {
  loginModal.style.display = "block"

} else {
  loginModal.style.display = "none"
}




// JAVASCRIPT FOR SIDEBAR
sideBar.onmouseover = function () {
  for (let i = 0; i < iconFunction.length; i++) {
    iconFunction[i].style.display = 'block';
  }
  upperIcons.style.alignItems = 'start';
  questionPage.style.width = 'calc(59% - 76px)';
  questionPage.style.marginLeft = 'calc(120px + 76px)';
  questionHeader.style.width = 'calc(59% - 76px)';
  questionHeader.style.marginLeft = 'calc(120px + 76px)';

}

sideBar.onmouseout = function () {
  for (let i = 0; i < iconFunction.length; i++) {
    iconFunction[i].style.display = 'none';
  }
  upperIcons.style.alignItems = 'center';
  questionPage.style.width = '59%';
  questionPage.style.marginLeft = '120px';
  questionHeader.style.width = '59%';
  questionHeader.style.marginLeft = '120px';
}

// CLOSE BUTTON FOR MODAL POP UP



let questionList = JSON.parse(localStorage.getItem("question")) ? JSON.parse(localStorage.getItem("question")) : [];
function display() {
  console.log("display is live")



  if (questionList[0] != null || questionList[0] != undefined) {

    // create main wrapper for questions
    const mainWrapper = document.createElement("div")

    // create li element




    // looping through question list
    questionList.reverse().forEach((question) => {

      // create wraper for individual question
      const inWrapper = document.createElement("div")


      const { author, title, tags } = question;

      const arrayAuthor = author.split(" ")

      const arrayTags = tags.split(" ");
    

      inWrapper.innerHTML = `
      <div class="questions">
            <div class="question-box">
              <img src="${`https://ui-avatars.com/api/?name=${arrayAuthor.join("+")}`}" alt="" />
              <div class="question-content">
                <div class="question-statement">
                  <p>
                   ${title}
                  </p>
                </div>
                <br />
                <br />
                <div class="question-box-tags">
                  <ul>
                  ${arrayTags.map((tag)=>{

                    return `<li>${tag}</li>`

                  } ).join("")}
                  </ul>
                  <p>asked 9 hours ago by <span>@${author}</span></p>
                </div>
                
              </div>
            </div>
          </div>
      `
      // append in-wrapper to main-wrapper
      mainWrapper.appendChild(inWrapper)
    })

    // send to dom
    let display = document.querySelector(".questions-wrapper");
      display.appendChild(mainWrapper);




  //   JSON.parse(localStorage.getItem("question")).forEach((element, index) => {

  //     let node1 =
  //       `<div class="question-box">
  
     
  //     <img src="./IMAGES/OURTEAM/Clement.png" alt="">
  // <div class="question-content">
  //   <div class="question-statement">
  //     <p>${element.title}</p>
  //   </div>
  //   <div class="question-box-tags">
  //     <ul>
  //       <li>${element.tags}</li>
  //     </ul>
  //     <p>asked 5 hours ago by <span>@${element.author}</span></p>
  //   </div>
   
  // </div>
  // </div>
  //      `

  //     let eachDisplay = document.createElement("div");
  //     eachDisplay.classList.add("questions")
  //     eachDisplay.innerHTML = node1;
  //     let display = document.querySelector(".questions-wrapper");
  //     display.appendChild(eachDisplay);
  //   });
  }
}


