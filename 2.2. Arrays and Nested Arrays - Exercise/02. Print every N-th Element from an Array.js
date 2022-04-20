function printEveryEl(arr, n) {

    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     let current = arr[i];
    //     if (i >= arr.length) {
    //         break;
    //     }
    //     if (i % n == 0) {
    //         newArr.push(current);
    //     }
    // }

    //or:
    let newArr = arr.filter((el, index) => index % n === 0);
    return newArr;
}
