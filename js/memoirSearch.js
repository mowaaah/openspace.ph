
`use strict`

const memoirSearch = document.getElementById ("memoirSearch")
const book = document.querySelectorAll (".book")

let timer;

function memoirLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (memoirSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

memoirSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (memoirLiveSearch,  500)
})
