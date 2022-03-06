class MerchantDatabase{
    static id;

    static getCountryCode(){

    }
    static setCountryCode(code){
        if(typeof code !== "number") return;
    }

    static getName(){

    }
    static setName(name){
        if(typeof name !== "string") return;
    }

    static getCreationDate(){
        return null;
    }
    static setCreationDate(time){
        if(typeof this.getCreationDate() !== "undefined" || this.getCreationDate() !== null) return; //different types of null. it's weird.
        if(typeof time !== "number") return; //Date.now() is a number
    }

    static getAdminId(){

    }
    static setAdminId(id){
        if(typeof code !== "number") return;

    }
}

module.exports = MerchantDatabase