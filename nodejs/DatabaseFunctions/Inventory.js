class Inventory {

    static async getFoodPantryInventory(connection, pantryId) {
	if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ?;', [pantryId]);
        if (results.length > 0) {
		return results;
        }
        return null;
    }
    
    static async addNewProduct(connection, pantryId, productID, name, description, majorCategory, subcategory, merchantID, price, UPC, expirationDate) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('INSERT INTO products VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);', [productID, pantryId, name, description, _____, majorCategory, subcategory, merchantID, price, UPC, null, null, expirationDate, null]);
    }

    static async deleteProduct(connection, productUID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        await connection.execute('DELETE FROM products WHERE ProductUID = ?;', [productUID]);
    }

    static async getProductIDsBySubcategory(connection, pantryId, subcategory) {
        if (typeof majorCategory !== "string" || typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE Subcategory = ?;', [subcategory]);

        var productIDs = [];

        if (results.length > 0) {
            for (const result of results) {
                productIDs.push(result['ProductID']);
            }
            return productIDs;
        }
        return null;
    }

    static async getProductIDsByMajorCategory(connection, pantryId, majorCategory) {
        if (typeof majorCategory !== "string" || typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND MajorCategory = ?;', [majorCategory]);

        var productIDs = [];

        if (results.length > 0) {
            for (const result of results) {
                productIDs.push(result['ProductID']);
            }
            return productIDs;
        }
        return null;
    }

    static async getProductsBySubcategory(connection, pantryId, subcategory) {
        if (typeof majorCategory !== "string" || typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND Subcategory = ?;', [subcategory]);

        if (results.length > 0) {
            return results;
        }
        return null;
    }

    static async getProductsByMajorCategory(connection, pantryId, majorCategory) {
        if (typeof majorCategory !== "string" || typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND MajorCategory = ?;', [pantryId, majorCategory]);

        if (results.length > 0) {
            return results;
        }
        return null;
    }

    static async getPantryIDsFromProductID(connection, productID) {
        if (typeof majorCategory !== "string" || typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE ProductID = ? AND MajorCategory = ?;', [productID, majorCategory]);

        var pantryIDs = [];

        if (results.length > 0) {
            for (const result of results) {
                pantryIDs.push(result['ProductID']);
            }
            return pantryIDs;
        }
        return null;
    }
    
}

module.exports = Inventory;
