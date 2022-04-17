function biggestEl(arr) {

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length + 1; i++) {
        let currentArr = arr.shift();
        currentArr.sort((a, b) => b - a);
        let big = currentArr.shift();
        if (big > biggest) {
            biggest = big;
        }
    }
    return biggest;
}
console.log(biggestEl([
    [20, 50, 10],
    [8, 33, 145]
]))
