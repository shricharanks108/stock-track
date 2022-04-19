class Permissions {

    static async getUserPermissionLevelDetails(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0];
        }
        
        return null; 
    }

    static async getCreateStaffPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].CreateStaffPermission;
        }
        
        return null; 
    }

    static async setCreateStaffPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET CreateStaffPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

    static async getPlaceOrdersPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].PlaceOrdersPermission;
        }
        
        return null; 
    }

    static async setPlaceOrdersPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET PlaceOrdersPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

    static async getFulfillOrdersPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].FulfillOrdersPermission;
        }
        
        return null;
    }

    static async setFulfillOrdersPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET FulfillOrdersPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

    static async getAddMerchantsPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].AddMerchantsPermission;
        }
        
        return null;
    }

    static async setAddMerchantsPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET AddMerchantsPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

    static async getViewAdminDashboardPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].ViewAdminDashboardPermission;
        }
        
        return null;
    }

    static async setViewAdminDashboardPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET ViewAdminDashboardPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

    static async getViewAllOrdersPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].ViewAllOrdersPermission;
        }
        
        return null;
    }

    static async setViewAllOrdersPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET ViewAllOrdersPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

    static async getRestockInventoryPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].RestockInventoryPermission;
        }
        
        return null;
    }

    static async setRestockInventoryPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET RestockInventoryPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

    static async getMakeAnnouncementsPermission(connection, accessLevel) {
        if (typeof accessLevel !== "number") return;

        const [results, fields] = await connection.execute('SELECT * FROM user_permissions WHERE AccessLevel = ?;', [accessLevel]);

        if (results.length > 0) {
            return results[0].MakeAnnouncementsPermission;
        }
        
        return null;
    }

    static async setMakeAnnouncementsPermission(connection, accessLevel, newPermissionStatus) {
        if (typeof accessLevel !== "number") return;

        await connection.execute('UPDATE user_permissions SET MakeAnnouncementsPermission = ? WHERE AccessLevel = ?;', [newPermissionStatus, accessLevel]);
    }

}

module.exports = Permissions;