let Check = document.getElementById("Check");
let far = document.getElementById("far")

Check.addEventListener("click",()=>{
    let cel = document.getElementById("Celsius_value").value
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    let celsius = cel;
    let fahrenheit = celsiusToFahrenheit(celsius);
   far.style.display="block";
   far.innerHTML=`${celsius}°C is equal to ${fahrenheit}°F`
})


