class WWEIAFoodCategories{

    // DGAC Major Category --> Example: 'Dairy'
    // DGAC Subcategory --> Example: 'Lowfat Milk/yogurt'
    // WWEIA Food Category Number --> Example: 1006
    // WWEIA Food Category Description --> Example: 'Milk, lowfat'

    static async getFoodSubcategoryFromNumber(connection, categoryNumber) {
        if (typeof categoryNumber !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM wweia_food_categories WHERE `WWEIA Food Category Number` = ?;', [categoryNumber]);

        if (results.length > 0) {
            return results[0]['DGAC Subcategory'];
        }
        return null;
    }

    static async getFoodMajorCategoryFromSubcategory(connection, subcategory) {
        if (typeof subcategory !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM wweia_food_categories WHERE `DGAC Subcategory` = ?;', [subcategory]);

        if (results.length > 0) {
            return results[0]['DGAC Major Category'];
        }
        return null;
    }

    static async getFoodSubcategoriesFromMajorCategory(connection, majorCategory) {
        if (typeof majorCategory !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM wweia_food_categories WHERE `DGAC Major Category` = ?;', [majorCategory]);

        var subcategories = [];

        if (results.length > 0) {
            for (const result of results) {
                subcategories.push(result['DGAC Subcategory']);
            }
            return Array.from(new Set(subcategories));
        }
        return null;
    }

    static async getFoodSubcategoryDescription(connection, subcategory) {
        if (typeof subcategory !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM wweia_food_categories WHERE `DGAC Subcategory` = ?;', [subcategory]);

        if (results.length > 0) {
            return results[0]['WWEIA Food Category Description'];
        }
        return null;
    }

    static async getFoodCategoryNumbersfromMajorCategory(connection, majorCategory) {
        if (typeof majorCategory !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM wweia_food_categories WHERE `DGAC Major Category` = ?;', [majorCategory]);

        var numbers = [];

        if (results.length > 0) {
            for (const result of results) {
                numbers.push(result['WWEIA Food Category Number']);
            }
            return numbers;
        }
        return null;
    }

    static async getMajorCategoryAndSubcategoryFromNumber(connection, categoryNumber) {
        if (typeof categoryNumber !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM wweia_food_categories WHERE `WWEIA Food Category Number` = ?;', [categoryNumber]);

        if (results.length > 0) {
            return {
                'DGAC Major Category': results[0]['DGAC Major Category'], 
                'DGAC Subcategory': results[0]['DGAC Subcategory']
            };
        }
        return null;
    }
}

module.exports = WWEIAFoodCategories