class MerchantPeriodsDatabase{
    id;

    getMerchantId(){
    }
    setMerchantId(id){
        if(typeof id !== "number") return;
    }

    getCountryCode(){

    }
    setCountryCode(code){
        if(typeof code !== "number") return;
    }

    getStartDate(){

    }
    setStartDate(time){

    }

    getEndDate(){

    }
    setEndDate(time){

    }
}

module.exports = MerchantPeriodsDatabase