class User {

    static async createNewUser() {
        
    }

    static async getFirstName(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].FirstName;
        }
        return null;  
    }

    static async setFirstName(connection, email, firstName) {
        if (typeof firstName !== "string") return;

        await connection.execute('UPDATE users SET FirstName = ? WHERE Email = ?;', [firstName, email]);
    }

    static async getLastName(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].LastName;
        }
        return null;
    }

    static async setLastName(connection, email, lastName) {
        if (typeof lastName !== "string") return;

        await connection.execute('UPDATE users SET LastName = ? WHERE Email = ?;', [lastName, email]);
    }

    static async getAge(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].Age;
        }
        return null;
    }

    static async setAge(connection, email, age) {
        if (typeof age !== "number") return;

        await connection.execute('UPDATE users SET Age = ? WHERE Email = ?;', [age, email]);
    }

    static async getEmail(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email], function (error, results) {
            if (results.length > 0) {
                return results[0].Email;
            }
        });
        return null;
    }

    static async setEmail(connection, email, emailaddress) {
        if (typeof email !== "string") return;

        await connection.execute('UPDATE users SET Email = ? WHERE Email = ?;', [email, emailaddress]);
    }

    static async getCreationDate(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].CreationDate;
        }
        return null;
    }
    static async setCreationDate(connection, email, time) {
        if (typeof time !== "number") return;

        await connection.execute('UPDATE users SET CreationDate = ? WHERE Email = ?;', [time, email]);
    }

    static async getCountryCode(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].CountryCode;
        }
        return null;
    }

    static async setCountryCode(connection, email, code) {
        if (typeof code !== "number") return;

        await connection.execute('UPDATE users SET CountryCode = ? WHERE Email = ?;', [code, email]);
    }

    static async getPhoneNumber(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].PhoneNumber;
        }
        return null;
    }

    static async setPhoneNumber(connection, email, phoneNumber) {
        if (typeof phoneNumber !== "number") return;

        await connection.execute('UPDATE users SET PhoneNumber = ? WHERE Email = ?;', [phoneNumber, email]);
    }

    static async getAccountStatus(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].AccountStatus;
        }
        return null;
    }

    static async setAccountStatus(connection, email, status) {
        if (typeof status !== "string") return;

        await connection.execute('UPDATE users SET AccountStatus = ? WHERE Email = ?;', [status, email]);
    }

    static async getRoleId() {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].UserRole;
        }
        return null;
    }

    static async setRoleId(role) {
        if (typeof role !== "number") return;

        await connection.execute('UPDATE users SET UserRole = ? WHERE Email = ?;', [role, email]);
    }

    // add Street, City, State to the database

    static async getStreet(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Street = ?;', [email]);

        if (results.length > 0) {
            return results[0].Street;
        }
        return null;
    }

    static async setStreet(connection, email, status) {
        if (typeof status !== "string") return;

        await connection.execute('UPDATE users SET Street = ? WHERE Email = ?;', [street, email]);
    }

    static async getCity(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE City = ?;', [email]);

        if (results.length > 0) {
            return results[0].Street;
        }
        return null;
    }

    static async setCity(connection, email, status) {
        if (typeof status !== "string") return;

        await connection.execute('UPDATE users SET City = ? WHERE Email = ?;', [street, email]);
    }

    static async getState(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE State = ?;', [email]);

        if (results.length > 0) {
            return results[0].Street;
        }
        return null;
    }

    static async setState(connection, email, status) {
        if (typeof status !== "string") return;

        await connection.execute('UPDATE users SET State = ? WHERE Email = ?;', [street, email]);
    }

    static getAccessLevel(connection, email) {
        if (typeof email !== "string") return;

        const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [email]);

        if (results.length > 0) {
            return results[0].AccessLevel;
        }
        return null;
    }

    static setAccessLevel(connection, email, accessLevel) {
        if (typeof email !== "string") return;

        await connection.execute('UPDATE users SET AccessLevel = ? WHERE Email = ?;', [accessLevel, email]);
    }
}

module.exports = User;