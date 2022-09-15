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
