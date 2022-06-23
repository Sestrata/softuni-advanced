const { expect } = require('chai');
const { rentCar } = require('./evenOrOdd.js.js');

//?
describe('Test rentCar', () => {
    describe('Tests searched car', () => {
        it('test model is present in the shop', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`);
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], 'Audi')).to.equal(`There is 2 car of model Audi in the catalog!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Opel').to.throw('There are no such models in the catalog!'));
            expect(() => rentCar.searchCar(["Volkswagen", "BMW"], 'VAZ')).to.throw('There are no such models in the catalog!');
        });
        it('Test for invalid input', () => {
            expect(() => rentCar.searchCar(1, 'string').to.throw('Invalid input!'));
            expect(() => rentCar.searchCar([], 'string').to.throw('Invalid input!'));
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1).to.throw('Invalid input!'));
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], -1).to.throw('Invalid input!'));
            expect(() => rentCar.searchCar(1).to.throw('Invalid input!'));
            expect(() => rentCar.searchCar([1, 2, 3], 'string').to.throw('Invalid input!'));
            expect(() => rentCar.searchCar({}, NaN).to.throw('Invalid input!'));
            expect(() => rentCar.searchCar(NaN, ' ').to.throw('Invalid input!'));
        });
    });
    describe('Tests calculate price of car', () => {
        it('Test for invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar([1, 2, 3], 'string').to.throw('Invalid input!'));
            expect(() => rentCar.calculatePriceOfCar(1, 'string').to.throw('Invalid input!'));
            expect(() => rentCar.calculatePriceOfCar('string', 'string').to.throw('Invalid input!'));
            expect(() => rentCar.calculatePriceOfCar('string', {}).to.throw('Invalid input!'));
            expect(() => rentCar.calculatePriceOfCar('string', -1).to.throw('Invalid input!'));
            expect(() => rentCar.calculatePriceOfCar('string', 1.5).to.throw('Invalid input!'));
            expect(() => rentCar.calculatePriceOfCar(1, NaN).to.throw('Invalid input!'));
            expect(() => rentCar.calculatePriceOfCar(NaN, 1).to.throw('Invalid input!'));
        });
        it('Test for price of given model', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 3)).to.equal(`You choose Toyota and it will cost $120!`);
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal(`You choose BMW and it will cost $90!`);
            expect(() => rentCar.calculatePriceOfCar('Ford', 2).to.throw('No such model in the catalog!'));
        });
    });
    describe('Tests for cheking budget', () => {
        it('Test for invalid input', () => {
            expect(() => rentCar.checkBudget(1.1, 'string', 1).to.throw('Invalid input!'));
            expect(() => rentCar.checkBudget(1, 'string', 1).to.throw('Invalid input!'));
            expect(() => rentCar.checkBudget([1, 2, 3], 2, 1).to.throw('Invalid input!'));
            expect(() => rentCar.checkBudget(1, 2, 'string').to.throw('Invalid input!'));
            expect(() => rentCar.checkBudget(1, 2, 2.5).to.throw('Invalid input!'));
            expect(() => rentCar.checkBudget(1.5, 2.5, 2.5).to.throw('Invalid input!'));
            expect(() => rentCar.checkBudget(1.5, 'string', 2.5).to.throw('Invalid input!'));
            expect(() => rentCar.checkBudget(1.5, 2.5, 'string').to.throw('Invalid input!'));
        });
        it('Test for sufficient budget', () => {
            expect(rentCar.checkBudget(20, 2, 40)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(20, 6, 40)).to.equal(`You need a bigger budget!`);
        });
    });
});
