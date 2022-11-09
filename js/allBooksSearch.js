`use strict`

const allSearch = document.getElementById ("allSearch")
const book = document.querySelectorAll (".book")

let timer;

function allBooksSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (allSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}
console.log(allSearch, book)
allSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        // setTimeout for making delay 500ms
        timer = setTimeout (allBooksSearch, 500)
})








