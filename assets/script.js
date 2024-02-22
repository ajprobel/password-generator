var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharArray = ["!","","#","$","%","&","'","()","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


console.log(lowercaseArray);
console.log(uppercaseArray);
console.log(numericArray);
console.log(specialCharArray);



// Get input from user for password criteria

function generatePassword() {
  // assigning characteristics to the password
  var passwordInfo = {
    whatLength: function (n) {
      var n = window.prompt("Input desired password length:\nMust be between 8 and 128 characters");
      this.whatLength = n;
      return;
    },
    hasLowercase: function () {
      var checkLowerCase = window.prompt("Is it okay if it contains Lowercase?");
      if (checkLowerCase == "yes" || checkLowerCase == "Yes" || checkLowerCase == "YES" || checkLowerCase == "y" || checkLowerCase == "Y") {
        this.hasLowercase = true;
        return;
      } else {
        this.hasLowercase = false;
        return;
      }
    },
    hasUppercase: function () {
      var checkUpperCase = window.prompt("Is it okay if it contains Uppercase?");
      if (checkUpperCase == "yes" || checkUpperCase == "Yes" || checkUpperCase == "YES" || checkUpperCase == "y" || checkUpperCase == "Y") {
        this.hasUppercase = true;
        return;
      } else {
        this.hasUppercase = false;
        return;
      }
    },
    hasNumeric: function () {
      var checkNumeric = window.prompt("Is it okay if it contains Numeric?");
      if (checkNumeric == "yes" || checkNumeric == "Yes" || checkNumeric == "YES" || checkNumeric == "y" || checkNumeric == "Y") {
        this.hasNumeric = true;
        return;
      } else {
        this.hasNumeric = false;
        return;
      }
    },
    hasSpecialChar: function () {
      var checkSpecialChar = window.prompt("Is it okay if it contains Special Characters?\nThese are [insert characters here]");
      if (checkSpecialChar == "yes" || checkSpecialChar == "Yes" || checkSpecialChar == "YES" || checkSpecialChar == "y" || checkSpecialChar == "Y") {
        this.hasSpecialChar = true;
        return;
      } else {
        this.hasSpecialChar = false;
        return;
      }
    },
  }
  // Get input from user for password criteria
  passwordInfo.whatLength();
  if (passwordInfo.whatLength < 8 || passwordInfo.whatLength > 128) {
    window.alert("WRONG! Please input a length between 8 and 128 characters")
    return;
  }
  passwordInfo.hasLowercase();
  passwordInfo.hasUppercase();
  passwordInfo.hasNumeric();
  passwordInfo.hasSpecialChar();

  // Debugging password criteria
  console.log(passwordInfo.whatLength);
  console.log(passwordInfo.hasLowercase);
  console.log(passwordInfo.hasUppercase);
  console.log(passwordInfo.hasNumeric);
  console.log(passwordInfo.hasSpecialChar);

  var newArray = undefined;
  if (passwordInfo.hasLowercase && passwordInfo.hasUppercase && passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray.concat(uppercaseArray, numericArray, specialCharArray);
  } else if (passwordInfo.hasLowercase && passwordInfo.hasUppercase && passwordInfo.hasNumeric && !passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray.concat(uppercaseArray, numericArray);
  } else if (passwordInfo.hasLowercase && passwordInfo.hasUppercase && !passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray.concat(uppercaseArray, specialCharArray);
  } else if (passwordInfo.hasLowercase && passwordInfo.hasUppercase && !passwordInfo.hasNumeric && !passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray.concat(uppercaseArray);
  } else if (passwordInfo.hasLowercase && !passwordInfo.hasUppercase && !passwordInfo.hasNumeric && !passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray;
  } else if (passwordInfo.hasLowercase && !passwordInfo.hasUppercase && passwordInfo.hasNumeric && !passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray.concat(numericArray);
  } else if (passwordInfo.hasLowercase && !passwordInfo.hasUppercase && !passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray.concat(specialCharArray);
  } else if (passwordInfo.hasLowercase && !passwordInfo.hasUppercase && passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = lowercaseArray.concat(numericArray, specialCharArray);
  } else if (!passwordInfo.hasLowercase && passwordInfo.hasUppercase && passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = uppercaseArray.concat(numericArray, specialCharArray);
  } else if (!passwordInfo.hasLowercase && passwordInfo.hasUppercase && passwordInfo.hasNumeric && !passwordInfo.hasSpecialChar) {
    newArray = uppercaseArray.concat(numericArray);
  } else if (!passwordInfo.hasLowercase && passwordInfo.hasUppercase && !passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = uppercaseArray.concat(specialCharArray);
  } else if (!passwordInfo.hasLowercase && passwordInfo.hasUppercase && !passwordInfo.hasNumeric && !passwordInfo.hasSpecialChar) {
    newArray = uppercaseArray;
  } else if (!passwordInfo.hasLowercase && !passwordInfo.hasUppercase && passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = numericArray.concat(specialCharArray);
  } else if (!passwordInfo.hasLowercase && !passwordInfo.hasUppercase && passwordInfo.hasNumeric && !passwordInfo.hasSpecialChar) {
    newArray = numericArray;
  } else if (!passwordInfo.hasLowercase && !passwordInfo.hasUppercase && !passwordInfo.hasNumeric && passwordInfo.hasSpecialChar) {
    newArray = specialCharArray;
  } else {
    window.alert("Hey uhhhhhh, u doin' this right?");
    return;
  }

  var newPassword = [];

  // picks a random element from the new, combined array
  function pickRandomly() {
    var y = Math.floor(Math.random() * (newArray.length));
    var x = newArray[y];
    console.log(x);
    newPassword.push(x)
  }

  // repeats the random selection function for as many times as the length of the password
  for (var i = passwordInfo.whatLength; i > 0; i--) {
    pickRandomly();
    console.log("new element selected");
  }
  console.log("The new password was created from: " + newArray.join(""));

  console.log("Your new password is " + newPassword.join(""));

  return newPassword.join("");
}



// ------------------------------------------ WRITES PASSWORD ---------------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

