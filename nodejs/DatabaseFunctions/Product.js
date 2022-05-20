import NutritionAPI from "../NutritionAPI";

class Product {

    static async getProductByID(connection, pantryId, productUID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductUID = ?;', [pantryId, productUID]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static async getProductIDByName(connection, name, pantryId, productName) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductName = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0].ProductID;
        }
        return null;
    }

    static async getProductName(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

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
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

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
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].ExpiryDate;
        }
        return null;
    }

    static async setProductExpiryDate(connection, pantryId, productID, productExpiry) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET ExpiryDate = ? WHERE PantryID = ? AND ProductID = ?;', [productExpiry, pantryId, productID]);
    }

    static async getProductMajorCategory(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].MajorCategory;
        }
        return null;
    }

    static async setProductMajorCategory(connection, pantryId, productID, productMajorCategory) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET MajorCategory = ? WHERE PantryID = ? AND ProductID = ?;', [productMajorCategory, pantryId, productID]);
    }

    static async getProductSubcategory(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].Subcategory;
        }
        return null;
    }

    static async setProductSubcategory(connection, pantryId, productID, productSubcategory) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET Subcategory = ? WHERE PantryID = ? AND ProductID = ?;', [productSubcategory, pantryId, productID]);
    }

    static async getProductMerchantID(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].MerchantID;
        }
        return null;
    }

    static async setProductMerchantID(connection, pantryId, productID, merchantID) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET MerchantID = ? WHERE PantryID = ? AND ProductID = ?;', [merchantID, pantryId, productID]);
    }

    static async getProductPrice(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
            return results[0].Price;
        }
        return null;
    }

    static async setProductPrice(connection, pantryId, productID, price) {
        if (typeof pantryId !== "number" || typeof productID !== "number") return;

        await connection.execute('UPDATE products SET Price = ? WHERE PantryID = ? AND ProductID = ?;', [price, pantryId, productID]);
    }

    static async getProductNutrition(connection, pantryId, productID) {
        if (typeof pantryId !== "number" || typeof productUID !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE PantryID = ? AND ProductID = ?;', [pantryId, productID]);

        if (results.length > 0) {
             var fdc_id =  results[0].FDCID;
        }

        return {
            calcium: await NutritionAPI.getCalcium(fdc_id),
            calories: await NutritionAPI.getCalories(fdc_id),
            carbohydrates: await NutritionAPI.getCarbohydrates(fdc_id),
            cholesterol: await NutritionAPI.getCholesterol(fdc_id),
            fat: await NutritionAPI.getTotalFat(fdc_id),
            fiber: await NutritionAPI.getFiber(fdc_id),
            iron: await NutritionAPI.getIron(fdc_id),
            potassium: await NutritionAPI.getPotassium(fdc_id),
            protein: await NutritionAPI.getProtein(fdc_id),
            saturatedfat: await NutritionAPI.getSaturatedFat(fdc_id),
            transfat: await NutritionAPI.getTransFat(fdc_id),
            sodium: await NutritionAPI.getSodium(fdc_id),
            sugar: await NutritionAPI.getSugars(fdc_id)
        };

        
        

    }
    




}

module.exports = Product;