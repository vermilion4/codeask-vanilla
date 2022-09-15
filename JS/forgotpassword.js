const userEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
const reset = document.getElementById("resetPwd");
const message = document.getElementById("message");
const errorIcon = document.getElementById("error-icon");
const successIcon = document.getElementById("success-icon");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

errorMessage.style.color = "#DC3545";
errorMessage.style.textAlign = "left";

// FUNCTION TO VALIDATE EMAIL INPUT FORM
function checkEmail() {
 if (userEmail.value === "") {
  userEmail.style.border = "1px solid #002828";
  successIcon.style.visibility = "hidden";
  errorIcon.style.visibility = "hidden";
  // errorMessage.style.visibility = "hidden";
  successIcon.style.visibility = "hidden";
 }
 else if (emailRegex.test(userEmail.value)) {
  userEmail.style.border = "1px solid #198754";
  successIcon.style.visibility = "visible";
  errorIcon.style.visibility = "hidden";
  errorMessage.style.visibility = "hidden";
 } 
 
 else {
  userEmail.style.border = "1px solid #DC3545";
  successIcon.style.visibility = "hidden";
  errorIcon.style.visibility = "visible";
 }
}


// FUNCTION TO 
function sendToken(event) {
 event.preventDefault();
 let returningUserEmail = JSON.parse(localStorage.getItem("email"));
 if (returningUserEmail) {
  // userEmail.style.border = "1px solid #198754";
  successIcon.style.visibility = "visible";
  errorIcon.style.visibility = "hidden";
  errorMessage.style.Color = "#198754"; //green
  errorMessage.innerText = `Reset pin sent to ${userEmail.value}`;
  setTimeout(() => {
   window.location = "resetpassword.html";
  }, 1500);
 }

 else if (!returningUserEmail){
  userEmail.style.border = "1px solid #DC3545";
  successIcon.style.visibility = "hidden";
  errorIcon.style.visibility = "visible";
  errorMessage.innerText = "Email not found";
  setTimeout(() => {
   window.reload();
  }, 1000);
 }

 if (userEmail.value === "") {
  errorMessage.style.color = "#DC3545"; //red
  errorMessage.style.textAlign = "left";
  errorMessage.innerHTML = "Field cannot be empty!!!";
  setTimeout(() => {
   window.location.reload();
  }, 1000);
 }
 else if (!emailRegex.test(userEmail.value)) {
  userEmail.style.border = "1px solid #DC3545";
  successIcon.style.visibility = "hidden";
  errorIcon.style.visibility = "visible";
  errorMessage.style.color = "#DC3545"; //red
  errorMessage.innerText = "Enter a valid Email";
  setTimeout(() => {
   window.location.reload();
  }, 1000);
 }

}

