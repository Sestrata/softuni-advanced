function aggregateEl(arr) {

    let sum = arr.reduce((a, b) => a + b);
    let inverseValuesSum = 0;
    for (let i = 0; i < arr.length; i++) {
        inverseValuesSum += 1 / arr[i];
    }
    let concat = arr.join('');

    console.log(sum);
    console.log(inverseValuesSum);
    console.log(concat);
}
