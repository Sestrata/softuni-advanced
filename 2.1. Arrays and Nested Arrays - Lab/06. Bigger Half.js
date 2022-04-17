function biggerHalf(arr) {

    let newArr = arr.sort((a, b) => a - b);
    let newArrL = newArr.length;
    newArr.splice(newArrL[newArrL / 2], newArrL / 2);
    return newArr
}
Console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))
