
let btn = document.getElementById("btn");
let pro = document.getElementById("problem")
let submit = document.getElementById("Submit")





btn.addEventListener("mousemove",(e)=>{
let First_name = document.getElementById("First_name").value
let Last_name = document.getElementById("Last_name").value
let email = document.getElementById("email").value
let pass =document.getElementById("pass").value
let con_pass = document.getElementById("con_pass").value  
    

    if (First_name.length<=2 ) {
        pro.innerText="please enter first  name  caharacter greater than 2 words"
        
    }else if (Last_name.length<=2) {
        pro.innerText="Please Enter Last Name Character greater Than 2 words"
     
    }else if(email.length<8){
        pro.innerText="Please Enter your Currect Email"
       
    }else if(pass.length<=7){
        pro.innerText="Please Enter Password Lass than 8 Character"
      
    }else if(pass !== con_pass){
        pro.innerText="Please Enter currect conform  Password "
       
    }
    else{
       pro.innerText ="you can submit your form now..."
    }
})

btn.addEventListener("mouseout",()=>{
    pro.innerText=""
})

// submit.addEventListener("mouseenter",(e)=>{
//     let clientxx = [420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456]
//     for (let index = 0; index < clientxx.length; index++) {
//         const element = clientxx[index];
//         console.log(element);
        
//         if (e.clientX ==element) {
//             btn.style.justifyContent="end"
//         }
        
//     }
//     console.log(e.clientX,e.clientY);
    

// })
// submit.addEventListener("mouseleave",(e)=>{
//     btn.style.justifyContent="start"

// })
// 457 504
// 31 428 492
// index.js:31 428 483
// index.js:31 431 487
// index.js:31 433 493
// index.js:31 429 491
// index.js:31 432 491
// index.js:31 428 497
// index.js:31 431
