
`use strict`

const tvSearch =  document.getElementById ("tvSearch")
const book = document.querySelectorAll (".book")

let timer;

function tvLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (tvSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

tvSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (tvLiveSearch,  500)
})
