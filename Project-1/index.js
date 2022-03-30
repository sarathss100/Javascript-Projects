let count = 0;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")

function increment() {
    count += 1;
    let textCountIncrement = count.toString();
    countEl.innerText = textCountIncrement;
}

function decrement() {
    count -= 1;
    if(count >= 0) {
        let textCountDecrement = count.toString();
        countEl.innerText = textCountDecrement;
    }else {
        count = 0;
    }
}

function save() {
    saveEl.innerHTML += count + " - ";
    count = 0;
    let textCountReset = count.toString();
    countEl.innerText = textCountReset; 
}