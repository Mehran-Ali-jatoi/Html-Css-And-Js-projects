// let edit =document.getElementById("edit")
// let deleate =document.getElementById("deleate")
// let add = document.getElementById("Add")
// let id  = Math.floor(Math.random() / 1 * 1000)
// let message = document.getElementById("message")
// function generateID() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// // Function to save a record

// add.addEventListener("click",()=>{
//     let crud = document.getElementById("crud").value;
//     let data = localStorage.getItem(id,crud)
//     if (crud !=="") {
//         const id = generateID();  
//         localStorage.setItem(id,crud); 
//         message.innerHTML +=`
//          <div class="todo" >
//                     <div class="left">
//                         <p id="text">${data}</p>
//                     </div>
//                     <div class="right">
//                         <button id="edit">edit</button>
//                         <button id="deleate">deleate</button>
//                     </div>
//                 </div>`
//     }else{
//         alert("first input your value")
//     }
   
// })
// edit.addEventListener("click",()=>{
//     alert(localStorage.key("item"))
// })



let add = document.getElementById("Add");
let message = document.getElementById("message");

function generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to save a record
add.addEventListener("click", () => {
    let crud = document.getElementById("crud").value;
    if (crud !== "") {
        const id = generateID();
        localStorage.setItem(id, crud);
        let data = localStorage.getItem(id); // Retrieve the stored data using the generated id
        message.innerHTML += `
            <div class="todo" id="${id}">
                <div class="left">
                    <p id="text">${data}</p>
                </div>
                <div class="right">
                    <button class="edit" data-id="${id}">Edit</button>
                    <button class="delete" data-id="${id}">Delete</button>
                </div>
            </div>`;
    } else {
        alert("Please input your value first");
    }
});

// Event listener for Edit and Delete buttons using event delegation
// message.addEventListener("click", (event) => {
//     if (event.target.classList.contains("edit")) {
//         let id = event.target.getAttribute("data-id");
//         let newValue = prompt("Edit your task:", localStorage.getItem(id));
//         if (newValue !== null) {
//             localStorage.setItem(id, newValue);
//             document.querySelector(`#${id} #text`).innerText = newValue;
//         }
//     } else if (event.target.classList.contains("delete")) {
//         let id = event.target.getAttribute("data-id");
//         localStorage.removeItem(id);
//         document.getElementById(id).remove();
//     }
// });
// Yeh function sun'ne wala (event listener) hai jo "click" events ka intezar kar raha hai.
document.getElementById("message").addEventListener("click", function(event) {

    // Yeh check karta hai agar click hua button par jiska class "edit" hai.
    if (event.target.className.indexOf("edit") !== -1) {
        
        // Yeh id ko uthata hai jo data-id attribute mein hai.
        var id = event.target.getAttribute("data-id");

        // Yeh nayi value mangta hai user se, purani value ko display karke.
        var newValue = prompt("Apna task edit karein:", localStorage.getItem(id));

        // Agar user ne cancel nahi kiya to yeh nayi value ko local storage mein save karta hai.
        if (newValue !== null) {
            localStorage.setItem(id, newValue);

            // Yeh HTML element ko dhoondta hai aur uska text update karta hai.
            document.querySelector("#" + id + " #text").innerText = newValue;
        }
    
    // Yeh check karta hai agar click hua button par jiska class "delete" hai.
    } else if (event.target.className.indexOf("delete") !== -1) {

        // Yeh id ko uthata hai jo data-id attribute mein hai.
        var id = event.target.getAttribute("data-id");

        // Yeh local storage se item ko delete karta hai.
        localStorage.removeItem(id);

        // Yeh HTML element ko page se hata deta hai.
        document.getElementById(id).remove();
    }
});
