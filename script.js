// Assignment code here

// When the "Generate Password" button is clicked the user is presented with a series of prompts requesting password criteria.

// Get references to the #generate element - Needs query selector
var generateBtn = document.querySelector("#generate");


// Initialize prompt sequence
function generatePassword() {

// When prompted to choose the length of the criteria, the user is able to select between 8 and 128 characters.    

//Prompt to choose password length
var pwdLength = (prompt("Please specify password length. Number of characters must be between 8 and 128."));
 
while(pwdLength <= 7 || pwdLength >= 129) {
    alert("Length must be between 8 and 128 characters. Please try again");
    var pwdLength = (prompt("Please specify password length. Number of characters must be between 8 and 128."));
    } 
    
    // Confirm to user how many characters their password will contain  
    alert(`Thank you, your password will contain ${pwdLength} characters`);
    
// The user is prompted to confirm whether or not they wish to include lowercase, uppercase, numeric, and/or special characters.

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// When the user answers each prompt, their input should be validated and at least one character type should be selected.

// When the user is prompted for password criteria, they are able to select which criteria to include in the password.





// function to generate a random numeric value
for (var i = 0; i < confirmLength; i) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
 return randomPassword;
};

// When the "Generate Password" button is clicked the user is presented with a series of prompts requesting password criteria.

// When the user is prompted for password criteria, they are able to select which criteria to include in the password.

// When prompted to choose the length of the criteria, the user is able to select between 8 and 128 characters.

// The user is prompted to confirm whether or not they wish to include lowercase, uppercase, numeric, and/or special characters.

// When the user answers each prompt, their input should be validated and at least one character type should be selected.

// When all prompts are answered a password is generated that matches the selected criteria.

// The newly generated password is displayed in an alert or written to the page.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





