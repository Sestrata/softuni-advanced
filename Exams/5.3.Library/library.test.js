const { expect } = require('chai');
let library = require('./library');

describe("Tests:", () => {
    describe("calcPriceOfBook", () => {
        it("valid book, year 1980", () => {
            expect(library.calcPriceOfBook('Troy', 1980)).to.equal('Price of Troy is 10.00');
        });
        it("valid book, year 1981", () => {
            expect(library.calcPriceOfBook('Troy', 1981)).to.equal('Price of Troy is 20.00');
        });
        it("book is not a string", () => {
            expect(() => library.calcPriceOfBook(1, 1981)).to.throw('Invalid input');
        });
        it("year is not an integer", () => {
            expect(() => library.calcPriceOfBook('Troy', 1981.5)).to.throw('Invalid input');
        });
        it("one param missing", () => {
            expect(() => library.calcPriceOfBook('Troy')).to.throw('Invalid input');
        });
    });

    describe("findBook", () => {
        it("zero length array", () => {
            expect(() => library.findBook([], "Troy")).to.throw('No books currently available');
        });
        it("book not found", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Harry Potter")).to.equal('The book you are looking for is not here!');
        });
        it("book found", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal('We found the book you want.');
        });
    });

    describe("arrangeTheBooks", () => {
        it("invalid entry - non-integer", () => {
            expect(() => library.arrangeTheBooks(0.5)).to.throw('Invalid input');
        });
        it("invalid entry - negative value", () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });
        it("invalid entry - negative value", () => {
            expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
        });
        it("with 0 books", () => {
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
        });
        it("with 40 books", () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it("with 41 books", () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});
