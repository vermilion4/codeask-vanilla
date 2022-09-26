

// errorMessage.style.color = "#DC3545";
// errorMessage.style.textAlign = "left";

// // FUNCTION TO VALIDATE EMAIL INPUT FORM
// function checkEmail() {
//  if (userEmail.value === "") {
//   userEmail.style.border = "1px solid #002828";
//   successIcon.style.visibility = "hidden";
//   errorIcon.style.visibility = "hidden";
//   // errorMessage.style.visibility = "hidden";
//   successIcon.style.visibility = "hidden";
//  }
//  else if (emailRegex.test(userEmail.value)) {
//   userEmail.style.border = "1px solid #198754";
//   successIcon.style.visibility = "visible";
//   errorIcon.style.visibility = "hidden";
//   errorMessage.style.visibility = "hidden";
//  } 
 
//  else {
//   userEmail.style.border = "1px solid #DC3545";
//   successIcon.style.visibility = "hidden";
//   errorIcon.style.visibility = "visible";
//  }
// }


// // FUNCTION TO 
// function sendToken(event) {
//  event.preventDefault();
//  let returningUserEmail = JSON.parse(localStorage.getItem("email"));
//  if (returningUserEmail) {
//   // userEmail.style.border = "1px solid #198754";
//   successIcon.style.visibility = "visible";
//   errorIcon.style.visibility = "hidden";
//   errorMessage.style.Color = "#198754"; //green
//   errorMessage.innerText = `Reset pin sent to ${userEmail.value}`;
//   setTimeout(() => {
//    window.location = "resetpassword.html";
//   }, 1500);
//  }

//  else if (!returningUserEmail){
//   userEmail.style.border = "1px solid #DC3545";
//   successIcon.style.visibility = "hidden";
//   errorIcon.style.visibility = "visible";
//   errorMessage.innerText = "Email not found";
//   setTimeout(() => {
//    window.reload();
//   }, 1000);
//  }

//  if (userEmail.value === "") {
//   errorMessage.style.color = "#DC3545"; //red
//   errorMessage.style.textAlign = "left";
//   errorMessage.innerHTML = "Field cannot be empty!!!";
//   setTimeout(() => {
//    window.location.reload();
//   }, 1000);
//  }
//  else if (!emailRegex.test(userEmail.value)) {
//   userEmail.style.border = "1px solid #DC3545";
//   successIcon.style.visibility = "hidden";
//   errorIcon.style.visibility = "visible";
//   errorMessage.style.color = "#DC3545"; //red
//   errorMessage.innerText = "Enter a valid Email";
//   setTimeout(() => {
//    window.location.reload();
//   }, 1000);
//  }

// }


// FUNCTION TO VALIDATE EMAIL INPUT FORM

const userEmail = document.getElementById("email");
const errorMessage = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");
// const reset = document.getElementById("resetPwd");
// const message = document.getElementById("message");
// const successIcon = document.getElementById("success-icon");
// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



function getFormValues() {
    return {
        email: document.getElementById('email').value

    }

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

function getEmail() {
    const users = JSON.parse(localStorage.getItem('users'))
    const { email } = getFormValues() // destructuring
    // compare data from dom with localstorage
    let exist = false;
    users.forEach((user, index) => {
        if (email == user.email) {


            localStorage.setItem('index', index);

            return exist = true;
        }

    });
    return exist;

}

const submitIt = document.getElementById('form')
submitIt.addEventListener('submit', function loginUser(e) {
    e.preventDefault();

    if (getEmail()) {
        alert('We have sent you an email. Follow the instruction to reset your forgotten password');
        window.location.href = "resetpassword.html"
        return;
    }
    else {
        errorIcon.style.visibility = "visible";
        errorMessage.innerText = "Email not found";
        userEmail.style.border = "1px solid #DC3545";
        errorMessage.style.color = "#DC3545"; //red
        errorMessage.style.textAlign = "left";
    }
});



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

