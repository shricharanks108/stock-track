class User {

    static createUser (connection, userID) {
        if(typeof userID !== "string") return;

    }

    static getFirstName(connection, userID) {
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }

            if (results.length > 0) {
                return results[0].FirstName;
            }
        });

        return null;
    }

    static setFirstName(connection, userID, firstName) {
        if(typeof firstName !== "string") return;

        connection.query('UPDATE users SET FirstName = ? WHERE UserId = ?;',[firstName, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getLastName(connection, userID) {
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }
            if (results.length > 0) {
                return results[0].LastName;
            }
        });

        return null;
    }

    static setLastName(connection, userID, lastName) {
        if(typeof lastName !== "string") return;

        connection.query('UPDATE users SET LastName = ? WHERE UserId = ?;',[lastName, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getAge(connection, userID) {
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }
            if (results.length > 0) {
                return results[0].Age;
            }
        });

        return null;
    }
    static setAge(connection, userID, age) {
        if(typeof age !== "number") return;

        connection.query('UPDATE users SET Age = ? WHERE UserId = ?;',[age, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getEmail(connection, userID){
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }
            if (results.length > 0) {
                return results[0].Email;
            }
        });
    }

    static setEmail(connection, userID, email) {
        if(typeof email !== "string") return;

        connection.query('UPDATE users SET Email = ? WHERE UserId = ?;',[email, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getCreationDate(connection, userID) {
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }
            if (results.length > 0) {
                return results[0].CreationDate;
            }
        });
    }
    static setCreationDate(connection, userID, time){
        if(typeof time !== "number") return;

        connection.query('UPDATE users SET CreationDate = ? WHERE UserId = ?;',[time, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getCountryCode(connection, userID){
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }
            if (results.length > 0) {
                return results[0].CountryCode;
            }
        });

        return null;
    }

    static setCountryCode(connection, userID, code){
        if(typeof code !== "number") return;

        connection.query('UPDATE users SET CountryCode = ? WHERE UserId = ?;',[code, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getPhoneNumber(connection, userID) {
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }
            if (results.length > 0) {
                return results[0].PhoneNumber;
            }
        });

        return null;
    }

    static setPhoneNumber(connection, userID, phoneNumber){
        if(typeof phoneNumber !== "number") return;

        connection.query('UPDATE users SET PhoneNumber = ? WHERE UserId = ?;',[phoneNumber, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getAccountStatus(connection, userID){
        if(typeof userID !== "string") return;

        connection.query('SELECT * FROM users WHERE UserId = ?;',[userID], function(error, results) {
            if (error) { throw error; }
            if (results.length > 0) {
                return results[0].AccountStatus;
            }
        });
    }

    static setAccountStatus(connection, userID, status){
        if(typeof status !== "string") return;

        connection.query('UPDATE users SET AccountStatus = ? WHERE UserId = ?;',[status, userID], function(error, results) {
            if (error) { throw error; }
        });
    }

    static getRoleId(){}
    static setRoleId(role){
        if(typeof id !== "number") return;
    }
}

module.exports = User;