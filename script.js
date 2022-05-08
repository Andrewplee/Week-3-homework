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

//setting the variables
var abcLower = function () {
  var abcLower = "abcdefghijklmnopqrstuvwxyz"
  return abcLower;
}

var abcUpper = function () {
  var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return abcUpper;
}

var numeric = function () {
  var numeric = "1234567890"
  return numeric;
}

var symbols = function () {
  var symbols = "!#$%&()*+,-.;:<>=?@@[]^_[|]~"
  return symbols;
}

console.log(abcLower(), abcUpper(), numeric(), symbols())
