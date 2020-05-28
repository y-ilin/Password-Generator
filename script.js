// Library of all possible characters
var specialCharString = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~` + "`";
var lettersLo = "abcdefghijklmnopqrstuvwxyz";
var lettersUp = lettersLo.toUpperCase();
var numbers = "0123456789";

// Grab elements from HTML
var button = document.querySelector("#generateButton");
var passwordBox = document.getElementById("passwordBox");
var lowercaseSwitch = document.querySelector("#lowercaseSwitch");
var uppercaseSwitch = document.querySelector("#uppercaseSwitch");
var numericSwitch = document.querySelector("#numericSwitch");
var specialCharSwitch = document.querySelector("#specialCharSwitch");

// Initializing variables
var password = "";
var allParameters = {}; // Object includes all possible parameters
var userParameters = {}; // Object includes only parameters selected by user
var parameterCount = 0
var possibleChars = "";

//************************************ Functions ************************************//

// 1. input a character from each required parameter into the password
var requiredParams = function(userParameters) {
    if (userParameters["lowercase"]) {
        possibleChars = possibleChars + lettersLo;
        // Generate random lowercase letter
        var newChar = lettersLo[ Math.floor(Math.random()*lettersLo.length) ];
        password = password + newChar;
    };
    if (userParameters["uppercase"]) {
        possibleChars = possibleChars + lettersUp;
        // Generate random uppercase letter
        var newChar = lettersUp[ Math.floor(Math.random()*lettersUp.length) ];
        password = password + newChar;
    };
    if (userParameters["numeric"]) {
        possibleChars = possibleChars + numbers;
        // Generate random number between 0 - 9
        var newChar = numbers[ Math.floor(Math.random()*numbers.length) ];
        password = password + newChar;
        // var newChar = Math.floor(Math.random()*10);
        // password.push(newChar);
    };
    if (userParameters["specialChar"]) {
        possibleChars = possibleChars + specialCharString;
        // Generate random special character
        var newChar = specialCharString[ Math.floor(Math.random()*specialCharString.length) ];
        password = password + newChar;
    };

    return [password, possibleChars];
}

// 2. rest of letters made up of array of all possible characters
var remainingChars = function(possibleChars, passwordLength, parameterCount) {
    // Calculate remaining characters to fill
    var remainingCharsCount = passwordLength - parameterCount;
    for (var i=0; i<remainingCharsCount; i++) {
        var newChar = possibleChars[ Math.floor(Math.random()*possibleChars.length) ];
        password = password + newChar;
    }
    return password;
}

// 3. Scramble order of characters
var shuffle = function(string) {
    stringArray = string.split("");
    i = stringArray.length;
    while (i>0){
        index = Math.floor(Math.random()*i);
        i--;
        temp = stringArray[i];
        stringArray[i] = stringArray[index];
        stringArray[index] = temp;
 }
    return stringArray.join("");
}

// Call functions when user clicks "Generate Password" button
var handleButtonClick = function() {
    // Clearing password and parameters in case user wants to generate another password
    password = "";
    allParameters = {}; // Object includes all possible parameters
    userParameters = {}; // Object includes only parameters selected by user
    parameterCount = 0
    possibleChars = "";

    // Get user input for parameters
    var minLength = parseFloat(prompt("minLength?"));
    var maxLength = parseFloat(prompt("maxLength?"));
    var lowercase = lowercaseSwitch.checked;
    var uppercase = uppercaseSwitch.checked;
    var numeric = numericSwitch.checked;
    var specialChar = specialCharSwitch.checked;
     console.log(minLength);
   console.log(maxLength);
    // allParameters object storing whether user has selected True/False for each parameter
    allParameters["lowercase"] = lowercase;
    allParameters["uppercase"] = uppercase;
    allParameters["numeric"] = numeric;
    allParameters["specialChar"] = specialChar;

    // Enter user selected parameters into userParameters object
    Object.keys(allParameters).forEach( function(key){
        if (allParameters[key]){
        userParameters[key] = allParameters[key];
        };
    });

    // Count number of parameters
    parameterCount = Object.keys(userParameters).length;

    // Generate a random password length between the minimum and maximum length specified by user
    var passwordLength = Math.max(parameterCount, minLength) + Math.floor( Math.random() * (maxLength- Math.max(parameterCount, minLength) +1) );

    // Validating password criteria
    if (parameterCount < 1){
        alert("Please select at least one character type");
    } else if (parameterCount > maxLength) {
        alert("Too many parameters selected for this maximum length. Please select fewer parameters or increase the max length.")
    } else if (maxLength < minLength) {
        alert("Maximum length must be greater than minimum length.")
    } else {
    // If all validation checks are passed, run functions to create password
        [password, possibleChars] = requiredParams(userParameters);
        password = remainingChars(possibleChars, passwordLength, parameterCount);
        password = shuffle(password);
        // Display password on page
        passwordBox.textContent = password;
    }

}

// Event listener for "Generate Password" button
button.addEventListener("click", handleButtonClick);