document.addEventListener("DOMContentLoaded", () => {
    /* Click Event listener for showing the sign up form */
    document.getElementById("show_sign_up_button").addEventListener("click", toggleShowLoginForm);
    
    /* Click Event listener for showing the sign in form */
    document.getElementById("show_sign_in_button").addEventListener("click", toggleShowLoginForm);

    /* Submit event listener for signing in. */ 
    document.getElementById("sign_in_form").addEventListener("submit", submitSignInform);
    
    /* Submit event listener for signing up. */ 
    document.getElementById("sign_up_form").addEventListener("submit", submitSignUpform);
});

/**
* DOCU: This will handle toggle show/hide of login/register form
* Triggered:#show_sign_up_button, #show_sign_in_button
* Last Updated: November 21, 2022
* @function
* @memberOf index.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
toggleShowLoginForm = (event) => {
    let button_selector = event.target;

    button_selector.closest("form").classList.add("hidden");

    if(button_selector.id === "show_sign_up_button"){
        button_selector.closest("form").nextElementSibling.classList.remove("hidden");
    }
    else{
        button_selector.closest("form").previousElementSibling.classList.remove("hidden");
    }

    button_selector.closest("form").reset();
}

/**
* DOCU: This will handle login form submission. <br>
* Triggered: #show_sign_in_button <br>
* Last Updated: November 21, 2022
* @function
* @memberOf index.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
submitSignInform = (event) => {
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
* DOCU: This will handle register form submission. <br>
* Triggered: #show_sign_up_button <br>
* Last Updated: November 21, 2022
* @function
* @memberOf index.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
submitSignUpform = (event) => {
    event.preventDefault();
    let sign_up_form = event.target;
    let login_inputs = sign_up_form.querySelectorAll("input");

    for (let counter = 0; counter < login_inputs.length; counter++) {
        validateInput(login_inputs[counter]);
    }

    if(!sign_up_form.querySelectorAll(".error_input").length){
        sign_up_form.querySelector("#show_sign_in_button").click();
    }
}