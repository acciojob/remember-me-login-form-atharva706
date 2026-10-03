
const form = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const checkbox = document.getElementById("checkbox");

const existing = document.getElementById("existing");


// Check if saved credentials already exist
if (
    localStorage.getItem("username") &&
    localStorage.getItem("password")
) {
    existing.style.display = "block";
}


// Form submit
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert(`Logged in as ${user}`);


    // Remember Me checked
    if (checkbox.checked) {

        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        existing.style.display = "block";
    }

    // Remember Me unchecked
    else {

        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }

});


// Login as existing user
existing.addEventListener("click", function () {

    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }

});
