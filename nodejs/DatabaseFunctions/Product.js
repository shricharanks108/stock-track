class Product {

    static async getProductByID(connection, pantryId, productID) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND id = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getProductIDByName(connection, name, pantryId, productName) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND name = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getProductsByMajorCategory(connection, pantryId, category) {

    }

    static async getProductsBySubcategory(connection, pantryId, subcategory) {

    }

    static async getProductName(connection, pantryId, productID) {

    }

    static async setProductName(connection, pantryId, productID) {

    }

    static async getProductQuantity(connection, pantryId, productID) {

    }

    static async setProductQuantity(connection, pantryId, productID) {

    }

    static async getExpiryDate(connection, pantryId, productID) {

    }

    static async setExpiryDate(connection, pantryId, productID) {

    }
}

module.exports = Product;