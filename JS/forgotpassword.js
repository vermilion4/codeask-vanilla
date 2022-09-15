const userEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
const reset = document.getElementById("resetPwd");
const message = document.getElementById("message");
const errorIcon = document.getElementById("error-icon");
const successIcon = document.getElementById("success-icon");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// FUNCTION TO VALIDATE EMAIL INPUT FORM
function checkEmail() {

 // const userPassword = localStorage.getItem("password"); // tentative key value
 if (userEmail.value === "") {
  userEmail.style.border = "1px solid #002828";
  errorIcon.style.display = "none";
  errorMessage.style.display = "none";
  successIcon.style.display = "none";
 }
 else if (emailRegex.test(userEmail.value)) {
  userEmail.style.border = "1px solid #198754";
  errorMessage.style.display = "none";
  successIcon.style.display = "block";
  errorIcon.style.display = "none";
 } else {
  userEmail.style.border = "1px solid #DC3545";
  errorMessage.innerText = "Enter a valid Email";
  errorMessage.style.display = "block";
  errorIcon.style.display = "block";
  successIcon.style.display = "none";
 }
}


// FUNCTION TO 
function sendToken(event) {
 event.preventDefault();
 localStorage.setItem("email", JSON.stringify(userEmail.value));
 // console.log(JSON.stringify(savedEmails));
 if (localStorage.getItem("email")) {
  message.style.backgroundColor = "#198754"; //green
  message.textContent = `Reset pin sent to ${userEmail.value}`;
  setTimeout(() => {
   window.location = "resetpassword.html";
  }, 1500);
 } else {
  message.style.backgroundColor = "#DC3545"; //red
  message.textContent = "Email not found";
 }

 // if (userEmail.value) {
 //  message.style.backgroundColor = "#198754"; //green
 //  message.textContent = `Reset pin sent to ${userEmail.value}`;
 //  setTimeout(() => {
 //   window.location = "resetpassword.html";
 //  }, 1500);
 // }
 if (userEmail.value === "") {
  message.style.backgroundColor = "#DC3545"; //red
  message.textContent = "Field cannot be empty!!!";
  setTimeout(() => {
   window.location.reload();
  }, 1000);
 } else if (!emailRegex.test(userEmail.value)) {
  message.style.backgroundColor = "#DC3545"; //red
  message.textContent = "Enter a valid Email";
  setTimeout(() => {
   window.location.reload();
  }, 1000);
 }

}



