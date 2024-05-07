
const submitButton = document.querySelector("#validate");

submitButton.addEventListener("click", function (event) {
    const userPassword = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    passwordValidation(userPassword, confirmPassword);
    event.preventDefault();
});

function passwordValidation(userPassword, confirmPassword) {
    const noMatch = document.querySelector("#no-match");
    if (userPassword.value != confirmPassword.value || !confirmPassword.value) {
        //let userPasswordFull = document.querySelector("#password");
        userPassword.className = "invalid-input";
        confirmPassword.className = "invalid-input";
        noMatch.setAttribute("style", "visibility: visible");
        console.log("bad password");
    } else {
        userPassword.className = "";
        confirmPassword.className = "";
        noMatch.setAttribute("style", "visibility: hidden");
        console.log("good password");
    }
}