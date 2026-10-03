//your JS code here. If required.
<script>
        let name = document.querySelector("#username");
        let password = document.querySelector("#password");
        let cb = document.querySelector("#checkbox")
        let btn = document.querySelector("button");

        btn.addEventListener("click", () => {
            alert(`logged in as ${name.value}`)
        }) 

        cb.addEventListener("change", () => {
            if (cb.checked) {
                localStorage.setItem("username", name.value)
                localStorage.setItem("password", password.value)
            }
            else {
                localStorage.removeItem("username")
                localStorage.removeItem("password")
            }
        })
    </script>