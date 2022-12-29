document.addEventListener("DOMContentLoaded", () =>{
    /* Click Event Listener for showing the sign up form */ 
    document.getElementById("show_sign_up_button").addEventListener("click", toggleShowLoginForm); 
    /* Click Event Listener for showing the sign in form */ 
    document.getElementById("show_sign_in_button").addEventListener("click", toggleShowLoginForm); 
    /* Submit Event Listener for submiting sign in form */ 
    document.getElementById("sign_in_form").addEventListener("submit", submitSignInForm);
    /* Submit Event Listener for submiting sign up form */ 
    document.getElementById("sign_up_form").addEventListener("submit", submitSignUpForm);
});

/**
 * DOCU: This will handle toggle show/hide of login/register form
 * Triggered: #show_sign_up_button, #show_sign_in_button
 * Last Updated: December 29, 2022
 * @memberOf index.js
 * @param {object} event = requires to get the selector/target.
 * @author Jerwin
 */ 
toggleShowLoginForm = (event) => {
    let button_selector = event.target;
    let form_title = document.getElementById("form_title");
    
    button_selector.closest("form").classList.add("hidden");

    if(button_selector.id === "show_sign_up_button"){
        button_selector.closest("form").nextElementSibling.classList.remove("hidden");
        form_title.innerText = "Register a new account.";
    }
    else{
        button_selector.closest("form").previousElementSibling.classList.remove("hidden");
        form_title.innerText = "Login your account.";
    }
}

/**
 * DOCU: This will handle login form submission.
 * Triggered: #sign_in_form
 * Last Updated: December 29, 2022
 * @memberOf index.js
 * @param {object} event = requires to get the selector/target.
 * @author Jerwin
 */ 
submitSignInForm = (event) => {
    event.preventDefault();
    let login_inputs = event.target.querySelectorAll("input");
   
    for (let counter = 0; counter < login_inputs.length; counter++) {
        validateInput(login_inputs[counter]);
    }

    if(!event.target.querySelectorAll(".error_input").length){
        window.location.replace("wall.html");
    }

}

/**
 * DOCU: This will handle register form submission.
 * Triggered: #sign_up_form
 * Last Updated: December 29, 2022
 * @memberOf index.js
 * @param {object} event = requires to get the selector/target.
 * @author Jerwin
 */ 
submitSignUpForm = (event) => {
    event.preventDefault();
    let login_inputs = event.target.querySelectorAll("input");
   
    for (let counter = 0; counter < login_inputs.length; counter++) {
        validateInput(login_inputs[counter]);
    }

    if(!event.target.querySelectorAll(".error_input").length){
        window.location.replace("wall.html");
    }

}

