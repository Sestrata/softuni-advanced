function sortingNums(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];

    while (sortedArr.length > 0) {
        let smallNum = sortedArr.shift();
        newArr.push(smallNum);
        let bigNum = sortedArr.pop();
        newArr.push(bigNum);
    }
    return newArr;
}
