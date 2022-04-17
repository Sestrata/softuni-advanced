function processOldPositions(arr) {

    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 != 0) {
    //         newArr.push(arr[i]);
    //     }
    // }
    //or:
    let newArr = arr.filter((value, index) => index % 2 == 1);
    
    let doubledArr = newArr.map(x => x * 2);
    doubledArr.reverse();
    return doubledArr;
}
console.log(processOldPositions([10, 15, 20, 25]))
