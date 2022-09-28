class Basket {

    basketItems = [];


    add = item => {
        this.basketItems.push(item);
    }


    remove = item => {
        this.basketItems.pop(item)

    };

    capacity = 3
    isBasketFull = () => {
        if (this.basketItems.length < 3) {
            this.add()
        }

        else return 'You have reached your basket limit'
    }


};

module.exports = Basket;