function printAnArrayWithDelimiter(arr, delimiter) {

    let newArr = arr.toString().replace(delimiter);
    //or: let newArr = arr.join(delimiter);
    console.log(newArr);
}
