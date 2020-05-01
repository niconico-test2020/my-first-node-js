'user strict';
const number = process.argv[2] || 0 ;
let sum = 0 ;
for (let ii = 1; ii <= number; ii++){
    sum = sum + 1;
}
console.log(sum);
