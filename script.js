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


// password length requirement
var passwordArray = ""
var password = ""
var lengthConfirm = ""

var generatePassword = function() {
  var lengthConfirm = window.prompt("How many characters would you like your password to be?");
  
  while(lengthConfirm <= 7 || lengthConfirm >= 129) {

   window.alert("password length is not eligible.");
   var lengthConfirm = window.prompt("How many characters would you like your password to be?")
  
   if (lengthConfirm === null) {
     window.alert("You must enter a length.")
     return;} 
  }
  
  var lowerConfirm = confirm("Would you like to include lower cases?")
  var upperConfirm = confirm("Would you like to include upper cases?")
  var numericConfirm = confirm("Would you like to include numerics?")
  var symbolConfirm = confirm("Would you like to include symbols?")

  if (lowerConfirm) {
    passwordArray += abcLower()
  }

  if (upperConfirm) {
    passwordArray += abcUpper()
  }

  if (numericConfirm) {
    passwordArray += numeric()
  }

  if (symbolConfirm) {
    passwordArray += symbols()
  }

  for (var i = 0; i < lengthConfirm; i++) {   
    password += passwordArray.charAt(Math.floor(Math.random() * passwordArray.length))
  }
   return password;
}
