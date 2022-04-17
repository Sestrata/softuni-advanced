function sumFirstLast(arr) {

    let first = arr.shift();
    let last = arr.pop();
    let sum = +first + +last;
    console.log(sum);
}
