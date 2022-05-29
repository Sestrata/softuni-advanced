function carFactory(obj) {

    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: obj.color }, { type: 'coupe', color: obj.color }];
    let wheelsize = obj.wheelsize % 2 == 1 ? obj.wheelsize : obj.wheelsize - 1;

    return {
        model: obj.model,
        engine: engines.filter(e => e.power >= obj.power)[0],
        carriage: carriages.filter(c => c.type == obj.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
    //or:
//     let result = {};
    
//     function getEngine(power) {
//         if (power <= 90) {
//             return { power: 90, volume: 1800 };
//         } else if (power <= 120) {
//             return { power: 120, volume: 2400 };
//         } else {
//             return { power: 200, volume: 3500 };
//         }
//     }

//     let properWheelSize = 0;
//     if (obj.wheelsize % 2 == 0) {
//         properWheelSize = obj.wheelsize - 1;
//     } else {
//         properWheelSize = obj.wheelsize;
//     }
//     // or: obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    
//     result.model = obj.model;
//     result.engine = getEngine(obj.power);
//     result.carriage = { type: obj.carriage, color: obj.color };
//     // let wheels = []; може и без това;
//     result.wheels = new Array(4).fill(properWheelSize, 0, 4); 

//     return result;
}
