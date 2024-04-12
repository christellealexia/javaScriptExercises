function getCount(str) {
    let count = 0;
    let allowedVowels = ['a', 'e', 'i', 'o', 'u'];
    for (char of str) {
        if (allowedVowels.includes(char)) {
            count++;
        }
    }
    return count;
    //Return value

}