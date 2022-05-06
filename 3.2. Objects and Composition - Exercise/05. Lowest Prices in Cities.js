function lowestPicesInCities(input) {

    let lowestPrices = {};

    for (let token of input) {
        let current = token.split(' | ');
        let townName = current[0];
        let product = current[1];
        let price = Number(current[2]);

        if (!lowestPrices.hasOwnProperty(product)) {
            lowestPrices[product] = {};
        }
        lowestPrices[product][townName] = price;
    }
    let result = [];
    for (let key in lowestPrices) {
        let sortedTownsPrices = Object.entries(lowestPrices[key]).sort((a, b) => a[1] - b[1]);
        let townCheapest = sortedTownsPrices[0]
        result.push(`${key} -> ${townCheapest[1]} (${townCheapest[0]})`)
    }
    console.log(result.join('\n'));
}
