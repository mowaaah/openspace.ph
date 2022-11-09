
`use strict`

const autobioSearch = document.getElementById ("autobioSearch")
const book = document.querySelectorAll (".book")

let timer;

function autobioLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (autobioSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

autobioSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (autobioLiveSearch,  500)
})
