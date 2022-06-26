//When prompted with password criteria, select which criteria to include in the password
// when prompted for lenth, choose length of at least 8 characters, no longer than 128
//when prompted for character types to include, then confirm lowercase, uppercase, numeric, and or special 
//each answer is validated and at least 1 character type is selected
//when all prompts answered, password is generated


// Assignment code here

//prompt lowercase letter
var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));

};

//prompt uppercase letter
var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65 ));
};

// prompt get random number
var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
};

// prompt random symbol
var getRandomSymbols = function() {
  const symbols= " ' !@#$%&^()*+,-./:;<=>?@[\]_`{|}~";
  return symbols [Math.floor(Math.random() * symbols.length)];
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const resultEL = document.querySelector('result');
const lengthEL = document.querySelector('result');
const uppercaseEL = document.querySelector('result');
const lowercaseEL = document.querySelector('result');
const numbersEL = document.querySelector('result');
const symbolsEL = document.querySelector('result');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
