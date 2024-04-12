function sumTwoSmallestNumbers(numbers) {
    //Code here
    let sum = 0;
    let num = numbers.sort((a, b) => a - b);
    for (let a = 0; a < 2; a++) {
        sum += num[a];

    }
    return sum;
}
let numbers = [2, 8, 7, 3];
console.log(sumTwoSmallestNumbers(numbers));