// Initialize an object with credentials
var credentials = {
    "admin@example.com": "password123",
    "user": "secure456",
    "shanoob": "secret789"
};

function validateLogin() {
    // Get the values entered by the user
    var emailOrUsername = document.getElementById("emailOrPhone").value;
    var password = document.getElementById("password").value;

    // Check if the entered value is an email address
    if (isValidEmail(emailOrUsername)) {
        // Check if the entered email exists in the credentials object
        if (credentials.hasOwnProperty(emailOrUsername)) {
            // Compare the entered password with the stored password
            if (credentials[emailOrUsername] === password) {
                // Redirect to another page if the combination is correct
                window.location.href = "success.html"; // Change the URL to your desired redirect target
                return;
            }
        }
    } else {
        // Check if the entered username exists in the credentials object
        if (credentials.hasOwnProperty(emailOrUsername) && credentials[emailOrUsername] === password) {
            // Redirect to another page if the combination is correct
            window.location.href = "success.html"; // Change the URL to your desired redirect target
            return;
        }
    }

    // Display an error message if the combination is incorrect
    alert("Incorrect email/username or password. Please try again.");
}

// Function to validate if a given input is a valid email address
function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
