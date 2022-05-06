function heroicInventory(input) {

    let registerHeroes = [];

    while (input.length > 0) {
        let hero = input.shift().split(' / ');
        let name = hero.shift();
        let level = Number(hero.shift());
        let items = hero.shift();

        if (items !== undefined) {
            items = items.split(', ');
        } else {
            items = [];
        }
        // or:
        // items = items !== undefined ? items.split(', ') : [];
        
        registerHeroes.push({ name: name, level: level, items: items });
    }
    console.log(JSON.stringify(registerHeroes))
}
