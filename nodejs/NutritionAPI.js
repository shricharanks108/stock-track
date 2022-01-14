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
    getFood: async (id, wantsFullRes=false) => {
        var res = await requestPromise(`${NutritionAPI.baseURL}/food/${id}?api_key=${FDC_API_KEY}`).catch(() => undefined);
        return (wantsFullRes)? res:res.body;
    },
    getFoods: async (IDs, wantsFullRes=false) => {
        //TODO: check that IDs is nothing but digits
        //TODO: NOT WORKING
        fdcIDsURI = ""
        for(var i = 0; i < IDs.length; i++){
            if(i > 0) fdcIDsURI += "&";
            fdcIDsURI += `fdcIds=${IDs[i]}`;
        }
        var res = await requestPromise(`${NutritionAPI.baseURL}/foods?${fdcIDsURI}?api_key=${FDC_API_KEY}`).catch(() => undefined);
        return (wantsFullRes)? res:res.body;
    },
    listFood: async (wantsFullRes=false) => {
        var res = await requestPromise(`${NutritionAPI.baseURL}/foods/list?api_key=${FDC_API_KEY}`).catch(() => undefined);
        return (wantsFullRes)? res:res.body;
    },
    searchFood: async (food, wantsFullRes=false) => {
        var res = await requestPromise(`${NutritionAPI.baseURL}/foods/search?api_key=${FDC_API_KEY}&query=${encodeURIComponent(food)}`).catch(() => undefined);
        return (wantsFullRes)? res:res.body;
    },
}

module.exports = NutritionAPI