let start = document.getElementById("start");
let form = document.getElementById("form")
let Check = document.getElementById("Check");
let Ansawer = document.getElementById("Ansawer")
let rendom = Math.floor(Math.random() *  100)
let Attempts = 0;
start.addEventListener("click",()=>{
    start.style.display ="none"
    form.style.display="block"
})
Check.addEventListener("click",()=>{
    let number = document.getElementById("number").value;
   console.log(rendom);
   Attempts =Attempts+1
    if (number == rendom) {
        Ansawer.innerHTML =`
        Congrates you win on these Attempts ${Attempts}
        `
        rendom = Math.floor(Math.random() *  100)

         Ansawer.style.color="green"
    }else if (number <= rendom) {
        Ansawer.innerHTML =`
        your number is less than Guessing number
        `
         Ansawer.style.color="red"
    }
    else {
        Ansawer.innerHTML =`
        your number is Grater than Guessing number
        `
        Ansawer.style.color="red"
    }
    
  
    
})