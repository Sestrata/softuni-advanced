function lastKnumSeq(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
        let elements = result.slice(-k);
        let current = 0;

        for (let num of elements) {
            current += num;
        }
        result.push(current);
    }
    return result;
}
console.log(lastKnumSeq(8, 2))
