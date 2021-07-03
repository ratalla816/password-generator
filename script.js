// Assignment code here

// When the "Generate Password" button is clicked the user is presented with a series of prompts requesting password criteria.

// When the user is prompted for password criteria, they are able to select which criteria to include in the password.

// When prompted to choose the length of the criteria, the user is able to select between 8 and 128 characters.

// The user is prompted to confirm whether or not they wish to include lowercase, uppercase, numeric, and/or special characters.

// When the user answers each prompt, their input should be validated and at least one character type should be selected.

// When all prompts are answered a password is generated that matches the selected criteria.

// The newly generated password is displayed in an alert or written to the page.



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
