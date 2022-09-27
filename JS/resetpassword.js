const newPwd = document.getElementById("newpassword");
const repNewPwd = document.getElementById("repnewpassword");
const resetWarning = document.getElementById("renewpassword");
const errorMessage = document.getElementById("error-msg");
const warning = document.getElementById("newpassword-warning");
const repWarning = document.getElementById("repnewpassword-warning");
const guide = document.getElementById("pwd-guide");
const repGuide = document.getElementById("rep-guide");
const errorIcon = document.getElementById("error-icon");
const successIcon = document.getElementById("success-icon");

// Showing and hiding the password
const togglePassword = document.querySelector("#togglePassword");
const toggleCPassword = document.querySelector("#toggleCPassword");
togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = newPwd.getAttribute("type") === "password" ? "text" : "password";
  newPwd.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

toggleCPassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    repNewPwd.getAttribute("type") === "password" ? "text" : "password";
  repNewPwd.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});


function validatePassword() {
  const passwordRegex =
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
  const password = newPwd.value.trim();
  //const confirmPassword = repNewPwd.value.trim();
  //console.log(password);
  if (!passwordRegex.test(password)) {
    newPwd.style.border = "1px solid #DC3545";
    repNewPwd.style.border = "1px solid #002828";
    warning.style.display = "block";
    guide.style.display = "block";
    repGuide.style.display = "block";
    repWarning.style.display = "none";
    errorIcon.style.display = "block";
    successIcon.style.display = "none";

    return false;
  } else if (passwordRegex.test(password)) {
  newPwd.style.border = "1px solid #002828";
  repNewPwd.style.border = "block";
  warning.style.display = "none";
  guide.style.display = "none";
  repGuide.style.display = "none";
  repWarning.style.display = "none";
  errorIcon.style.display = "none";
  successIcon.style.display = "block";

  return true;

  } else if (password === "") {
  newPwd.style.border = "1px solid #002828";
  warning.style.display = "none";
  repWarning.style.display = "none";
  errorIcon.style.display = "none";
  }
  
}

const userIndex = JSON.parse(localStorage.getItem("index"));

const getUsers = JSON.parse(localStorage.getItem("users")) || [];

// extracting user from list of users in localstorage
const user = getUsers[userIndex];

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  //console.log('hello');
  const passwordField = form.elements["newpassword"];
  const repasswordField = form.elements["repnewpassword"];
  event.preventDefault();

  // checking email

  if (passwordField.value !== repasswordField.value) {
    //showError(repasswordField, "password mismatch");
    return;
  }

  if (validatePassword(passwordField)) {
    //save record
    updatePassword(passwordField);
  }
});

function updatePassword(pass) {
  console.log(pass);
  // replacing old password with new password
  user.password = pass.value;

  // using array method of splice to replace the user object in the users array
  getUsers.splice(userIndex, 1, user);

  // saving updated record in the localstorage
  localStorage.setItem("users", JSON.stringify(getUsers));

  // removing the saved index from localstorage
  localStorage.removeItem("index");
  window.location.href = "signin.html";
}
