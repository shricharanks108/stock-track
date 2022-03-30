class Inventory {

    static addItem(connection, item, pantryId,) {

    }

    static deleteItem(connection, id, pantryId,) {

    }

    static getFoodPantryInventory(connection, id, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results;
        }
        return null;
    }

    static getItemByID(connection, itemID, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND id = ?;', [pantryId, itemID]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static getItemByName(connection, name, pantryId,) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND name = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static getItemsByCategory(connection, category, pantryId,) {

    }

    static getItemsBySubcategory(connection, category, pantryId,) {

    }

    static getItemName(connection, id, pantryId,) {

    }

    static setItemName(connection, id, pantryId,) {

    }

    static getItemQuantity(connection, item, pantryId,) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results.quantity;
        }
        return null;
    }

    static setItemQuantity(connection, item, pantryId,) {

    }

    static getItemCountByName(connection, name, pantryId,) {

    } 
}

module.exports = Inventory;