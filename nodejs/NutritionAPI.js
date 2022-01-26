const request = require("request");
var FDC_API_KEY = process.env.FDC_API_KEY;

function requestPromise(url){
    return new Promise( (resolve, reject) => {
        request.get(url, (err, res, body) => {
            if(err) reject(err);
            resolve(res);
        });
    } );
}

var NutritionAPI = {
    baseURL: "https://api.nal.usda.gov/fdc/v1",
    getFood: async (fdcID) => {
        var res = await requestPromise(`${NutritionAPI.baseURL}/food/${fdcID}?api_key=${FDC_API_KEY}`).catch(() => undefined);
        if(res.body.length === 0) return null;
        return JSON.parse(res.body);
    },
    getFoods: async (IDs) => {
        //TODO: check that IDs is nothing but digits array
        var res = await requestPromise(`${NutritionAPI.baseURL}/foods?fdcIds=${IDs.join(",")}&api_key=${FDC_API_KEY}`).catch(() => undefined);
        if(res.body.length === 0) return null;
        return JSON.parse(res.body);
    },
    listFood: async () => {
        var res = await requestPromise(`${NutritionAPI.baseURL}/foods/list?api_key=${FDC_API_KEY}`).catch(() => undefined);
        if(res.body.length === 0) return null;
        return JSON.parse(res.body);
    },
    searchFood: async (food) => {
        var res = await requestPromise(`${NutritionAPI.baseURL}/foods/search?api_key=${FDC_API_KEY}
                                                                            &query=${encodeURIComponent(food)}
                                                                            &dataType=Branded`)
        .catch(() => undefined);
        if(res.body.length === 0) return null;
        return JSON.parse(res.body);
    },
    isBranded: (foodData) => foodData && foodData.dataType === "Branded",
    getServingSize: async (fdcID) => {
        var foodData = await NutritionAPI.getFood(fdcID);
        if(!NutritionAPI.isBranded(foodData)) return null;
        return foodData.servingSize.toString() + foodData.servingSizeUnit;
    },
    getAllNutrients: async (fdcID) => {
        var foodData = await NutritionAPI.getFood(fdcID);
        // Food must be "Branded" in order to get nutrients
        if(!NutritionAPI.isBranded(foodData)) return null;
        return foodData.labelNutrients;
    },
    getNutrient: async (fdcID, nutrient) => {
        if(typeof nutrient !== "string") return null;

        var allNutrients = await NutritionAPI.getAllNutrients(fdcID);
        if(allNutrients === null) return null;
        return allNutrients[nutrient].value;
    },
    // manually get each of the label nutrients in case Frontend needs it to be stupid simple
    getTotalFat: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "fat"),
    getSaturatedFat: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "saturatedFat"),
    getTransFat: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "transFat"),
    getCholesterol: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "cholesterol"),
    getSodium: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "sodium"),
    getCarbohydrates: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "carbohydrates"),
    getFiber: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "fiber"),
    getSugars: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "sugars"),
    getProtein: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "protein"),
    getCalcium: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "calcium"),
    getIron: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "iron"),
    getPostassium: async (fdcID) => await NutritionAPI.getNutrient(fdcID, "postassium"),
    getCalories: async(fdcID) => await NutritionAPI.getNutrient(fdcID, "calories"),
}

module.exports = NutritionAPI