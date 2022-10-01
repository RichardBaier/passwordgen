// Assignment Code
const lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
const upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = ["1234567890"];
const specialChar = ["!@#$%&?"];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = criteriaCheck();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordLength = prompt("Choose the length of your password between 8 and 128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter an appropriate amount of characters.")
    generatePassword();
  }

  return passwordLength;
}

function criteriaCheck() {
  let generatedAnswer;

  let lowerCheck = confirm("Do you want lower case letters in your password?");
  let upperCheck = confirm("Do you want upper case letters in your password?");
  let numberCheck = confirm("Do you want numbers in your password?");
  let specialCheck = confirm("Do you want special characters in your password?");

  if (!lowerCheck && !upperCheck && !numberCheck && !specialCheck) {
    alert("You must have at least one criteria for your password.")
    criteriaCheck();
  }
  else if (lowerCase && upperCheck && numberCheck && specialCheck) {
    generatedAnswer = lowerCase.concat(upperCase, numbers, specialChar);
  }
  else if (upperCheck && numberCheck && specialCheck) {
    generatedAnswer = upperCase.concat(numbers, specialChar);
  }
  else if (lowerCase && numberCheck && specialCheck) {
    generatedAnswer = lowerCase.concat(numbers, specialChar);
  }
  else if (lowerCase && upperCheck && specialCheck) {
    generatedAnswer = lowerCase.concat(upperCase, specialChar);
  }
  else if (lowerCase && upperCheck && numberCheck) {
    generatedAnswer = lowerCase.concat(upperCase, numbers);
  }
  else if (specialCheck && upperCheck) {
    generatedAnswer = specialChar.concat(upperCase);
  }
  else if (numberCheck && upperCheck) {
    generatedAnswer = numbers.concat(upperCase);
  }
  else if (numberCheck && specialCheck) {
    generatedAnswer = numbers.concat(specialChar);
  }
  else if (lowerCheck && specialCheck) {
    generatedAnswer = lowerCase.concat(specialChar);
  }
  else if (lowerCheck && numberCheck) {
    generatedAnswer = lowerCase.concat(numbers);
  }
  else if (lowerCheck && upperCheck) {
    generatedAnswer = lowerCase.concat(upperCase);
  }
  else if (lowerCheck) {
    generatedAnswer = lowerCase;
  }
  else if (upperCheck) {
    generatedAnswer = upperCase;
  }
  else if (numberCheck) {
    generatedAnswer = numbers;
  }
  else if (specialChar) {
    generatedAnswer = specialChar;
  }
  let concatAnswer = generatedAnswer.join("")
  return concatAnswer;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
