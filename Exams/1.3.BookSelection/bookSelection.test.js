const { expect } = require('chai');
const { bookSelection } = require('./bookSelection.js');

describe("BookSection", () => {
    describe("isGenreSuitable", () => {
        it("happy path - thriller/horror/'a' more than 12", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('A', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('A', 8)).to.equal(`Those books are suitable`);
        });
        it("thriller/horror less than 12", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });
        it("thriller/horror to equal 12", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });
    });

    describe("isItAffordable", () => {
        it("don't have money", () => {
            expect(bookSelection.isItAffordable(2, 1)).to.equal(`You don't have enough money`);
        });
        it("have money", () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`);
        });
        it("invalid input", () => {
            expect(() => bookSelection.isItAffordable('1', 2)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(1, '2')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('1', '2')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('', '')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable()).to.throw('Invalid input');
        });
    });

    describe("suitableTitles", () => {
        it("happy path, single match", () => {
            expect(bookSelection.suitableTitles([
                {
                    title: "aa",
                    genre: "a"
                }], 'a')).to.deep.equal(['aa']);
        });
        it("happy path, two matches", () => {
            expect(bookSelection.suitableTitles([
                {
                    title: "aa",
                    genre: "a"
                },
                {
                    title: "ab",
                    genre: "a"
                },
                {
                    title: "bb",
                    genre: "b"
                },
            ], 'a')).to.deep.equal(['aa', 'ab']);
        });
        it("no matches", () => {
            expect(bookSelection.suitableTitles([
                {
                    title: "bb",
                    genre: "b"
                },
            ], 'a')).to.deep.equal([]);
        });
        it("invalid input", () => {
            expect(() => bookSelection.suitableTitles('ababa', 'a')).to.throw();
            expect(() => bookSelection.suitableTitles([
                {
                    title: "bb",
                    genre: "5"
                },
                {
                    title: "5",
                    genre: "b"
                },
            ], 5)).to.throw();
        });
    });
});
