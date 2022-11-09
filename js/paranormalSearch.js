
`use strict`

const paranormalSearch = document.getElementById ("paranormalSearch")
const book = document.querySelectorAll (".book")

let timer;

function paranormalLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (paranormalSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

paranormalSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (paranormalLiveSearch, 500)
})
