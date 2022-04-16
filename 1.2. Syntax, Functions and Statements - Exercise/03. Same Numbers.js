function samenum(num) {

    let sum = 0;
    let result = true;
    let digit = num % 10;
    
    while (num !== 0) {
        let currentDigit = num % 10;
        sum += currentDigit;
        if (currentDigit !== digit) {
            result = false;
        }
        num = Math.floor(num / 10);
    }
    console.log(result);
    console.log(sum);
}
