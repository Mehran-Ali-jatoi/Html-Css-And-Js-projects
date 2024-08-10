let hour = document.getElementById("hour");
let mint = document.getElementById("mint")
let second = document.getElementById("second")

setInterval(() => {
    let date = new Date()
    mint.innerHTML =date.getMinutes();
    hour.innerHTML = date.getHours();
    second.innerHTML=date.getSeconds(); 
}, 100);