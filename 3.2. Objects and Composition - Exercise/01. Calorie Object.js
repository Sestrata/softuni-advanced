function calorieObj(input) {

    let resultObj = {};

    while (input.length > 0) {
        let product = input.shift();
        let calories = Number(input.shift());

        if (resultObj.hasOwnProperty(product)) { // or with includes
            resultObj[product] += calories;
        } else {
            resultObj[product] = calories;
        }
    }
    console.log(resultObj);
}
