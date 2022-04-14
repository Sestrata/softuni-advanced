// function largestNum(numF, numS, numT) {

// let result;
// if (numF > numS) {
//     if (numF > numT) {
//         result = numF;
//     } else {
//         result = numT;
//     }
// } else if (numS > numT) {
//     result = numS;
// } else {
//     result = numT;
// }
// console.log(`The largest number is ${result}.`);
// }

// or /with all num/:
function largestNum(...params) {

    result = Math.max(...params);
    console.log(`The largest number is ${result}.`);
}
