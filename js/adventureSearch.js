
`use strict`

const adventureSearch = document.getElementById ("adventureSearch")
const book = document.querySelectorAll (".book")

let timer;

function adventureLiveSearch() {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (adventureSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

adventureSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (adventureLiveSearch, 500)
})
