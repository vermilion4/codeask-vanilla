export function showError(element, errMsg) {
 let error = element.parentNode.querySelector("small");
 error.innerText = errMsg;
 element.className = "error"
 return false;
}

export function validatePassword(element) {
 const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
 const password = element.value.trim();
 if (!passwordRegex.test(password)) {
  showError(element, "Password is a mixture of Uppercase and Lowercase letters and Numbers please");
  return false;
 }
 return true;
}
