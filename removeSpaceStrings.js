function noSpace(x) {
    let arr = x.split(" ");
    let removedSpace = arr.reduce((accumulator, char) => char === " " ? accumulator : accumulator + char, "");
    return removedSpace;
}