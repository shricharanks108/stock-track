class Orders {
    
    // write all function bodies below

    static async createOrder(connection, pantryId, userId, order) {
        if (typeof pantryId !== "number") return;
        if (typeof userId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].address;
        }
        return null;  
    }

    static async editOrder(connection, pantryId, userId, order) {
        if (typeof pantryId !== "number") return;
        if (typeof userId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].address;
        }
        return null;  
    }

    static async viewOrder(connection, pantryId, userId, order) {
        if (typeof pantryId !== "number") return;
        if (typeof userId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].address;
        }
        return null;  
    }

    static async deleteOrder(connection, pantryId, userId, order) {
        if (typeof pantryId !== "number") return;
        if (typeof userId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM food_pantry WHERE food_pantry_ID = ?;', [pantryId]);

        if (results.length > 0) {
            return results[0].address;
        }
        return null;  
    }

}