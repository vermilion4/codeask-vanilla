// VARIABLES
const newPwd = document.getElementById("newpassword");
const repNewPwd = document.getElementById("repnewpassword");
// const resetWarning = document.getElementById("renewpassword");
const errorMessage = document.getElementById("error-msg");
const btnReset = document.getElementById("resetps-btn");
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

/*
RegEx	Description
^	The password string will start this way
(?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
(?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
(?=.*[0-9])	The string must contain at least 1 numeric character
(?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
(?=.{6,})	The string must be six characters or longer */


function validatePassword() {
 if (newPwd.value === "" && repNewPwd.value === "") {
  newPwd.style.border = "1px solid #002828";
  repNewPwd.style.border = "1px solid #002828";
 }
 
 else if (newPwd.value === repNewPwd.value && newPwd.value.match(passwordRegex)) {
  newPwd.style.border = "3px solid #34a853";
  repNewPwd.style.border = "3px solid #34a853";
 }
 
 else {
  newPwd.style.border = "3px solid #ea4335";
  repNewPwd.style.border = "3px solid #ea4335";
 }
 
 }



function resetPassword(event) {
 event.preventDefault();

if (newPwd.value === repNewPwd.value && newPwd.value.match(passwordRegex)) {
 errorMessage.innerHTML = "Your Password has been successfully changed";
 errorMessage.style.backgroundColor = "#34a853";
 setTimeout(() => {
 window.location = "signin.html";
}, 1500);
}

else {
 errorMessage.innerHTML = "Password not changed";
 errorMessage.style.backgroundColor = "#ea4335";
}
setTimeout(() => {
 window.location.reload();
}, 1500);
}