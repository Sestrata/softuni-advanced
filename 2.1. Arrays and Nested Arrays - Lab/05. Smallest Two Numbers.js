function smallestTwoNums(arr) {

    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    let endArr = sortedArr.slice(0, 2);
    console.log(endArr.join(' '));
}
