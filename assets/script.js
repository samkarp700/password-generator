
// Assignment code here

var characterLength = 8;
var passwordChoice = [];

var randomSymbols = ['!', '@', '#', '^', '(', ')', '$', '%']; 
var randomLower = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomUpper = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomNumbers = ['0','1','2','3','4','5','6','7','8','9'];


var generateBtn = document.querySelector("#generate"); //ties to generate button in html

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //either true or false 
  var passwordText = document.querySelector("#password"); //password input from html page

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  } else {
    passwordTest.value = '';
  }

}

// when true and correct, generate
function generatePassword() {
  var password = "";

  for(var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * passwordChoice.length);
    password = password + passwordChoice[randomCharacter];
  }
  return password;
}
 
//prompts for user 
function getPrompts() {
  passwordChoice = [];

//character length prompt 
  characterLength = parseInt (prompt("How many characters do you want your password to be? (8-128 characters)"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { //this should all be false
      alert("Character length has to be one number between 8 - 128");
      return false;
  }
//lower case letters
  if (confirm("Would you like lowercase letters in your password?")) {
    passwordChoice = passwordChoice.concat(randomLower);
  }
//upper case letter prompt
  if (confirm("Would you like uppercase letters in your password?")) {
    passwordChoice = passwordChoice.concat(randomUpper);
  }  
  //symbol prompt
  if (confirm("Would you like special characters in your password?")) {
    passwordChoice = passwordChoice.concat(randomSymbols);
} 
//number prompt
if (confirm("Would you like numbers in your password?")) {
  passwordChoice = passwordChoice.concat(randomNumbers);
}

return true;
};



