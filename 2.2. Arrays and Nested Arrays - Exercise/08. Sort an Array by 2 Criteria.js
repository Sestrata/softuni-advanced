function sortBy2Criteria(arr) {

    let newArr = arr.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria;
    })
    console.log(newArr.join('\n'));
}
