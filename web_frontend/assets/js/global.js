
/**
* DOCU: This will validate the input. <br>
* Triggered: index and dashboard.js
* Last Updated: November 21, 2022
* @function
* @memberOf global.js
* @param {object} input = requires to get the selector/target.
* @author Jerwin
*/ 
validateInput = (input) => {
    if(input.value === ""){
        input.classList.add("error_input");
    }
    else{
        input.classList.remove("error_input");
    }
}

/**
* DOCU: This will generate random number for prototyping <br>
* Triggered: dashboard.js
* Last Updated: November 21, 2022
* @function
* @memberOf global.js
* @param {object} input = requires to get the selector/target.
* @author Jerwin
*/ 
generateRandom = () => {
    return Math.floor(Date.now() + Math.random());
}