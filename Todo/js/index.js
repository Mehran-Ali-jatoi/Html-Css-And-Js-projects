let item = document.querySelector("#item")
let todo = document.querySelector("#todo")


item.addEventListener("keyup",(e)=>{
    if (e.key =="Enter") {
        adtodo(item.value)
        item.value=""
    }
})

const adtodo = (item)=>{
    const listitem = document.createElement("li")
    listitem.innerHTML=` 
                ${item}
                        <i class="fas fa-times">X</i>
    `
    todo.appendChild(listitem)


    listitem.addEventListener("click",()=>{
        listitem.classList.toggle("done")
        console.log("done");
        
    })
    listitem.querySelector('i').addEventListener("click",()=>{
        listitem.remove()
    })
}