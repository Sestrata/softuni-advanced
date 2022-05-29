function townsToJson(input) {

    const towns = [];
    const regex = new RegExp(/\s*\|\s*/);
    let nameTable = input.shift();

    for (const line of input) {
        let tokens = line.split(regex).filter(Boolean);
        let lat = Number(tokens[1]).toFixed(2);
        let lon = Number(tokens[2]).toFixed(2);
        towns.push({
            Town: tokens[0],
            Latitude: +lat,
            Longitude: +lon
        });
    }
    return JSON.stringify(towns);
}
