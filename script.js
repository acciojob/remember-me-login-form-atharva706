let name = document.querySelector("#username");
        let password = document.querySelector("#password");
        let cb = document.querySelector("#checkbox");
        let btn = document.querySelector("#submit");
        let existing = document.querySelector("#existing");

        // Check if credentials already exist when page loads
        let savedUsername = localStorage.getItem("username");
        let savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
            existing.style.display = "block";
        }

        // Submit button
        btn.addEventListener("click", () => {

            if (cb.checked) {
                localStorage.setItem("username", name.value);
                localStorage.setItem("password", password.value);

                alert(`logged in as <${name.value}>`);
            } else {
                alert(`logged in as <${name.value}>`);
            }
        });

        // Remember Me checkbox
        cb.addEventListener("change", () => {

            if (!cb.checked) {
                localStorage.removeItem("username");
                localStorage.removeItem("password");

                existing.style.display = "none";
            }
        });

        // Login as existing user
        existing.addEventListener("click", () => {

            let savedUsername = localStorage.getItem("username");

            alert(`Logged in as ${savedUsername}`);
        });