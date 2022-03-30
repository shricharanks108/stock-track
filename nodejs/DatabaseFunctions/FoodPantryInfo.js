class FoodPantryInfo{

    // add Lat + Long to Database
    // delete name from Database
    
    static async addFoodPantry(connection, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].address;
        }
        return null;
    }

    static async deleteFoodPantry(connection, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].address;
        }
        return null;
    }

    static async getFoodPantryAddress(connection, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].address;
        }
        return null;
    }

    static async setFoodPantryAddress(connection, pantryId, address) {
        if (typeof address !== "string") return;

        await connection.execute('UPDATE users SET address = ? WHERE Email = ?;', [address, pantryId]);
    }

    static async getFoodPantryZipCode(connection, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].ZIP_code;
        }
        return null;
    }

    static async setFoodPantryZipCode(connection, pantryId, zipcode) {
        if (typeof zipcode !== "number") return;

        await connection.execute('UPDATE users SET ZIP_code = ? WHERE Email = ?;', [zipcode, pantryId]);
    }

    static async getFoodPantryName(connection, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].site_name;
        }
        return null;
    }

    static async setFoodPantryName(connection, pantryId, name) {
        if (typeof name !== "string") return;

        await connection.execute('UPDATE users SET site_name = ? WHERE Email = ?;', [name, pantryId]);
    }

    static async getFoodPantryLatitude(connection, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].Latitude;
        }
        return null;
    }

    static async setFoodPantryLatitude(connection, pantryId, lat) {
        if (typeof lat !== "number") return;

        await connection.execute('UPDATE users SET Latitude = ? WHERE Email = ?;', [lat, pantryId]);
    }

    static async getFoodPantryLongitude(connection, pantryId) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].Longitude;
        }
        return null;
    }

    static async setFoodPantryLongitude(connection, pantryId, long) {
        if (typeof lat !== "number") return;

        await connection.execute('UPDATE users SET Longitude = ? WHERE Email = ?;', [long, pantryId]);
    }
}

module.exports = WWEIAFoodCategories