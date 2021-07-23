class Basket {
    constructor() {
        this.productsPurchased = [];
    }

    add(product) {
        this.productsPurchased.push(product)
    }

    value() {
        return this.productsPurchased
            .reduce((prev, product) => Number(product.prodPrice) + prev, 0)
            .toFixed(2);
    }

}


class Product {
    constructor(prodName, prodPrice) {
        this.prodName = prodName;
        this.prodPrice = prodPrice;
    }

}


const marioBasket = new Basket();
const onion = new Product("Cebula", 1);
const tomato = new Product("Pomidor", 5);

const cheese = new Product("Ser żółty", 10);



