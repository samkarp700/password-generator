
// Assignment code here

var characterLength = 8;
var choiceArr = [];

var randomSymbols = [" ' !@#$%&^()*+,-./:;<=>?@[\]_`{|}~"];
var randomLower = [String.fromCharCode(Math.floor(Math.random() * 26 + 97))];
var randomUpper = [String.fromCharCode(Math.floor(Math.random() * 26 + 65 ))];
var randomNumbers = [String.fromCharCode(Math.floor(Math.random() * 10 + 48))];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  console.log("You clicked the button."); //not needed later 

  // 1. Prompt the user for the password critera
 

  
  // lowercase, uppercase, numbers, special characters
  // 2. validate the input
  // 3. generate the password
 







 // 4. display generated password on the page 
  return "Generated password will go here!";
}
//prompt lowercase letter


// Get references to the #generate element
  //generate button


function getPrompts() {
  characterLength = prompt("How many characters do you want your password to be? (8-128 characters)");
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //this should all be false
      alert("Character length has to be one number between 8 - 128");
      return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(randomLower);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(randomUpper);
  }  
  if (confirm("Would you like special characters letters in your password?")) {
    choiceArr = choiceArr.concat(randomSymbols);
} 
if (confirm("Would you like special characters letters in your password?")) {
  choiceArr = choiceArr.concat(randomNumbers);
}
};



