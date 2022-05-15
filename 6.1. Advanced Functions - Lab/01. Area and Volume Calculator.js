function solve(area, vol, input) {

    const cubes = JSON.parse(input);
    const result = [];

    for (let cube of cubes) {
        const cubArea = area.apply(cube);
        const cubeVolume = vol.apply(cube);
        result.push({
            area: cubArea,
            volume: cubeVolume
        });
    }
    return result;
}
const data = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`

console.log(solve(area, vol, data));

function area() {
    return Math.abs(this.h * this.y);
};
function vol() {
    return Math.abs(this.h * this.y * this.z);
};
