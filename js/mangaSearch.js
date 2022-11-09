
`use strict`

const mangaSearch = document.getElementById ("mangaSearch")
const book = document.querySelectorAll (".book")

let timer;

function mangaLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (mangaSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

mangaSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (mangaLiveSearch,  500)
})
