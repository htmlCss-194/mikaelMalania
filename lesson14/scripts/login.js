function handleLogin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let result = document.getElementById("result");

    if (username.value.length >= 3) {
        if (password.value.length >= 8) {
            result.innerHTML = "Correct Format! you may procceed";
            result.style.color = "green";
            username.style.borderColor = "red";
        } else {
            result.innerHTML = "Password must be at least 8 chars long!";
            result.style.color = "red";
            password.style.borderColor = "red";
        }
    } else {
        result.innerHTML = "Username must be at least 3 chars long!";
        result.style.color = "red";
    };
}