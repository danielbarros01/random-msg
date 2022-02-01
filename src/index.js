//arreglo con los mensajes
const messages = [
    "Oscar", 
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Laura",
    "Caroline",
    "Paulina"
];

//funcion que hara el random
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};