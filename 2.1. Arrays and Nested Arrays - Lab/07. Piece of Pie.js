function pieceOfPie(pies, starting, ending) {

    let startIndex = pies.indexOf(starting);
    let endIndex = pies.indexOf(ending);
    let result = pies.slice(startIndex, endIndex + 1);
    return result;
}
console.log(pieceOfPie(
        ['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'))
