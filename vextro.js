document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const Msg = document.getElementById('msg');

    // Open login popup
    loginBtn.addEventListener("click", function() {
        document.getElementById("login-popup").style.display = "block";
        document.getElementById('msg').style.display = 'none';
    });

    // Open signup popup
    signupBtn.addEventListener("click", function() {
        document.getElementById("signup-popup").style.display = "block";
        document.getElementById('msg').style.display = 'none';
    });

    // Chat send functionality
    sendBtn.addEventListener("click", function() {
        let message = userInput.value.trim();
        if (message !== "") {
            console.log("User Message:", message);
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendBtn.click();
        }
    });
});

// Close popup function
function lgclose(){
    document.getElementById('login-popup').style.display = "none";
    document.getElementById('msg').style.display = 'block';
}
function signupclose(){
    document.getElementById('signup-popup').style.display = "none";
    document.getElementById('msg').style.display = 'block';
}
// Login Function
function loginUser() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    if (username && password) {
        alert("Login Successful!");
        closePopup("login-popup");
    } else {
        alert("Please fill all fields!");
    }
}

// Signup Function
function signupUser() {
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    if (username && email && password) {
        alert("Signup Successful!");
        closePopup("signup-popup");
    } else {
        alert("Please fill all fields!");
    }
}
