let shout = string => {
    return string.toUpperCase()
} 

let whisper = string => {
    return string.toLowerCase()
} 

let logShout = string => {
    console.log(string.toUpperCase())
} 

let logWhisper = string => {
    console.log(string.toLowerCase())
} 

let sayHiToGrandma = string => {
    if (string === `hello`){
        return (`I can't hear you!`);
    } if (string === `HELLO`) {
        return (`YES INDEED!`)
    } if (string === `I love you, Grandma.`) {
        return (`I love you, too.`)
    }
} 

// let sayHiToGrandma = string => {
//     if (string === `hello`){
//         return (`I can't hear you!`);
//     } else if (string === `HELLO`) {
//         return (`YES INDEED!`)
//     } else (string === `I love you, Grandma.`) {
//         return (`I love you, too.`)
//     }
// } 