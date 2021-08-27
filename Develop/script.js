// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  // Setting up available characters in arrays
  let lowerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let upperOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let numOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let spcOptions = ['!', '@', '#', '$', '%', '&', '*', '?', '+', '-', '^'];
    let pool = [];
// Prompt password length and validate entry.
    let passLength = prompt("How long would you like your password to be? Enter a number between 8 and 128:")
    passLength = Number(passLength);
    if (passLength === null || passLength === ""){
      alert("To proceed, you must enter a value between 8 and 128!");
      return generatePassword();
    }
    if (passLength < 8 || passLength > 128){
      alert("Password must be at least 8 and no more than 128 characters in length.");
      return generatePassword();
    }
    // Prompt user for which sets of characters they would like to include
    let lowerChar = confirm("Would you like your password to include lowercase letters?");
    if (lowerChar) {
      pool = pool.concat(lowerOptions);
    }
    let upperChar = confirm("Would you like your password to include uppercase letters?");
    if (upperChar){
      pool = pool.concat(upperOptions);
    }
    let numChar = confirm("Would you like your password to include numeric characters?");
    if (numChar) {
      pool = pool.concat(numOptions);
    }
    let specialChar = confirm("Would you like your password to include special characters?");
    if (specialChar) {
      pool = pool.concat(spcOptions);
    }

    console.log(Math.floor(Math.random()* pool.length));
    let tmpPass = " ";
    for (let i=0; i < passLength; i++){
      let n = Math.floor(Math.random()*pool.length);
      tmpPass += pool[n];
    }
    console.log("Voila! Here is your new password!");
    return tmpPass;
    
    
    
  
};

function writePassword() {
  
  var password = generatePassword();
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
