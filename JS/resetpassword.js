import { showError, validatePassword } from "./validation.js";
import { setData, getData } from "./constants.js";

const userIndex = JSON.parse(getData('index')) || [];

const getUsers = JSON.parse(getData('users')) || [];

// extracting user from list of users in localstorage
const user = getUsers[userIndex]

const form = document.querySelector("form");

form.addEventListener('submit', function (event) {

  const passwordField = form.elements['newpassword'];
  const repasswordField = form.elements['repnewpassword'];
  event.preventDefault();

  // checking email

  if (passwordField.value !== repasswordField.value) {
    showError(repasswordField, "password mismatch");
    return;
  }

  if (validatePassword(passwordField)) {
    //save record
    updatePassword(passwordField)
  }

})

function updatePassword(pass) {

  // replacing old password with new password
  user.password = pass.value

  // using array method of splice to replace the user object in the users array
  getUsers.splice(userIndex, 1, user)

  // saving updated record in the localstorage
  setData('users', JSON.stringify(getUsers))

  // removing the saved index from localstorage
  localStorage.removeItem('index');
  window.location.href = "../HTML/signin.html"

}
