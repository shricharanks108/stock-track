class WWEIAFoodCategories{

    // DGAC Major Category --> Example: 'Dairy'
    // DGAC Subcategory --> Example: 'Lowfat Milk/yogurt'
    // WWEIA Food Category Number --> Example: 1006
    // WWEIA Food Category Description --> Example: 'Milk, lowfat'

    static getFoodSubcategoryNumber(connection, ) {
        
    }

    static getFoodMajorCategoryFromSubcategory(connection, ) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE food_pantry_ID = ? AND name = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static getFoodSubcategoriesFromMajorCategory(connection, ) {
        if (typeof pantryId !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM products WHERE name = ?;', [pantryId, name]);

        if (results.length > 0) {
            return results[0];
        }
        return null;
    }

    static getFoodSubcategoryDescription(connection, ) {

    }

    static getFoodCategoryNumbersfromMajorCategory(connection, ) {
        
    }
}

module.exports = WWEIAFoodCategories