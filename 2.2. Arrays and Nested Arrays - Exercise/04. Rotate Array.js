function rotateArray(arr, numRotation) {

    for (let i = 0; i < numRotation; i++) {
        let numberToMove = arr.pop();
        arr.unshift(numberToMove);
    }
    console.log(arr.join(' '));
}
