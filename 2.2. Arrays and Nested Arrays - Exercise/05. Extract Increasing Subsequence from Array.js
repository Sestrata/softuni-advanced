function extractIncreasingSub(arr) {

    // let max = arr[0];
    // let result = arr.filter(el => {
    //     if (el >= max) {
    //         max = el;
    //     }
    //     return el >= max;
    // });
    // return result;

    // or:
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let el = arr[i];
        if (el >= newArr[newArr.length - 1]) { // взима се последният индекс от масива
          newArr.push(el);
        }
    }
    return newArr
}
