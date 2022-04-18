class Inventory {

    static async addItem(connection, item, pantryId,) {

    }

    static async deleteItem(connection, id, pantryId,) {

    }

    static async getFoodPantryInventory(connection, id, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results;
        }
        return null;
    }

    static async getItemByID(connection, itemID, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND id = ?;', [pantryId, itemID]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getItemByName(connection, name, pantryId,) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND name = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getItemsByCategory(connection, category, pantryId,) {

    }

    static async getItemsBySubcategory(connection, category, pantryId,) {

    }

    static async getItemName(connection, id, pantryId,) {

    }

    static async setItemName(connection, id, pantryId,) {

    }

    static async getItemQuantity(connection, item, pantryId,) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results.quantity;
        }
        return null;
    }

    static async setItemQuantity(connection, item, pantryId,) {

    }

    static async getItemCountByName(connection, name, pantryId,) {

    } 
}

module.exports = Inventory;