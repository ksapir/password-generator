// // Assignment Code
var pwLength = [];
var invalid = [isNaN(pwLength), pwLength>= 8, pwLength<= 128];
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
    alert("Invalid response. Click 'Generate Password Button' again");
    
}   else {
        alert("Invalid response. Click 'Generate Password Button' again");
}
}

   var getLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(getLowerCase);

    var getUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(getUpperCase);

    var randomNum = pwNum[Math.floor(Math.random() * pwNum.length)];
        console.log(randomNum);
 
    var randomSpecial = special[Math.floor(Math.random()* special.length)];
        console.log(randomSpecial);

var generatePassword =getLowerCase.concat(getUpperCase, randomNum, randomSpecial)
console.log(generatePassword)

var passwordDisplayEl = document.querySelector("#password")

passwordDisplayEl.textContent = (generatePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
    var element = element.target;

}
