// Library of characters
var specialCharString = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~` + "`";
var lettersLo = "abcdefghijklmnopqrstuvwxyz";
var lettersUp = lettersLo.toUpperCase();
var numbers = "0123456789";

// Grab elements from HTML
var button = document.getElementsByClassName("btn")
var passwordBox = document.getElementById("password");

// User clicks button to generate a new password

// Prompt user for password parameters:
//// Password minimum length - maximum length
//// Include: lowercase, uppercase, numeric, and/or special characters
var password = [];
var possibleChars = "";

// Parameters
var parameterCount = 1; // must satisfy: parameterCount >= minLength

var minLength = 1;
var maxLength = 10;
var lowercase = true;
var uppercase = true;
var numeric = true;
var specialChar = true;

// User clicks button to generate password, validate user password criteria
//// If validation is passed (at least one character type must be selected),
//////// Generate random password
//// Else
//////// Alert that user cannot proceed until valid criteria are selected

// Validating password criteria
while (parameterCount < 1){
    alert("Please select at least one character type");
}

while (parameterCount > maxLength) {
    alert("Too many parameters selected for this maximum length. Please select fewer parameters or increase the max length.")
}

// 1. ordered password for minLength
var requiredParams = function(lowercase, uppercase, numeric, specialChar) {
    if (lowercase) {
        possibleChars = possibleChars + lettersLo;
        // Generate random lowercase letter
        var newChar = lettersLo[ Math.floor(Math.random()*lettersLo.length) ];
        password.push(newChar);
    };
    if (uppercase) {
        possibleChars = possibleChars + lettersUp;
        // Generate random uppercase letter
        var newChar = lettersUp[ Math.floor(Math.random()*lettersUp.length) ];
        password.push(newChar);
    };
    if (numeric) {
        possibleChars = possibleChars + numbers;
        // Generate random number between 0 - 9
        var newChar = numbers[ Math.floor(Math.random()*numbers.length) ];
        password.push(newChar);
        // var newChar = Math.floor(Math.random()*10);
        // password.push(newChar);
    };
    if (specialChar) {
        possibleChars = possibleChars + specialCharString;
        var newChar = specialCharString[ Math.floor(Math.random()*specialCharString.length) ];
        password.push(newChar);
    };

    console.log(password);
    return password;
}

// 2. rest of letters made up of array of all possible characters
var remainingChars = function(minLength, maxLength, possibleChars) {

}


// Display password on page



// Reset password and possibleChars to empty strings?