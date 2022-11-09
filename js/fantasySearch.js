
`use strict`

const fantasySearch= document.getElementById ("fantasySearch")
const book = document.querySelectorAll (".book")

let timer;

function fantasyLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (fantasySearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

fantasySearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (fantasyLiveSearch, 500)
})
