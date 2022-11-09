//to show the title, author, and date in the user-mybooks.html

let titleDisplay = document.querySelector(".titleDisplay")
let authorDisplay = document.querySelector(".authorDisplay")
let dateDisplay = document.querySelector(".dateDisplay")
let coverDisplay = document.querySelector (".coverDisplay")

let thisTitle1 = localStorage.getItem('title')
titleDisplay.innerHTML = thisTitle1

let thisAuthor1 = localStorage.getItem('author')
authorDisplay.innerText = thisAuthor1

let thisDate1 = localStorage.getItem('date')
dateDisplay.innerText = thisDate1

let thisCover1 = localStorage.getItem ('imgData')
coverDisplay.innerHTML = thisCover1

coverDisplay.src =  "data:image/png;base64," + thisCover1

// //book 2

// let thisTitle2 = localStorage.getItem('title2')
// titleDisplay.innerText = thisTitle2


// function appendTitle2 () {
//   const node = document.createElement("li");
//   node.appendChild(thisTitle2);
//   document.getElementById("myBooksParent").appendChild(node);
// }





// let thisAuthor2 = localStorage.getItem('author2')
// authorDisplay.innerText = thisAuthor2

// let thisDate2 = localStorage.getItem('date2')
// dateDisplay.innerText = thisDate2

// let thisCover2 = localStorage.getItem ('imgData2')
// coverDisplay.innerHTML = thisCover2

// coverDisplay.src =  "data:image/png;base64," + thisCover2











