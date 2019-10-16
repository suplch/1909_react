function createIdGen(initId) {
    return function () {
        return initId++;
    }
}
const idGen = createIdGen(1000);
export default {
    products: [
        {id: idGen(), name: '电脑', price: 10000},
        {id: idGen(), name: '鼠标', price: 99},

    ],
    cart: {
        items: []
    },
    addProductToCart(product) {
        let item = this.cart.items.find((item) => {
            return product.id === item.id
        });
        if (item) {
            item.count++;
        } else {
            this.cart.items.push({
                ...product,
                count: 1
            })
        }
    },
    addProduct(name, price) {
        this.products.push({
            id: idGen(),
            name, price
        })
    }
}
