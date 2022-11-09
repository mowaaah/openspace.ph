const addToRead = document.getElementById("btn_change201");

function getBase64Image(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0,100,160);
     let dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


function addToSpace ( ) {
    
    console.log('grabbing the title..');

    let bookTitle = document.getElementById ("title1").innerText
    let bookAuthor = document.getElementById ("author1").innerText
    let date = new Date().toISOString().slice(0, 10)
    let bookCover = document.getElementById ("cover1")
    localStorage.setItem("title", JSON.stringify (bookTitle));
    localStorage.setItem("author", bookAuthor);
    localStorage.setItem("date", date)
imgData = getBase64Image(bookCover);
localStorage.setItem("imgData", imgData);
    console.log(bookTitle);
    console.log(bookAuthor);
    console.log(bookCover);
    }

addToRead.addEventListener ("click", addToSpace)








