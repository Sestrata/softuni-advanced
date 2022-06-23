const { expect, assert } = require('chai');
let pizzUni = require('./pizzaPlace');

describe('pizzaPlace', () => {
    describe('makeAnOrder', () => {
        it('should return confirmation message when pizza is ordered', () => {
            let order = {
                orderedPizza: 'Margaritta'
            }
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza}.`);
        });
        it('should return confirmation message when pizza and drink is ordered', () => {
            let order = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'Water'
            }
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`);
        });
        it('should throw when there is no ordered pizza', () => {
            let order = {};
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        });
        it('should throw when there is only drink', () => {
            let order = {
                orderedDrink: 'Water'
            }
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        });
        it('sholud throw when there is no order', () => {
            expect(() => pizzUni.makeAnOrder()).to.throw();
        });
    });

    describe('getRemainingWork', () => {
        it('should return all orders completed when one ready status is given', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'ready' }
            ];
            expect(pizzUni.getRremainingWork(statusArr)).to.equal('All orders are complete!')
        });
        it('should return all orders completed when two ready statuses are given', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'ready' },
                { pizzaName: 'Italiana', status: 'ready' }
            ];
            expect(pizzUni.getRremainingWork(statusArr)).to.equal('All orders are complete!')
        });
        it('should return remaining pizzas when there is one pending order', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'preparing' },
                { pizzaName: 'Italiana', status: 'ready' }
            ];
            expect(pizzUni.getRremainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Margaritta`)
        });
        it('should return remaining pizzas when there are more pending orders', () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'preparing' },
                { pizzaName: 'Italiana', status: 'preparing' }
            ];
            expect(pizzUni.getRremainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Margaritta, Italiana`)
        });
    });

    describe('orderType', () => {
        it('should return totalSum when type of order is Delivery', () => {
            let totalSum = 10;
            let orderType = 'Delivery';
            expect(pizzUni.orderType(totalSum, orderType)).to.equal(totalSum);
        });
        it('should return totalSum with discount when type of order is Carry Out', () => {
            let totalSum = 10;
            let orderType = 'Carry Out';
            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9);
        });
        it('should return totalSum with discount when using floating point number', () => {
            let totalSum = 10.50;
            let orderType = 'Carry Out';
            expect(pizzUni.orderType(totalSum, orderType)).to.equal(9.45);
        });
    });
})
