function findShort(s) {
    let arr1 = s.split(" ");

    let arr2 = arr1.reduce((shortestWord, currentWord) => { return currentWord.length < shortestWord.length ? currentWord : shortestWord }, arr1[0]);


    return arr2.length;
}