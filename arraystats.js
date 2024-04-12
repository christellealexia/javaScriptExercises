function arraystats(numbers) {
    let answers = {
        sum:0,
        average:0,
        max:numbers[0],
        min:numbers[0],

    };
    
   for(let a=0; a<numbers.length;a++){
    answers.sum += numbers[a];

    
    if (numbers[a] > answers.max ){
        answers.max = numbers[a];
    }
    
   }
   answers.average = answers.sum / numbers.length;
   return answers;
}   
let num = []
console.log (arraystats(num));


