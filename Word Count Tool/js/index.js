let btn = document.getElementById("btn")
let word_no = document.getElementById("word_no");
btn.addEventListener("click",()=>{
    let word = document.getElementById("word").value;
    let word_trimer = word.replace(/\s+/g," ").trim()
    let split= word_trimer.split(" ")
    word_no.innerText = split.length
})
