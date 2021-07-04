// When the "Generate Password" button is clicked the user is presented with a series of prompts requesting password criteria.

// Get references to the #generate element - Needs query selector
var generateBtn = document.querySelector("#generate");


// Initialize prompt sequence
function generatePassword() {

// When prompted to choose the length of the criteria, the user is able to select between 8 and 128 characters.    

// Select password length prompt
var pwdLength = (prompt("Please specify password length. Number of characters must be between 8 and 128."));
 
  while(pwdLength <= 7 || pwdLength >= 129) {
    alert("Length must be between 8 and 128 characters. Please try again");
    var pwdLength = (prompt("Please specify password length. Number of characters must be between 8 and 128."));
    } 
    
    // Confirm to user how many characters their password will contain  
    alert(`Thank you, your password will contain ${pwdLength} characters`);
    
// The user is prompted to confirm whether or not they wish to include lowercase, uppercase, numeric, and/or special characters.

var characterTypes = [];

 // Confirm character choices - verify in console log
var lowerCase = confirm("Please click OK to include lowercase letters, otherwise click CANCEL");
  if (lowerCase === true) {
    characterTypes.push(0);
  }
  console.log(lowerCase);

var upperCase = confirm("Please click OK to include uppercase letters, otherwise click CANCEL");
  if (upperCase === true) {
    characterTypes.push(1);
  }
  console.log(upperCase);

var numeric = confirm("Please click OK to include numbers, otherwise click CANCEL");
  if (numeric === true) {
    characterTypes.push(2);
  }
  console.log(numeric);

var special = confirm("Please click OK to include special characters, otherwise click CANCEL");
  if (special === true) {
    characterTypes.push(3);
  }
  console.log(special);

  console.log(characterTypes);

var getPassword = "";

// Loop randomly decides character
  for (var i = 0; i < pwdLength; ++i) {
var characterType =
    characterTypes[Math.floor(Math.random() * characterTypes.length)];
  console.log(characterType);

  // Attaches random character type with number then assigns ascii codes to each value
  if (characterType === 0) {
    console.log("Random lowercase");
var characterCode = Math.floor(Math.random() * 25) + 81;
    console.log(characterCode);
var asciiCode = String.fromCharCode(characterCode);
    console.log(asciiCode);
    getPassword = getPassword.concat(asciiCode);
   }
  
   else if (characterType === 1) {
    console.log("Random uppercase");
var characterCode = Math.floor(Math.random() * 30) + 75;
    console.log(characterCode);
var asciiCode = String.fromCharCode(characterCode);
    console.log(asciiCode);
    getPassword = getPassword.concat(asciiCode);
   } 
  
   else if (characterType === 2) {
    console.log("Random number");
var characterCode = Math.floor(Math.random() * 9) + 56;
    console.log(characterCode);
var asciiCode = String.fromCharCode(characterCode);
    console.log(asciiCode);
    getPassword = getPassword.concat(asciiCode);
   } 
  
   else if (characterType === 3) {
    console.log("Random special character");
var characterCode = Math.floor(Math.random() * 14) + 35;
var asciiCode = String.fromCharCode(characterCode);
    getPassword = getPassword.concat(asciiCode);
   } 

// When the user answers each prompt, their input should be validated and at least one character type should be selected.
    // If no characters are selected user is prompted to select at least one type.
    // If all prompts have been dispositioned and at least one character is chosen then password will be displayed on the page. 
    else {
      alert("Please select at least one character type.");
    }
    console.log("Your password is " + getPassword);
    }
   return getPassword;
}

// Write password to the #password input
function writePassword() {
  console.log("Button click");
var password = generatePassword();
  console.log("Display Password " + password);
var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



