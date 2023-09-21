const VALID_USERNAME = "new_user";
const VALID_PASSWORD = "123456789";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");

  // handle message
  const username = usernameField.value;
  const password = passwordField.value;
  const errors = processUsernamePassword(username, password);
  let message = errors.join(", ");
  if (message === "") {
    message = "Successful login!";
  }
  displayMessage(message);

  // handle colors
  if (message.includes("username")) {
    usernameField.style.borderColor = "red";
    document.getElementById("icon-invalid-username").style.display = "inline";
    document.getElementById("icon-valid-username").style.display = "none";
  } else {
    usernameField.style.borderColor = "green";
    document.getElementById("icon-invalid-username").style.display = "none";
    document.getElementById("icon-valid-username").style.display = "inline";
  }
  if (message.includes("password")) {
    passwordField.style.borderColor = "red";
    document.getElementById("icon-invalid-password").style.display = "inline";
    document.getElementById("icon-valid-password").style.display = "none";
  } else {
    passwordField.style.borderColor = "green";
    document.getElementById("icon-invalid-password").style.display = "none";
    document.getElementById("icon-valid-password").style.display = "inline";
  }
});

function processUsernamePassword(username, password) {
  const errors = [];
  if (username === "") {
    errors.push("please, enter username");
  } else if (username !== VALID_USERNAME) {
    errors.push("please, enter valid username");
  }
  if (password === "") {
    errors.push("please, enter password");
  } else if (password !== VALID_PASSWORD) {
    errors.push("please, enter valid password");
  }
  return errors;
}

function displayMessage(message) {
  document.getElementById("message").innerHTML = message;
}
