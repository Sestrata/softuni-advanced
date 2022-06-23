class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let steps = [];
        products.forEach(product => {
            let [name, qty, totalPrice] = product.split(' ');
            if (Number(totalPrice) <= this.budgetMoney) {
                this.budgetMoney -= Number(totalPrice);

                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = 0;
                }
                this.stockProducts[name] += Number(qty);
                steps.push(`Successfully loaded ${qty} ${name}`);
            } else {
                steps.push(`There was not enough money to load ${qty} ${name}`);
            }
        });
        this.history.push(...steps);
        return steps.join('\n');
    }

    addToMenu(meal, products, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products,
                price
            };
            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
        return `The ${meal} is already in the our menu, try something different.`;
    }

    showTheMenu() {
        let meals = Object.keys(this.menu);
        if (meals.length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        meals = meals.map(meal => `${meal} - $ ${this.menu[meal].price}`);
        return meals.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        for (let el of this.menu[meal].products) {
            let [product, qty] = el.split(' ');
            if (!this.stockProducts[product] || this.stockProducts[product] < Number(qty)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (let el of this.menu[meal].products) {
            let [product, qty] = el.split(' ');
            this.stockProducts[product] -= Number(qty);
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}
