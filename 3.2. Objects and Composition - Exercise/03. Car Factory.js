function carFactory(obj) {

    let result = {};
    
    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }

    let properWheelSize = 0;
    if (obj.wheelsize % 2 == 0) {
        properWheelSize = obj.wheelsize - 1;
    } else {
        properWheelSize = obj.wheelsize;
    }
    // or: obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    
    result.model = obj.model;
    result.engine = getEngine(obj.power);
    result.carriage = { type: obj.carriage, color: obj.color };
    // let wheels = []; може и без това;
    result.wheels = new Array(4).fill(properWheelSize, 0, 4); //уточняваме колко елемента ще има в масива, която създаваме с new Array(броя);

    return result;
}
