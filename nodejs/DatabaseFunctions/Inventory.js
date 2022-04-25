class Inventory {

    static async addItem(connection, item, pantryId, itemID) {

    }

    static async deleteItem(connection, id, pantryId, itemID) {

    }

    static async getFoodPantryInventory(connection, id, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results;
        }
        return null;
    }

    static async getItemByID(connection, itemID, pantryId, itemID) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND id = ?;', [pantryId, itemID]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getItemIDByName(connection, name, pantryId, itemName) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND name = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getItemsByCategory(connection, category, pantryId, category) {

    }

    static async getItemsBySubcategory(connection, category, pantryId, subcategory) {

    }

    static async getItemName(connection, id, pantryId, itemID) {

    }

    static async setItemName(connection, id, pantryId, itemID) {

    }

    static async getItemQuantity(connection, item, pantryId, itemID) {

    }

    static async setItemQuantity(connection, item, pantryId, itemID) {

    }

    static async getExpiryDate(connection, item, pantryId, itemID) {

    }

    static async setExpiryDate(connection, item, pantryId, itemID) {

    }
}

module.exports = Inventory;