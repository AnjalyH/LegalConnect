console.log("Welcome to LegalConnect!");

// Registration Form Validation

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("password").value;

        if (password.length < 8) {

            alert("Password must contain at least 8 characters!");

        } else {

           alert("Registration form validated! Account creation coming soon.");

        }

    });

}

// Login Form Validation

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("loginPassword").value;

        if (password.length < 8) {

            alert("Password must contain at least 8 characters!");

        } else {

           alert("Login form validated! Backend authentication coming soon.");

        }

    });

}