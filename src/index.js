const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {let morseArr = [];
    for (let i = 0; morseArr.length < expr.length / 10; i += 10) {
        morseArr.push(expr.slice(i, i + 10))
    }
    morseArr = morseArr.map( a => {
        let letter = "";
        for (let i = 0; i < 11; i += 2){

            let symb = a.slice(i, i + 2);
            switch (true)  {
                case symb == "**":
                    letter += " ";
                    break;
                case symb == "10":
                    letter += ".";
                    break;
                case symb == "11":
                    letter += "-";
                    break;
                case symb == "00":
                    break;
            }
        }
        if (letter == "     "){
            letter = " ";
        }
        return letter;
    })
    let decodedString = morseArr.map(b => {
        return MORSE_TABLE[b] || " "
    }).join("")
    return decodedString
}

module.exports = {
    decode
}