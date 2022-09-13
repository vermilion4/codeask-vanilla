// VARIABLES
const newPwd = document.getElementById("newpassword");
const repNewPwd = document.getElementById("repnewpassword");
const resetWarning = document.getElementById("renewpassword");
const errorMessage = document.getElementById("error-msg");
const btnReset = document.getElementById("resetps-btn");
const warning = document.getElementById("newpassword-warning");
const repWarning = document.getElementById("repnewpassword-warning");
const guide = document.getElementById("pwd-guide");
const repGuide = document.getElementById("rep-guide");
const errorIcon = document.getElementById("error-icon");
const successIcon = document.getElementById("success-icon");
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

/*
RegEx	Description
^	The password string will start this way
(?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
(?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
(?=.*[0-9])	The string must contain at least 1 numeric character
(?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
(?=.{8,})	The string must be eight characters or longer */


function validatePassword() {
 if (newPwd.value === "" && repNewPwd.value === "") {
  newPwd.style.border = "1px solid #002828";
  repNewPwd.style.border = "1px solid #002828";
  warning.style.display = "none";
  guide.style.display = "block";
  repGuide.style.display = "block";
  repWarning.style.display = "none";
  errorIcon.style.display = "none";
  successIcon.style.display = "none";
 }
 
 else if (newPwd.value.match(passwordRegex)) {
  newPwd.style.border = "1px solid #198754";
  warning.style.display = "none";
  repWarning.style.display = "none";
  repGuide.style.display = "block";
  successIcon.style.display = "block";
  errorIcon.style.display = "none";
 }
 
 else if (!newPwd.value.match(passwordRegex)) {
  newPwd.style.border = "1px solid #DC3545";
  warning.style.display = "block";
  guide.style.display = "none";
  repGuide.style.display = "block";
  repWarning.style.display = "none";
  errorIcon.style.display = "block";
  successIcon.style.display = "none";
 }

 if (repNewPwd.value === newPwd.value) {
  repNewPwd.style.border = "1px solid #198754";
  repWarning.style.display = "none";
  repGuide.style.display = "none";
  successIcon.style.display = "block";
  errorIcon.style.display = "none";
 }
 else if (repNewPwd.value !== newPwd.value){
  repNewPwd.style.border = "1px solid #DC3545";
  repWarning.style.display = "block";
  repGuide.style.display = "none";
  repWarning.innerHTML = "Password does not match";
  errorIcon.style.display = "block";
  successIcon.style.display = "none";
 } 
 }



function resetPassword(event) {
 event.preventDefault();

if (newPwd.value === repNewPwd.value && newPwd.value.match(passwordRegex)) {
 errorMessage.innerHTML = "Your Password has been successfully changed";
 errorMessage.style.backgroundColor = "#198754";
 setTimeout(() => {
   window.location = "signin.html";
  }, 1500);
}

else {
 errorMessage.innerHTML = "Password not changed";
 errorMessage.style.backgroundColor = "#DC3545";
}
setTimeout(() => {
 window.location.reload();
}, 1000);
}