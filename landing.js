// Retrieve the selected username from session storage
var selectedUsername = sessionStorage.getItem("username");

// Display the username in the HTML element
document.getElementById("username").textContent = selectedUsername;
