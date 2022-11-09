
`use strict`

const romanceSearch = document.getElementById ("romanceSearch")
const book = document.querySelectorAll (".book")

let timer;

function romanceLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (romanceSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

romanceSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (romanceLiveSearch , 500)
})
