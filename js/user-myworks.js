`use strict`;

const form = document.getElementById("form");
const title = document.getElementById("title-work");
const alert_ms = document.getElementById("alert_form");
const book_author = document.getElementById("author_user");

let today = new Date().toISOString().slice(0, 10);
const date = document.getElementById("date_added").innerHTML = today;

const book_cover = document.getElementById("showImage");
const bookvalue = document.getElementById("coverUpload");

const book_work = document.getElementById("showEpub");
const bookfile = document.getElementById("epubUpload");

const book_description = document.getElementById("book-description");
const workShelf = document.getElementById("works_in_shelf");
const add = document.getElementById("add");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	workValidation();
});

const workValidation = function () {
	if (book_work.value === "") {
		console.log(`failure`);
		alert_ms.innerHTML = "You need to upload an epub file";
	} else {
		console.log(`success`);
		alert_ms.innerHTML = "";
		acceptData();
		createWork();
	}
};

let data = {};

const acceptData = function () {
	data["title_work"] = title.value;
	data["author_user"] = book_author.innerHTML;
	data["description"] = book_description.value;
	data["date_added"] = date;
	data["book_cover"] = book_cover.innerHTML;
	data["book_work"] = book_work.innerHTML;
	console.log(data);
	add.setAttribute("data-bs-dismiss", "modal");
	add.click();
	(() => {
		add.setAttribute("data-bs-dismiss", "");
	})();
};

const createWork = function () {
	workShelf.innerHTML += `
    <div class="row mt-3">
        <div class="col-md-2">
            <div>
                ${data.book_cover}
            </div>
        </div>
        <div class="col-md-10">
            <div class="mt-2">
                <b style="font-family:Arial, Helvetica, sans-serif; color: #441702;">Title:</b> ${data.title_work}
            </div>
            <div class="mt-2">
                <b style="font-family:Arial, Helvetica, sans-serif; color: #441702;">Author:</b> ${data.author_user}
            </div>
            <div class="mt-2">
                <b style="font-family:Arial, Helvetica, sans-serif; color: #441702;">Date Added: </b><span>${data.date_added}</span>
            </div>
            <div class="mt-2" style="font-size: medium; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">
                ${data.description}
            </div>
            <div class="mt-2">
                <hr style="color: #441702;">
                <center>
                <a href="${data.book_work}" style="color: #441702;" id="dl_btn"><i class="bi bi-file-earmark-arrow-down fst-normal">Download</i></a>
                <i class="bi bi-three-dots-vertical"></i>
                <i class="bi bi-trash2 fst-normal" style="color: #A88463;" onclick="deleteWork(this)">Remove</i>
                </center>
                <hr>
            </div>
        </div>
    </div>
       
    `;
	resetForm();
};

const deleteWork = function (e) {
	e.parentElement.parentElement.parentElement.parentElement.remove();
};

const resetForm = function () {
	title.value = "";
	book_cover.value = "";
	book_description.value = "";
	book_cover.innerHTML = "";
	bookvalue.value = "";
	book_work.innerHTML = "";
	bookfile.value = "";
};

//Book Cover function
function getBookCover() {
	let reader = new FileReader();
	reader.addEventListener("load", function () {
		sessionStorage.setItem("bookImage", reader.result);
		showImage();
	});
	reader.readAsDataURL(event.target.files[0]);
}
function showImage() {
	let showImage = document.getElementById("showImage");
	let imageURL = sessionStorage.getItem("bookImage");
	showImage.innerHTML =
		"<img style='width:100px;' class='img-thumbnail' src='" + imageURL + "'>";
}

//Book Epub function
function docxFile() {
	let reader = new FileReader();
	reader.addEventListener("load", function () {
		sessionStorage.setItem("file", reader.result);
		showEpub();
	});
	reader.readAsDataURL(event.target.files[0]);
}
function showEpub() {
	let showFile = document.getElementById("showEpub");
	let fileURL = sessionStorage.getItem("file");
	// showFile.innerHTML = "<a href='" + fileURL + "'></a>";
	showFile.innerHTML = fileURL;
}

function getDetails() {
	let work_title = document.getElementById("title-work").value;
	let work_author = document.getElementById("author_user").innerHTML;
    let work_dateAdded = document.getElementById("date_added").innerHTML;
    let work_synopsis = document.getElementById("book-description").value;

	sessionStorage.setItem("workTitle", JSON.stringify(work_title));
	sessionStorage.setItem("workAuthor", JSON.stringify(work_author));
    sessionStorage.setItem("workDateAdded", JSON.stringify(work_dateAdded));
    sessionStorage.setItem("workSynopsis", JSON.stringify(work_synopsis));
}


//EDIT BIO FUNCTION

let bioDisplay = document.getElementById("bioDisplay");
let editBio = document.getElementById("editBio");

function editBioFunction() {
	bioDisplay.textContent = editBio.value;
}

// EDIT PROFILE PICTURE
// const profile_picvalue = document.getElementById("editpic");

function getProfilePic() {
	let reader = new FileReader();
	reader.addEventListener("load", function () {
		sessionStorage.setItem("profileImage", reader.result);
		showProfilePic();
		// resetImage()
	});
	reader.readAsDataURL(event.target.files[0]);
}
function showProfilePic() {
	let showProfilePic = document.getElementById("showProfilePic");
	let imageURL = sessionStorage.getItem("profileImage");
	showProfilePic.innerHTML = 
		// "<img style='width:100px;' class='img-thumbnail' src='" + imageURL + "'>";
        "<img src='" + imageURL + "' class='img-fluid img-thumbnail mt-3' style='width: 200px; height: 200px; box-shadow: 10px 10px 5px #ccc; float: right;'>"
}


// const resetImage = function () {
// 	profile_picvalue.value = "";
// };

// const profile_pic = document.getElementById("showPic");
// let picDisplay = document.getElementById("profilePic");


// function editProfilePic () {
//     picDisplay.innerHTML =  editPic.innerHTML;
// }