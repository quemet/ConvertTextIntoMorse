function convertIntoMorse() {

    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

    const morsecode = [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

    console.log(alphabet);

    let morseText = "";

    let morsetext = [];

    let plaintext = document.getElementById("plaintext").value;

    let plaintextToArray = plaintext.split("");

    plaintextToArray.forEach((letter) => {
        morsetext.push(letter);
    });

    morsetext.forEach((morse) => {
        let letterid = alphabet.indexOf(morse);
        let newmorse = morsecode[letterid];
        morseText += `${newmorse} `;
    });

    document.getElementById("morsetext").value = morseText;
}

convertIntoMorse();