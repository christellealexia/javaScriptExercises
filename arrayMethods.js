function myMap(f, arr) {
    let arr1 = new Array(arr.length);
    for (a = 0; a < arr1.length; a++) {
        arr1[a] = f(arr[a]);
    }
    return arr1;
}
let myFunction = function(x) {
    return x * 2;

}
const numbers = [0, 1, 2, 5, 10];
console.log(myMap(myFunction, numbers));