function magicMatricies(arr) {

    let sum = arr[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let i = 0; i < arr.length; i++) {
        let sumRow = arr[i].reduce((a, b) => a + b, 0);
        let sumCol = arr.map(row => row[i]).reduce((a, b) => a + b, 0); //sum the nums from each row, starting with 0

        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}
