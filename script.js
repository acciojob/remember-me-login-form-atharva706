```javascript
const form = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const checkbox = document.getElementById("checkbox");

const existing = document.getElementById("existing");


// Form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = username.value;
    const pass = password.value;

    // Login alert
    alert(`Logged in as <${user}>`);


    // Remember Me is checked
    if (checkbox.checked) {

        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        existing.style.display = "block";
    }

    // Remember Me is unchecked
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

        alert(`Logged in as <${savedUsername}>`);

    }

});
```