function equalNeighbors(arrs) {

    let counter = 0;
    let arrsL = arrs.length;

    for (let i = 0; i < arrsL; i++) {
        for (let j = 0; j < arrs[i].length - 1; j++) {
            if (arrs[i][j] == arrs[i][j + 1]) {
                counter++;
            }
        }
    }
    let firstArrL = arrs[0].length;
    let newArr = [];
    for (let k = 0; k < firstArrL; k++) {
        for (let l = 0; l < arrsL; l++) {
            let currentArr = arrs[l];
            let currentDig = currentArr.shift();
            newArr.push(currentDig);
        }
        for (let m = 0; m < newArr.length - 1; m++) {
            if (newArr[m] == newArr[m + 1]) {
                counter++;
            }
        }
        newArr = [];
    }
    console.log(counter);
}
