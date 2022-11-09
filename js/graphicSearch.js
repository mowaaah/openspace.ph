
`use strict`

const graphicSearch= document.getElementById ("graphicSearch")
const book = document.querySelectorAll (".book")

let timer;

function graphicLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (graphicSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

graphicSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (graphicLiveSearch,  500)
})
