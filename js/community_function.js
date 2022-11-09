const form = document.getElementById("form");
const nameUser = document.getElementById("name");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const standing = document.getElementById("RUoptions");
const comment = document.getElementById("openSpace");
const div_comments = document.getElementById("comments");
const add = document.getElementById("add_comment");
const alert_msg = document.getElementById("alert");
const edit_comment = document.getElementById("editComment");
const new_comment = document.getElementById("add");

form.addEventListener("submit", function(e){
    e.preventDefault();
    formValidation()
});

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     formValidation()
// });

const formValidation = function () {
    if (standing.value === "") {
        console.log("failed validation");
        alert_msg.innerHTML = "ⓘ<i>Please choose in the options above</i>";
    }
    else {
        console.log("sucessful validation");
        alert_msg.innerHTML = "";
        acceptData()
        createComment()
    }
};

let data = {}

const acceptData = function () {
    data["name"] = nameUser.value;
    data["username"] = userName.value;
    data["standing"] = standing.value;
    data["comment"] = comment.value;
    console.log(data);
};

const createComment = function() {
    div_comments.innerHTML += `
        <div class="col-md-6">
            <p style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana; font-size: x-large; color: #441702;">
            ${data.name}</p>
            <p class="fst-italic" style="font-size: small;">${data.username}</p>
            <p class="fw-bold" style="color: #441702;">${data.standing}</p>
            <p>${data.comment}</p>
            <span><i class="bi bi-trash2" 
                onclick="deleteComment(this);">Remove</i></span>
            <hr>
        </div>
    `;
    resetComment();
}

const deleteComment = function(e){
    e.parentElement.parentElement.remove()
}

const resetComment = function () {
    nameUser.value = "";
    userName.value = "";
    email.value = "";
    standing.value = "";
    comment.value = "";
    
}

// const reloadPage = function () {
//     location.reload();
// }

