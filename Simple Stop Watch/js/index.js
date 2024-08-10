let Start = document.getElementById("Start");
let seconds = document.getElementById("seconds")
let minutes = document.getElementById("minutes")
let hours = document.getElementById("hour")

let sec= 0;
let mint = 0;
let hour = 0;
Start.addEventListener("click",()=>{
    let pouse = document.getElementById("pouse");
    let reset = document.getElementById("reset");
    let secs =function() {
        sec =sec+1
       if (sec == 60) {
            sec = 0
            mint = mint+1;
        if (mint == 60) {
            mint =0
        }else{
            minutes.innerHTML= mint
        }
       }else {
        seconds.innerHTML = sec
       }
    }
  let  second = setInterval(secs, 1000);
    pouse.addEventListener("click",()=>{
        clearInterval(second)
    })
    reset.addEventListener("click",()=>{
        sec =0
        seconds.innerHTML = sec
        minutes.innerHTML= mint

    })
})




