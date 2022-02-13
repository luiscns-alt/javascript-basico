function missingLetters(text) {
    var letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    text = text.toLowerCase();
    var missing = [];
    for (let letter of letters) {
        if (text.indexOf(letter) === -1) {
            missing.push(letter);
        }
    }
    return missing;
}

console.log(missingLetters("asjfsjfjsfjsdkfa"));
