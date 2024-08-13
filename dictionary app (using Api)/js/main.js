const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "oNb6en2CDU2EUV3BSk9Yqf4z2ooaDtkwvQVLA5JxU8mzWUrqZB");
myHeaders.append("x-apihub-host", "Free-Dictionary.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "26d88ad4-991f-4cab-b329-828e77ec236d");
let currentAudio = null;

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};
let search = document.getElementById("search")
let search_word 
let word = document.getElementById("word")
let part_of_speech = document.getElementById("part-of-speech")
let example = document.getElementById("example")
let defination = document.getElementById("defination")
let playaudio = document.getElementById("playaudio")
const da =async ()=>{

    let url = `https://Free-Dictionary.proxy-production.allthingsdev.co/api/v2/entries/en/${search_word}`
    console.log("asd");
    let ds =await fetch(url, requestOptions)
    let data = await ds.json();
    // console.log(data);
    word.innerText =data[0].word;
    part_of_speech.innerText = data[0].meanings[0].partOfSpeech;
    example.innerText=data[0].meanings[0].definitions[0].example;
    defination.innerText=data[0].meanings[0].definitions[0].definition
  
    let sounds=data[0].phonetics[1].audio
    playaudio.addEventListener("click",()=>{
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(sounds);
    currentAudio.play();
    //    let  sound = new Audio(`${sounds}`)
    //     sound.play()
    })
  
}
search.addEventListener("click",()=>{
    search_word = document.getElementById("search-word").value;
    da()
    search_word=""
})

// const myHeaders = new Headers();
// myHeaders.append("x-apihub-key", "oNb6en2CDU2EUV3BSk9Yqf4z2ooaDtkwvQVLA5JxU8mzWUrqZB");
// myHeaders.append("x-apihub-host", "Free-Dictionary.allthingsdev.co");
// myHeaders.append("x-apihub-endpoint", "26d88ad4-991f-4cab-b329-828e77ec236d");

// const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow"
// };

// let search = document.getElementById("search");
// let search_word;
// let word = document.getElementById("word");
// let part_of_speech = document.getElementById("part-of-speech");
// let example = document.getElementById("example");
// let defination = document.getElementById("defination");
// let playaudio = document.getElementById("playaudio");
// let currentAudio = null;

// const da = async () => {
//     let url = `https://Free-Dictionary.proxy-production.allthingsdev.co/api/v2/entries/en/${search_word}`;
//     let ds = await fetch(url, requestOptions);
//     let data = await ds.json();
    
//     word.innerText = data[0].word;
//     part_of_speech.innerText = data[0].meanings[0].partOfSpeech;
//     example.innerText = data[0].meanings[0].definitions[0].example;
//     defination.innerText = data[0].meanings[0].definitions[0].definition;
    
//     let sounds = data[0].phonetics[1].audio;
    
//     playaudio.removeEventListener("click", playaudio); // Remove previous event listener
    
//     playAudio = () => {
//         if (currentAudio) {
//             currentAudio.pause();
//             currentAudio.currentTime = 0;
//         }
//         currentAudio = new Audio(sounds);
//         currentAudio.play();
//     };
    
//     playaudio.addEventListener("click", playAudio);
//     search_word = "";
// };

// search.addEventListener("click", () => {
//     search_word = document.getElementById("search-word").value;
//     da();
// });
