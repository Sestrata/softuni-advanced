class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    };

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    };

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(el => el.model === model);
        if (!car) {
            throw new Error(`${model} was not found!`);
        }
        let soldPrice = car.price;
        if (car.mileage > desiredMileage && (car.mileage - desiredMileage) <= 40000) {
            soldPrice *= 0.95;
        } else if ((car.mileage - desiredMileage) > 40000) {
            soldPrice *= 0.90;
        }
        let carIndex = this.availableCars.findIndex(el => el === car);
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice
        });
        this.totalIncome += soldPrice;
        return `${car.model} was sold for ${soldPrice.toFixed(2)}$`
    };

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }
        let cars = this.availableCars.map(el => `---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`);
        return `-Available cars:\n${cars.join('\n')}`;
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        let cars;
        if (criteria === 'horsepower') {
            cars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            cars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        cars = cars.map(el => `---${el.model} - ${el.horsepower} HP - ${el.soldPrice.toFixed(2)}$`);
        if (cars.length > 0) {
            cars.unshift('')
        }
        return `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:${cars.join('\n')}`;
    }
}
