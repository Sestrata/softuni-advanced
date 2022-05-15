function solve(input, criteria) {
    let emloyess = JSON.parse(input)
    let [prop, value] = criteria.split('-');

    emloyess
        .filter(x => x[prop] == value) 
        .map((x, index) => `${index}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(x => console.log(x));
}
