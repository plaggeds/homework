const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Senk0w0" && password === "neko neko nii") {
        alert("Welcome!");
        window.location.href = '/plagg/main-page/index.html';
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
