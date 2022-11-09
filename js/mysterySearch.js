
`use strict`

const mysterySearch = document.getElementById ("mysterySearch")
const book = document.querySelectorAll (".book")

let timer;

function mysteryLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (mysterySearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

mysterySearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (mysteryLiveSearch, 500)
})
