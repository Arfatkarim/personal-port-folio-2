document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    alert(`Logged in with Email: ${email}`);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userType = document.getElementById('userType').value;
    alert(`Registered as ${userType} with Email: ${email}`);
});
// Button click event listener
document.getElementById("loginBtn").addEventListener("click", function() {
    alert("Login button clicked!");
});
document.getElementById("loginBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
    } else {
        alert("Login successful!");
    }
});
const toggleButton = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-collapse');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
const dateElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
dateElement.innerText = currentYear;
// Button click event for form validation
document.getElementById("loginBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
    } else {
        alert("Login successful!");
    }
});

// Navbar toggle for mobile view
const toggleButton = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-collapse');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Dynamic date display in footer
const dateElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
dateElement.innerText = currentYear;
