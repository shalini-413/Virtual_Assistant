// alert ("hello");
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new window.SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 12 && hours < 4){
        speak("Good Afternoon Ma'am")
    }
    else{
        speak("Good Eveving Ma'am")
    }
}
// window.addEventListener("load", () => {
//     wishMe()
// })

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = ((event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    // console.log(event)
    takeCommand(transcript)
})

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if(message.includes("hello") || message.includes("hello")){
        speak("Hello mam, how are u?")
    }
    else if(message.includes("how are you")){
        speak("I am momo, created by Shalini and i am fine")
    }
    else {
        // Repeat whatever the user said
        speak("" + message);
    }
}

