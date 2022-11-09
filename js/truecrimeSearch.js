
`use strict`

const trueCrimeSearch= document.getElementById ("trueCrimeSearch")
const book = document.querySelectorAll (".book")

let timer;

function trueCrimeLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (trueCrimeSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

trueCrimeSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (trueCrimeLiveSearch,  500)
})
