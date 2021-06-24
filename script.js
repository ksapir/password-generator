// // Assignment Code
var pwLength = [];

var lowerCase= [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K'", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"
];

var pwNum= [1,2,3,4,5,6,7,8,9,0];

var special= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{","}", "|", ";",";", "'", "<", ">", "?", "/", ",", ".", "`", "~"];

var generateBtn = document.querySelector("#generate");

// function generatePassword(){

generateBtn.onclick = () => {
    var pwLength = prompt ("How long would like your password to be? (8-128)");
    if (pwLength>= 8 && pwLength<= 128){
        var lowerCase = confirm ("Would you like to include lowercase letters?");
        var upperCase = confirm ("Would you like to include uppercase letters?");
        var pwNum = confirm ("Would you like to include numbers?");
        var special = confirm ("Would you like to include special characters?");}
      else {
        alert("Invalid response");
        prompt("How long would like your password to be? (8-128)");
        
      }
    }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)}


// Button is clicked to generate a password
// User is prompted to input a length of 8-128 characters
// User input is recorded
// User is prompted for whether or not they'd like to include lowercase
// User input is recorded
// User is prompted for whether or not they like to inlcude uppercase
// User input is recorded
// User is prompted whether or not they'd like to include numeric
// User input is recorded
// User is prompted whether or not they'd like to include special charactors
// User input is recorded
// Computer generates at lease one of the selected criteria for a password
// Computer displays the password in alert or on the page
