let add = document.getElementById("Add");
let message = document.getElementById("message");
function generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
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
Event listener for Edit and Delete buttons using event delegation
message.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit")) {
        let id = event.target.getAttribute("data-id");
        let newValue = prompt("Edit your task:", localStorage.getItem(id));
        if (newValue !== null) {
            localStorage.setItem(id, newValue);
            document.querySelector(`#${id} #text`).innerText = newValue;
        }
    } else if (event.target.classList.contains("delete")) {
        let id = event.target.getAttribute("data-id");
        localStorage.removeItem(id);
        document.getElementById(id).remove();
    }
});
