// When the "Generate Password" button is clicked the user is presented with a series of prompts requesting password criteria.

// Get references to the #generate element - Needs query selector
var generateBtn = document.querySelector("#generate");


// Initialize prompt sequence - strap in!
function generatePassword() {

  // When prompted to choose the length of the criteria, the user is able to select between 8 and 128 characters.    

  // Select password length prompt
  var pwdLength = (prompt("Please specify password length. Number of characters must be between 8 and 128."));

  while (pwdLength <= 7 || pwdLength >= 129) {
    alert("Length must be between 8 and 128 characters. Please try again");
    var pwdLength = (prompt("Please specify password length. Number of characters must be between 8 and 128."));
  }

  // Confirm to user how many characters their password will contain  
  alert(`Thank you, your password will contain ${pwdLength} characters`);

  // The user is prompted to confirm whether or not they wish to include lowercase, uppercase, numeric, and/or special characters.

  var characterTypes = [];

  // Confirm character type prompts - verify in console log
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

  // Initiate variable array production sequence \\
  // "For" loop randomly determines characters based on parameters set by "else, if" strings below //
    for (var i = 0; i < pwdLength; i++) {
    var characterType =
      characterTypes[Math.floor(Math.random() * characterTypes.length)];
    console.log(characterType);

    // Attaches random character type with number then assigns ascii codes (the text visible to the user) to each value
    if (characterType === 0) {
      console.log("Random lowercase");
      // #97 is the decimal representation of lowercase a in the ascii table, and each following letter is one digit higher. Lowercase z is #122 minus #97 = 25 (determines proper character type)//
      var characterCode = Math.floor(Math.random() * 25) + 97;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    }

    else if (characterType === 1) {
      console.log("Random uppercase");
      // #65 is the decimal representation of uppercase A in the ascii table, and each following letter is one digit higher. Uppercase Z is #90 minus #65 = 25 (determines proper character type)//
      var characterCode = Math.floor(Math.random() * 25) + 65;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    }

    else if (characterType === 2) {
      console.log("Random number");
      // #48 is the decimal representation of ZERO in the ascii table, and each following number is one digit higher. Nine is #57 minus #48 = 9 (determines proper character type)//
      var characterCode = Math.floor(Math.random() * 9) + 48;
      console.log(characterCode);
      var asciiCode = String.fromCharCode(characterCode);
      console.log(asciiCode);
      getPassword = getPassword.concat(asciiCode);
    }

    else if (characterType === 3) {
      console.log("Random special character");
      // #33 is the decimal representation of ! in the ascii table, and each following character is one digit higher. (this applcation uses !, ", #, $, %, &) & is #38 minus #33 = 5 (determines proper character type)//
      var characterCode = Math.floor(Math.random() * 5) + 33;
      var asciiCode = String.fromCharCode(characterCode);
      getPassword = getPassword.concat(asciiCode);
    }
                  //                     **EXPERIMENTAL**                       \\
                 // * Assuming that window.crypto.getRandomValues is available*/ \\

               // var array = new Uint32Array(10);                                 \\
              // window.crypto.getRandomValues(array);                              \\

            // console.log("Get password:");                                          \\
           // for (var i = 0; i < array.length; i++) {                                 \\
          //  console.log(array[i]);                                                    \\
         // }                                                                            \\
   
         // When the user answers each prompt, their input should be validated and at least one character type should be selected.
    // If no characters are selected user is prompted to select at least one type.
    else {

      alert("Please select at least one character type.");
      return "NO PASSWORD FOR YOU! TRY AGAIN!"
    }
    console.log("Your password is " + getPassword);
  }
  return getPassword;
}
// If all prompts have been dispositioned and at least one character is chosen then password will be displayed on the page. 
function writePassword() {
  // Write password to the #password input
  console.log("Button click");
  var password = generatePassword();
  console.log("Display Password " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



