class MerchantDatabase{
    id;

    getCountryCode(){

    }
    setCountryCode(code){
        if(typeof code !== "number") return;
    }

    getName(){

    }
    setName(name){
        if(typeof name !== "string") return;
    }

    getCreationDate(){
        return null;
    }
    setCreationDate(time){
        if(typeof this.getCreationDate() !== "undefined" || this.getCreationDate() !== null) return; //different types of null. it's weird.
        if(typeof time !== "number") return; //Date.now() is a number
    }

    getAdminId(){

    }
    setAdminId(id){
        if(typeof code !== "number") return;

    }
}

module.exports = MerchantDatabase