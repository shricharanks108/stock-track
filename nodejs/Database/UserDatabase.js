class UserDatabase{
    id;

    constructor(id){
        if(typeof id === "number" && data%1===0) this.id = id;
    }


    getName(){}
    setName(name){
        if(typeof name !== "string") return;
    }

    getCreationDate(){}
    setCreationDate(time){
        if(typeof time !== "number") return;
    }

    getCountryCode(){}
    steCountryCode(code){
        if(typeof code !== "number") return;
    }

    getRoleId(){}
    setRoleId(id){
        if(typeof id !== "number") return;
    }
}

module.exports = UserDatabase