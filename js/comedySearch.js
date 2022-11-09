
`use strict`

const comedySearch  = document.getElementById ("comedySearch")
const book = document.querySelectorAll (".book")

let timer;

function comedyLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (comedySearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

comedySearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (comedyLiveSearch, 500)
})
