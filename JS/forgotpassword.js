const userEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
// const shape = document.getElementsByClassName("shape");
const reset = document.getElementById("resetPwd");
const message = document.getElementById("message");

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// FUNCTION TO VALIDATE EMAIL INPUT FORM
function validateEmail() {
 if (userEmail.value === "") {
  userEmail.style.border = "1px solid #002828";
  errorMessage.style.display = "none";
 }
 else if (emailRegex.test(userEmail.value)) {
  userEmail.style.border = "3px solid #34a853";
  errorMessage.style.display = "none";
  // shape.style.display = "none";
 } else {
  userEmail.style.border = "3px solid #ea4335";
  errorMessage.innerText = "Enter a valid Email";
  errorMessage.style.display = "block";
  // shape.style.display = "block";
 }
}

// FUNCTION TO 
function sendToken(event) {
 event.preventDefault();
 localStorage.setItem("email", JSON.stringify(userEmail.value));
 // console.log(JSON.stringify(savedEmails));
 if (userEmail.value) {
  message.style.backgroundColor = "#34a853"; //green
  message.textContent = `Reset pin sent to ${userEmail.value}`;
  setTimeout(() => {
   window.location = "https://gmail.com"; //https://mail.google.com/mail/u/0/#inbox
   // window.location = "resetpassword.html";
  }, 1500);

  //  window.open(`mailto: ${userEmail.value}`);
 }
 else if (userEmail.value === "") {
  message.style.backgroundColor = "#ea4335"; //red
  message.textContent = "Field cannot be empty!!!";
  setTimeout(() => {
   window.location.reload();
  }, 1500);
 }

}

