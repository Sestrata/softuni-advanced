function getFibonator() {
    let [a, b] = [0, 1] // or: let a = 0; let b = 1;

    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}
