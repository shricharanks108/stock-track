class Product {

    static async getProductByID(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND id = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getProductIDByName(connection, name, pantryId, productName) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductName = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0].ProductID;
        }
        return null;
    }

    static async getProductName(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ProductName;
        }
        return null;
    }

    static async setProductName(connection, pantryId, productID, productName) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET ProductName = ? WHERE PantryID = ? AND ProductID = ?;', [productName, pantryId, productID]);
    }

    static async getProductDescription(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ProductDescription;
        }
        return null;
    }

    static async setProductDescription(connection, pantryId, productID, description) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET ProductDescription = ? WHERE PantryID = ? AND ProductID = ?;', [description, pantryId, productID]);
    }

    static async getProductExpiryDate(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ProductExpiryDate;
        }
        return null;
    }

    static async setProductExpiryDate(connection, pantryId, productID, productExpiry) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET ProductExpiryDate = ? WHERE PantryID = ? AND ProductID = ?;', [productExpiry, pantryId, productID]);
    }

    static async getProductMajorCategory(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ProductMajorCategory;
        }
        return null;
    }

    static async setProductMajorCategory(connection, pantryId, productID, productMajorCategory) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET ProductMajorCategory = ? WHERE PantryID = ? AND ProductID = ?;', [productMajorCategory, pantryId, productID]);
    }

    static async getProductSubcategory(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ProductSubcategory;
        }
        return null;
    }

    static async setProductSubcategory(connection, pantryId, productID, productSubcategory) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET ProductSubcategory = ? WHERE PantryID = ? AND ProductID = ?;', [productSubcategory, pantryId, productID]);
    }

    static async getProductMerchantID(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || productID == "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ProductMerchantID;
        }
        return null;
    }

    static async setProductMerchantID(connection, pantryId, productID, ProductMerchantID) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET MerchantID = ? WHERE PantryID = ? AND ProductID = ?;', [productSubcategory, pantryId, productID]);
    }

}

module.exports = Product;