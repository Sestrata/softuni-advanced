function townPopulation(input) {

    let towns = {};
    
    for (let i of input) {
        let [city, population] = i.split(' <-> ');
        population = Number(population);

        if (towns.hasOwnProperty(city)) { // or with includes
            towns[city] += population;
        } else {
            towns[city] = population;
        }
    }

    for (let [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }
    // or: 
    // for (let name in towns) {
    //     console.log(`${name} : ${towns[name]}`);
    // }
}
