class Inventory {

    static async addProduct(connection, product, pantryId, productID) {

    }

    static async deleteProduct(connection, id, pantryId, productID) {

    }

    static async getFoodPantryInventory(connection, id, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results;
        }
        return null;
    }

    static async getProductsByMajorCategory(connection, pantryId, category) {

    }

    static async getProductsBySubcategory(connection, pantryId, subcategory) {

    }

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

}

module.exports = Inventory;
