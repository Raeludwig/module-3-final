var characterLength = 8 - 128;
var choiceArray = [];

var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '~', '+', '='];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts && choiceArray.length>0) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
    alert("You have to choose at least one");
  }}
 
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArray=[];

  characterLength = parseInt(prompt("How many characters long would you like your password to be? (8-128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length needs to be a number between 8 and 128. Try again please.");
    return 'false';
  }

  if (confirm("Should your password contain a lowercase letter?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Should your password contain an uppercase letter?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Should your password contain a number?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  if (confirm("Should your password contain a special character?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  return 'true';

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);