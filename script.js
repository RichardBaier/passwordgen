// Assignment Code
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateAnswer");

// Write password to the #password input
function writePassword() {
  openForm();
  closeForm();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//randomizes the password criteria selected
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

//Copies the password that was created 
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//allows the user to choose the criteria in the password and sets the value of characters
generateBtn.addEventListener("click", () => {
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

//opens and closes the popup
function openForm() {
  document.getElementById("password-popup").style.display = "block";
}

function closeForm() {
  document.getElementById("password-popup").style.display = "none";
}
