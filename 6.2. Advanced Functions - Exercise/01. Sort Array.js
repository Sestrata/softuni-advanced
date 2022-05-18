function sortArr(numbers, string) {

    if (string === 'asc') {
        numbers.sort((a, b) => a - b);
    } else if (string === 'desc') {
        numbers.sort((a, b) => b - a);
    }
    return numbers
}
