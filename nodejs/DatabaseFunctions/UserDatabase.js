const mysql = require('mysql2');
const connection = require("./Database").connection;

class UserDatabase{
    id;
    static ORDER_FINISHED = 1;
    static ORDER_PENDING = 0;
    static ORDER_NOT_SUBMITTED = -1; // this would be what's in your cart; not what's checked out

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

    getOrder(){
        var order = null;
        connection.query(`SELECT * FROM orders WHERE user_id=? AND status=?`, [this.id, UserDatabase.ORDER_NOT_SUBMITTED], (err, results, fields) => {
            if(err) return console.log("Error! Ah!");
            return order=results;
        });
        return order;
    }

    makeOrder(){

    }
}

module.exports = UserDatabase