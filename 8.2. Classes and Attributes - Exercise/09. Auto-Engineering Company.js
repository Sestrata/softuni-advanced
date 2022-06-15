function autoEnCompany(input) {

    const brands = {};

    for (const item of input) {
        const [brand, model, qty] = item.split(' | ');
        if (!brands.hasOwnProperty(brand)) {
            brands[brand] = {};
        }
        if (!brands[brand].hasOwnProperty(model)) {
            brands[brand][model] = 0;
        }
        brands[brand][model] += Number(qty);
    }
    for (const [brand, models] of Object.entries(brands)) {
        console.log(brand);
        for (const [model, qty] of Object.entries(models)) {
            console.log(`###${model} -> ${qty}`);
        }
    }
}
