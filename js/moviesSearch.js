
`use strict`

const moviesSearch =  document.getElementById ("moviesSearch")
const book = document.querySelectorAll (".book")

let timer;

function moviesLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (moviesSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

moviesSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (moviesLiveSearch,  500)
})
