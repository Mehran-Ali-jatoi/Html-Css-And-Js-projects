let search = document.getElementById("search")
let pho =document.getElementById("photo")

let data = async (query) => {
    let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=am5Wclo5pJ7f0Ukkl-GTdCUzmmttz5jDJJTzpo-X7lM`
    let photo = await fetch(url)
    let json = await photo.json()
    console.log(json.results[0].links.download);
    let arr = 9
    for (let index = 0; index <arr; index++) {
       console.log(json.results[index].links.download); 
    pho.innerHTML+=`
    <div>
    <img src="${json.results[index].links.download}" alt=""></div>
    `
    }
}

search.addEventListener("click", () => {
    let photos = document.getElementById("photos").value;
    if (photos !== "") {
        pho.innerHTML=""
        data(photos);
        // alert("asd")
        document.getElementById("photos").value = "";
    } else {
        alert("please first enter the photo category");
    }
})
