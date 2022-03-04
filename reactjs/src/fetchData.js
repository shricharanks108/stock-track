import data from "./data.js";

const fetchData = {
    getProducts: () => data.products,
    getProductByID: (id) => {
        var requestedProduct;
        data.products.forEach((product) => {
            if (product.id === id) return requestedProduct = product;
        })
        return requestedProduct;
    },
    getProductName: (id) => {
        var product = fetchData.getProductByID(id);
        return (product) ? product.name : null;
    },
    getProductDescription: (id) => {
        var product = fetchData.getProductByID(id);
        return (product) ? product.description : null;
    }

}

export default fetchData;