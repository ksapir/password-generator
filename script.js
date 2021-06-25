// // Assignment Code
var pwLength = [];

var invalid = isNaN(pwLength)

var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K'", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"
];

var lowerCase= "abcdefghijklmnopqurstuvwxyz".split("");

var pwNum= [1,2,3,4,5,6,7,8,9,0];

var special= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{","}", "|", ";",";", "'", "<", ">", "?", "/", ",", ".", "`", "~"];

var generateBtn = document.querySelector("#generate");

// function generatePassword(){

generateBtn.onclick = () => {
    var pwLength = prompt ("How long would like your password to be? (8-128)");
    console.log(pwLength);
userPwLength = function (){
   if (pwLength>= 8 && pwLength<= 128){
        var lowerCase = confirm ("Would you like to include lowercase letters?");
            console.log(lowerCase);
        var upperCase = confirm ("Would you like to include uppercase letters?");
            console.log(upperCase);
        var pwNum = confirm ("Would you like to include numbers?");
            console.log(pwNum);
        var special = confirm ("Would you like to include special characters?");
            console.log(special);

}  else if (invalid){
    alert("Invalid response");
    var pwLength = prompt("How long would like your password to be? (8-128)");
    console.log(pwLength);
}   else {
        alert("Invalid response");
        var pwLength = prompt("How long would like your password to be? (8-128)");
        console.log(pwLength);
}
while (invalid=true && pwLength>=8 && pwLength<= 128)
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
