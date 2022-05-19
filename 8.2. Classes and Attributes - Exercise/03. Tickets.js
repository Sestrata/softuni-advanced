function tickets(arr, sortingCriterion) {

    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let token of arr) {
        let [destination, price, status] = token.split('|');;
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    };

    result.sort((a, b) => {
        if (typeof a[sortingCriterion] === 'number') {
            return a[sortingCriterion] - b[sortingCriterion];
        } else {
            return a[sortingCriterion].localeCompare(b[sortingCriterion]);
        }
    });
    return result;
}
