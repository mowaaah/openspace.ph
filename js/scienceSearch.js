
`use strict`

const scienceSearch = document.getElementById ("scienceSearch")
const book = document.querySelectorAll (".book")

let timer;

function scienceLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (scienceSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

scienceSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (scienceLiveSearch , 500)
})
