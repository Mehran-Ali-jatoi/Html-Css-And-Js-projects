let box = document.querySelectorAll('.boxes')
let reset = document.getElementById("reset")
let turn ="X"
let win = document.getElementById("win")
let winer = document.getElementsByClassName("popup")[0]
let whoein= ()=>{
    let boxtext = document.querySelectorAll('.boxes')
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    win.forEach((e)=>{
        if ((boxtext[e[0]].innerText == boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText == boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !=="")) {
            winer.classList.toggle("hide")
        winer.innerText=`Congrates You Win ${boxtext[e[0]].innerText}....!`
            setTimeout(() => {
                clear()
                winer.classList.toggle("hide")
            }, 1500);
        }
    })
}

box.forEach((element)=>{
  
    element.addEventListener("click",()=>{
        
        if ((turn =="X") &&(element.innerText =="")) {
            element.innerText=turn;
            turn ="0"
           win.innerText=`Your Turn ${turn}`
        }else if ((turn =="0")&&(element.innerText =="") ) {
            element.innerText=turn
            turn="X"
           win.innerText=`Your Turn ${turn}`

        }
        whoein()
    
    })
    
})
function clear() {
    box.forEach((element)=>{
        element.innerText=""
    })
}
reset.addEventListener("click",()=>{
    box.forEach((element)=>{
        
        element.innerText=""
    })
})
