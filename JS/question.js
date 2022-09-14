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
  setTimeout(() => {
   icon.style.display = 'flex';
  }, 200)
});

document.getElementById('upperIcons').style.alignItems = 'start';
}