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

// function takeCommand(message){
//     btn.style.display = "flex"
//     voice.style.display = "none"
//     if(message.includes("hello") || message.includes("hey")){
//         speak("Hello mam, how are u?")
//     }
//     else if(message.includes("how are you")){
//         speak("I am momo, created by Shalini and i am fine")
//     }
//     else {
//         // Repeat whatever the user said
//         speak("" + message);
//     }
// }


function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    message = message.toLowerCase(); // Normalize input

    if(message.includes("hello") || message.includes("hey")){
        speak("Hello Ma'am, how can I help you?");
    }
    else if(message.includes("how are you")){
        speak("I am , created by Shalini. I'm doing well!");
    }
    else if(message.includes("who are you")){
        speak("I am your assistant Momo, designed to help you with tasks.");
    }
    else if(message.includes("what is your name")){
        speak("My name is Momo.");
    }
    else if(message.includes("what time is it") || message.includes("tell me the time")){
        let time = new Date().toLocaleTimeString();
        speak("The time is " + time);
    }
    else if(message.includes("what is today") || message.includes("today's date")){
        let date = new Date().toDateString();
        speak("Today is " + date);
    }
    else if(message.includes("open google")){
        speak("Opening Google.");
        window.open("https://www.google.com", "_blank");
    }
    else if(message.includes("open youtube")){
        speak("Opening YouTube.");
        window.open("https://www.youtube.com", "_blank");
    }
    else if(message.includes("play music") || message.includes("play song")){
        speak("Playing music on YouTube.");
        window.open("https://www.youtube.com/results?search_query=play+music", "_blank");
    }
    else if(message.includes("open whatsapp")){
        speak("Opening WhatsApp Web.");
        window.open("https://web.whatsapp.com", "_blank");
    }
    else if(message.includes("open instagram")){
        speak("Opening Instagram.");
        window.open("https://www.instagram.com", "_blank");
    }
    else if(message.includes("open facebook")){
        speak("Opening Facebook.");
        window.open("https://www.facebook.com", "_blank");
    }
    else if(message.includes("tell me a joke")){
        let jokes = [
            "Why did the computer show up at work late? It had a hard drive!",
            "Why do Java developers wear glasses? Because they can't C#!",
            "What did the router say to the doctor? It hurts when IP!"
        ];
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    }
    else if(message.includes("thank you") || message.includes("thanks")){
        speak("You're welcome Ma'am!");
    }
    else if(message.includes("bye") || message.includes("goodbye")){
        speak("Goodbye Ma'am, take care!");
    }
    else if(message.includes("weather") || message.includes("temperature")){
        speak("You can check weather here.");
        window.open("https://www.google.com/search?q=weather", "_blank");
    }
    else if(message.includes("search for")){
        let searchQuery = message.replace("search for", "").trim();
        if(searchQuery.length > 0){
            speak("Searching Google for " + searchQuery);
            window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
        } else {
            speak("What do you want me to search for?");
        }
    }
    else if(message.includes("who is") || message.includes("what is") || message.includes("where is")){
        let wikiQuery = message.replace("who is", "").replace("what is", "").replace("where is", "").trim();
        speak("Searching Wikipedia for " + wikiQuery);
        window.open(`https://en.wikipedia.org/wiki/${wikiQuery}`, "_blank");
    }
    else if(message.includes("sing a song") || message.includes("chandni o meri chandni")){
        speak("Sure Ma'am, singing Chandni O Meri Chandni.");
    
        let lyrics = [
            "Chandni, o meri chandni...",
            "Chandni, o meri chandni...",
            "Tu kahan hai, chandni...",
            "Chandni, o meri chandni...",
            "Tere bina ab na lenge ik bhi dum...",
            "Tujhko diya mera waqt sabhi...",
            "Koi lamha mera na ho tere bina...",
            "Har saans pe naam tera..."
        ];
    
        let i = 0;
        function singLine() {
            if (i < lyrics.length) {
                let line = new SpeechSynthesisUtterance(lyrics[i]);
                line.pitch = 1;
                line.rate = 1;
                line.volume = 1;
                line.lang = "hi-GB"; // Hindi with Indian accent
                line.onend = () => {
                    i++;
                    singLine();
                };
                speechSynthesis.speak(line);
            }
        }
    
        singLine(); // Start singing
    }
    else {
        speak("I didn't understand that. You said: " + message);
    }
}

