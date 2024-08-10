let numbersat ="1234567890"
let lowersat ="abcdefghijklmnopqrstuvwxyz"
let uppersat = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let symbolssat ="#$%&*"

let password = document.getElementById("password")
let number = document.getElementById("number");
let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let symbols = document.getElementById("symbols")
let Genrate =document.getElementById("genrate");
let totalchar =document.getElementById("char")

let genratedata =(data)=>{
    return data[Math.floor(Math.random()   / 1 *  data.length)]
}

let genratepass = (passwords="")=>{
    
    if (uppercase.checked) {
        passwords+= genratedata(uppersat)
    } if (lowercase.checked) {
        passwords += genratedata(lowersat)
    }if (number.checked) {
        passwords += genratedata(numbersat)
    }if (symbols.checked) {
        passwords+= genratedata(symbolssat)
    }if (passwords.length <totalchar.value) {
        return genratepass(passwords)
    }
    password.innerText =passwords
    
}

Genrate.addEventListener("click",()=>{
    genratepass()
})

