// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
    let lowerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let upperOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let numOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let spcOptions = ['!', '@', '#', '$', '%', '&', '*', '?', '+', '-', '^'];
    let pool = [];

    let passLength = prompt("How long would you like your password to be? Enter a number between 8 and 128: ")
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
    console.log(pool);
    console.log(pool.length);
    console.log(Math.floor(Math.random()* pool.length));
    for (let i=0; i < passLength.length; i++){
      let tmpPass = " ";
      tmpPass = tmpPass + Math.floor(Math.random()* pool.length);
      console.log(tmpPass);
      return tmpPass;
    }
    
    console.log("Voila! Here is your new password!");
  
};

function writePassword() {
  
  var password = generatePassword();
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
