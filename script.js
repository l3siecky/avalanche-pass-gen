const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()-_=+{}[]|;:'\",.<>?/";
const spaces = " ";

document.getElementById("generateBtn").addEventListener("click", generatePassword);

function generatePassword() {
let passwordOptions = "";
let generatedPassword = "";

if (document.getElementById("numbers").checked) {
passwordOptions += numbers;
}

if (document.getElementById("lowercase").checked) {
passwordOptions += lowercase;
}

if (document.getElementById("uppercase").checked) {
passwordOptions += uppercase;
}

if (document.getElementById("symbols").checked) {
passwordOptions += symbols;
}

if (document.getElementById("spaces").checked) {
passwordOptions += spaces;
}

if (passwordOptions === "") {
alert("Please select at least one option.");
return;
}

const passwordLength = 12;

for (let i = 0; i < passwordLength; i++) {
const randomIndex = Math.floor(Math.random() * passwordOptions.length);
generatedPassword += passwordOptions[randomIndex];
}

document.getElementById("output").innerText = generatedPassword;
}

// add copy option to output

function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("show");
  
    // hide the notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
  
  function copyPassword() {
    const generatedPassword = document.getElementById("output").textContent;
  
    // Create a temporary input element to copy the password to clipboard
    const tempInput = document.createElement("input");
    tempInput.value = generatedPassword;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    // show notification
    showNotification();
  }
  
  


