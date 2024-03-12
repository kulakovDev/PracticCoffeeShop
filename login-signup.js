const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");

// Скрываем форму регистрации при загрузке страницы
signupForm.style.display = "none";

loginTab.addEventListener("click", function () {
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
});

signupTab.addEventListener("click", function () {
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
});
