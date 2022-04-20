function addRemoveEls(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currCommand = arr[i];

        if (currCommand == 'add') {
            newArr.push(i + 1);
        } else if (currCommand == 'remove') {
            newArr.pop();
        }
    }
    if (newArr.length <= 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}
