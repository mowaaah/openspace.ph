
`use strict`

const youngAdultSearch = document.getElementById ("youngAdultSearch")
const book = document.querySelectorAll (".book")

let timer;

function youngAdultLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (youngAdultSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

youngAdultSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (youngAdultLiveSearch, 500)
})
