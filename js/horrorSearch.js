
`use strict`

const horrorSearch = document.getElementById ("horrorthriSearch")
const book = document.querySelectorAll (".book")

let timer;

function horrorLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (horrorSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

horrorSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (horrorLiveSearch, 500)
})
