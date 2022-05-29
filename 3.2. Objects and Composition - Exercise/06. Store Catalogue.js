function storeCatalogue(input) {

    let listOfProducts = {};

    for (let item of input) {
        let [product, price] = item.split(' : ');
        price = Number(price);
        let initial = product[0].toUpperCase();
        
        if (listOfProducts[initial] === undefined) {
            listOfProducts[initial] = {};
        }
        listOfProducts[initial][product] = price;
    }
    let sortedProducts = Object.keys(listOfProducts);
    sortedProducts.sort((a, b) => a.localeCompare(b));
    let result = [];

    for (let key of sortedProducts) {
        let products = Object.entries(listOfProducts[key])
            .sort((a, b) => a[0].localeCompare(b[0]));
        result.push(key);
        let productsAsString = products
            .map(x => `  ${x[0]}: ${x[1]}`)
            .join('\n');
        result.push(productsAsString);
    }
    console.log(result.join('\n'))
}
