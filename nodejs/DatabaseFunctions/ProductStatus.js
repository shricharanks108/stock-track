class ProductStatus {

    static async getProductQuantity(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products_status WHERE food_pantry_ID = ? AND id = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ProductQuantity;
        }
        return null;
    }

    static async setProductQuantity(connection, pantryId, productID, productQuantity) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products_status SET ProductQuantity = ? WHERE PantryID = ? AND ProductID = ?;', [productQuantity, pantryId, productID]);
    }

    static async getNextShipment(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results , fields] = await connection.execute('SELECT * FROM products_status WHERE pantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].NextShipment;
        }
        return null;
    }

    static async setNextShipment(connection, pantryId, productID, nextShipment) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products_status SET NextShipment = ? WHERE PantryID = ? AND ProductID = ?;', [nextShipment, pantryId, productID]);
    }

    static async getOutOfStock(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products_status WHERE pantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].OutOfStock;
        }
        return null;
    }

    static async setOutOfStock(connection, pantryId, productID, outOfStock) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products_status SET OutOfStock = ? WHERE PantryID = ? AND ProductID = ?;', [outOfStock, pantryId, productID]);
    }

}

module.exports = ProductStatus;