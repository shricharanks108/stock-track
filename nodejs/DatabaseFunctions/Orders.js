class OrderStatus {
    static ORDER_PENDING = new OrderStatus(0);
    static ORDER_FULFILLED = new OrderStatus(1);

    constructor(statusCode){
        if(typeof statusCode !== "number") return;

        this.value = statusCode;
    }

    value(){
        return this.value;
    }
}

class Orders {

    static async createOrderItem(connection, orderID, productUID){
        if(typeof Number(orderID) !== "number") return;
        if(typeof Number(productUID) !== "number") return;

        await connection.execute(`INSERT INTO order_items (OrderID, ProductID, FulfilledByStaffID, Fulfilled) VALUES (?, ?, ?, ?);`, [Number(orderID), Number(productUID), 1, false]);
    }

    /**
     * Function to create an order
     * 
     * @param {object} productIDsWithQuantities pass in a dictionary with each product id and it's respective quantities as such {productID: productQty}
     */
    static async createOrder(connection, staff_nr, user_id, productIDsWithQuantities) {
        if(typeof staff_nr !== "number") return;
        if(typeof user_id !== "number") return;
        if(typeof productIDsWithQuantities !== "object") return;

        var orderStatus = OrderStatus.ORDER_PENDING.value;

        // TODO: what do these dates mean and how are they supposed to be handled? Is it all null until otherwise specified?
        var created_at_date = new Date();

        var required_date = new Date();
        required_date.setDate(created_at_date.getDate() + 7);

        var processedBy = new Date();
        processedBy.setDate(created_at_date.getDate() + 2);

        var shipped_date = new Date();
        shipped_date.setDate(created_at_date.getDate() + 4);
        
        await connection.execute(
            `INSERT INTO orders (order_id, staff_nr, user_id, status, processed_by, required_date, shipped_date, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
            [null, staff_nr, user_id, orderStatus, processedBy, required_date, shipped_date, created_at_date]
        );

        var orderID = await this.getOrderID(connection, staff_nr, user_id, processedBy, required_date, shipped_date, created_at_date);

        // Create Order Items for Order
        for(var key in productIDsWithQuantities){
            var productID = parseInt(key);
            var productQuantity = productIDsWithQuantities[productID];
            await this.createOrderItem(connection, orderID, productID, productQuantity);
        }
    }

    static async getOrderID(connection, staff_nr, user_id, processed_by, required_date, shipped_date, created_at){
        if(typeof staff_nr !== "number") return;
        if(typeof user_id !== "number") return;
        if(typeof processed_by !== "object") return;
        if(typeof required_date !== "object") return;
        if(typeof shipped_date !== "object") return;
        if(typeof created_at !== "object") return;

        const [results, fields] = await connection.execute(
            `SELECT order_id FROM orders WHERE staff_nr = ? AND user_id = ? AND processed_by = ? AND required_date = ? AND shipped_date = ? AND created_at = ?;`,
            [staff_nr, user_id, processed_by, required_date, shipped_date, created_at]
        );

        if(results.length > 0) return results[0];
        return null;
    }

    static async getUserIDFromOrder(connection, orderID){
        if(typeof orderID !== "number") return;

        const [results, fields] = await connection.execute(`SELECT user_id FROM orders WHERE order_id = ?`, [orderID]);
        if(results.length > 0) return results[0];
    }

    static async getOrder(connection, orderID) {
        if(typeof orderID !== "number") return;

        const [results, fields] = await connection.execute(`SELECT * FROM orders WHERE order_id = ?;`, [orderID]);
        
        if(results.length > 0) return results[0];
        return null;
    }

    static async editOrderStatus(connection, order_id, newStatus) {
        if (typeof order_id !== "number") return;
        if (typeof newStatus !== "number") return;

        await connection.execute('UPDATE orders SET status = ? WHERE order_id = ?;', [newStatus, order_id]);
    }

    static async deleteOrder(connection, orderID) {
        if (typeof orderID !== "number") return;

        // Delete the order
        await connection.execute(`DELETE FROM orders WHERE order_id = ?;`, [orderID]);
 
        // Delete the items associated with the order
        await connection.execute(`DELETE FROM order_items WHERE OrderID = ?;`, [orderID]);
    }

    static async getPendingOrders(connection) {
        const [results, fields] = await connection.execute(`SELECT * FROM orders WHERE status = ?;`, [OrderStatus.ORDER_PENDING.value]);
        if(results.length > 0) return results;
        return null;  
    }

    static async getFulfilledOrders(connection) {
        const [results, fields] = await connection.execute(`SELECT * FROM orders WHERE status = ?;`, [OrderStatus.ORDER_FULFILLED.value]);
        if(results.length > 0) return results;
        return null;
    }

    static async getOrderItems(connection, orderID){
        if(typeof orderID !== "number") return;

        const [results, fields] = await connection.execute(`SELECT * FROM order_items WHERE OrderID = ?;`, [orderID]);
        
        if(results.length > 0) return results;
        return null;
    }

    static async getPendingOrderItems(connection, orderID){
        if(typeof orderID !== "number") return;

        const [results, fields] = await connection.execute(`SELECT * FROM order_items WHERE OrderID = ?;`, [orderID]);
        
        if(results.length > 0) return results;
        return null;
    }

    static async getFulfilledOrderItems(connection, orderID){
        if(typeof orderID !== "number") return;

        const [results, fields] = await connection.execute(`SELECT * FROM order_items WHERE OrderID = ?;`, [orderID]);
        
        if(results.length > 0) return results;
        return null;
    }
}

module.exports = Orders;