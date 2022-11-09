
`use strict`

const actionSearch = document.getElementById ("actionSearch")
const book = document.querySelectorAll (".book")

let timer;

function actionLiveSearch () {
    for (let i = 0; i < book.length;  i++) {
        if (book[i].innerText.toLowerCase().includes (actionSearch.value.toLowerCase ())) {
            book[i].classList.remove("hidden");
        } 
        else {
            book[i].classList.add ("hidden");
        }
    }
}

actionSearch.addEventListener ("keyup", () => {
        clearTimeout (timer)    
        timer = setTimeout (actionLiveSearch, 500)
})
