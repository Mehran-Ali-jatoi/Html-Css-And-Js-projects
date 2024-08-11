// let Check = document.getElementById("Check");
// Check.addEventListener("click",()=>{
//     let prime = document.getElementById("prime").value
//     let Answer = document.getElementById("Answer");
//     let check = prime/2;
//     console.log(check);
    
//     if (check ==1) {
//         Answer.style.display="block"
//         Answer.innerHTML=`${prime} this number is prime number`
//     }else{
//          Answer.style.display="block"
//         Answer.innerHTML=`${prime} this number is not prime number`
//     }
// })
let Check = document.getElementById("Check");

Check.addEventListener("click", () => {
    let prime = parseInt(document.getElementById("prime").value);
    let Answer = document.getElementById("Answer");
    let isPrime = true;

    // Step 1: Check if the number is less than or equal to 1
    if (prime <= 1) {
        isPrime = false;
    } else {
        // Step 2: Loop from 2 to the square root of the number
        for (let i = 2; i <= Math.sqrt(prime); i++) {
            // Step 3: If the number is divisible by any number in the loop, it is not prime
            if (prime % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    // Step 4: Display the result
    Answer.style.display = "block";
    if (isPrime) {
        Answer.innerHTML = `${prime} is a prime number.`;
    } else {
        Answer.innerHTML = `${prime} is not a prime number.`;
    }
});
