
    let numbers = [2,4,5,6,3];
    const filtered = numbers.filter((value) => value %2 !== 0);

const num = filtered.map((value) =>  value * value );

console.log(num);