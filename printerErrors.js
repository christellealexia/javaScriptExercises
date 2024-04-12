function printerError(s) {
    let allowedLetters = 'abcdefghjiklm';
    let count = 0;
    let str = '';
    for (char of s) {
        if (!allowedLetters.includes(char)) {
            count++;
        }
    }
    str = count + "/" + s.length;
    return str;


}