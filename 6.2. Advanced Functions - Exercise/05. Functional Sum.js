function add(num) {

    function inner(num2) {
        num += num2;
        return inner;
    }

    inner.toString = () => {
        return num;
    }

 return inner;
}
