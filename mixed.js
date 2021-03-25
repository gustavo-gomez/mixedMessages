const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const templates = {
    greeting: ['Hi!', 'Hola!', 'Hello my friend!', 'Hey buddy!', 'Hello dev!', 'Hiya!'],
    advice1: ['You must be self-taught', 'Ask if you do not know something', 'Develop your own system, so you will learn a lot!', 'Develop your skills'],
    advice2: ['Don\'t give up! ', 'Help software community! ', 'Share your knowledge with others', 'Learn new technologies'],

}

const getMessages = () => {
    document.getElementById("greeting").innerHTML = templates.greeting[generateRandomNumber(templates.greeting.length)];
    document.getElementById("message2").innerHTML = templates.advice1[generateRandomNumber(templates.advice1.length)];
    document.getElementById("message3").innerHTML = templates.advice2[generateRandomNumber(templates.advice2.length)];
    document.getElementById("blockquote").style.display = "block"
}