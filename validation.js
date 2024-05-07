
const submitButton = document.querySelector("#validate");

submitButton.addEventListener("click", function (event) {
    const userPassword = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    passwordValidation(userPassword, confirmPassword);
    //event.preventDefault();
});

function passwordValidation(userPassword, confirmPassword) {
    //const noMatch = document.querySelector("#no-match");
    if (userPassword != confirmPassword || !confirmPassword) {
        //let userPasswordFull = document.querySelector("#password");
        userPassword.className = "invalid-input";
        confirmPassword.className = "invalid-input";
        //noMatch.setAttribute("style", "visibility: visible");
        console.log("bad password");
    } //else {
        //userPassword.className = "";
        //confirmPassword.className = "";
        //noMatch.setAttribute("style", "visibility: hidden");
        //console.log("good password");
    }