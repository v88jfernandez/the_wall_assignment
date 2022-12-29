document.addEventListener("DOMContentLoaded", () =>{
    /* Submit event listener for creating new message */ 
    document.getElementById("create_message_form").addEventListener("submit", submitCreateMessageForm); 
});

/**
* DOCU: This will handle creation of new message. <br>
* Triggered: #create_message_form <br>
* Last Updated: December 29, 2022
* @function
* @memberOf wall.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
submitCreateMessageForm = (event) => {
    event.preventDefault();
    let create_message_form = event.target;
    let create_message_input = create_message_form.querySelector("textarea");
    let no_post_yet = document.getElementById("no_post_yet");

    validateInput(create_message_input);

    if(!create_message_form.querySelectorAll(".error_input").length){
        let message_clone = document.getElementById("clones_list").firstElementChild.cloneNode(true);

        message_clone.querySelector("p").innerText = create_message_input.value;
        message_clone.setAttribute("data-message-id", generateRandomId());

        create_message_form.reset();

        /* Event listener for newly added message */ 
        message_clone.querySelector(".create_comment_form").addEventListener("submit", submitCreateCommentForm);
        message_clone.querySelector(".delete_message_button").addEventListener("click", toggleShowConfirmDelete);
        message_clone.querySelector(".close_confirm_delete").addEventListener("click", toggleShowConfirmDelete);
        message_clone.querySelector(".delete_message_form").addEventListener("submit", submitDeleteMessage);
        message_clone.querySelector(".edit_message_button").addEventListener("click", showEditMessage);

        /* Prepend the new message */ 
        document.getElementById("messages_list").prepend(message_clone);
        
        if(no_post_yet){
            no_post_yet.remove();
        }
    }
}

/**
* DOCU: This will handle creation of new comment. <br>
* Triggered: .create_comment_form <br>
* Last Updated: December 29, 2022
* @function
* @memberOf wall.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
submitCreateCommentForm = (event) => {
    event.preventDefault();
    let create_comment_form = event.target;
    let create_comment_input = create_comment_form.querySelector("textarea");
    let item_container = create_comment_form.closest("li");

    validateInput(create_comment_input);
    
    if(!create_comment_form.querySelectorAll(".error_input").length){
        let comment_clone = document.getElementById("clones_list").lastElementChild.cloneNode(true);

        comment_clone.querySelector("p").innerText = create_comment_input.value;
        comment_clone.setAttribute("data-comment-id", generateRandomId());

        /* Event listener for newly added comment */ 
        comment_clone.querySelector(".delete_comment_button").addEventListener("click", toggleShowConfirmDelete);
        comment_clone.querySelector(".close_confirm_delete").addEventListener("click", toggleShowConfirmDelete);
        comment_clone.querySelector(".delete_message_form").addEventListener("submit", submitDeleteMessage);
        comment_clone.querySelector(".edit_comment_button").addEventListener("click", showEditMessage);

        /* Prepend the new comment */ 
        item_container.querySelector(".comments_list").prepend(comment_clone);

        create_comment_form.reset();
    }
}
/**
* DOCU: This will handle showing of confirm delete message. <br>
* Triggered: .delete_message_button <br>
* Last Updated: December 29, 2022
* @function
* @memberOf wall.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
toggleShowConfirmDelete = (event) => {
    let delete_message_button = event.target;

    if(delete_message_button.closest(".delete_item_container.show")){
        delete_message_button.closest(".delete_item_container").classList.remove("show");
    }
    else{
        delete_message_button.closest(".delete_item_container").classList.add("show");
    }

}

/**
* DOCU: This will deleting of item. <br>
* Triggered: .delete_message_form <br>
* Last Updated: December 29, 2022
* @function
* @memberOf wall.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
submitDeleteMessage = (event) => {
    event.preventDefault();
    let delete_message_form = event.target;

    delete_message_form.closest("li").remove();
}
/**
* DOCU: This will handle showing of edit message. <br>
* Triggered: submitCreateMessageForm <br>
* Last Updated: December 29, 2022
* @function
* @memberOf wall.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
showEditMessage = (event) => {
    let edit_button = event.target;
    let item_container = edit_button.closest("li");
    let message = item_container.querySelector("p");
    let update_clone = document.querySelector(".update_message_form").cloneNode(true);

    update_clone.querySelector("textarea").value = message.innerText;
    update_clone.addEventListener("submit", submitUpdateMessageForm);


    item_container.classList.add("update_item");

    message.replaceWith(update_clone);
}

/**
* DOCU: This will handle saving of edited message. <br>
* Triggered: showEditMessage <br>
* Last Updated: December 29, 2022
* @function
* @memberOf wall.js
* @param {object} event = requires to get the selector/target.
* @author Jerwin
*/ 
submitUpdateMessageForm = (event) => {
    event.preventDefault();

    let update_message_form = event.target;
    let item_container = update_message_form.closest("li");
    let temp_paragraph = document.createElement("p");

    temp_paragraph.innerText = update_message_form.querySelector("textarea").value;
    update_message_form.replaceWith(temp_paragraph);

    item_container.classList.remove("update_item");
}