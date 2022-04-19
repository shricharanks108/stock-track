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
    
    // write all function bodies below

    static async createOrderItem(connection, orderID, productID, quantity){
        // TODO: what is order_line_number ?
        if(typeof orderID !== "number") return;
        if(typeof productID !== "number") return;
        if(typeof quantity !== "number") return;

        await connection.execute(`INSERT INTO order_items (order_id, product_id, quantity, order_line_number) VALUES (?, ?, ?, ?);`, [orderID, productID, quantity, -1]);
    }

    static async getOrderItems(connection, orderID){
        if(typeof orderID !== "number") return;

        const [results, fields] = await connection.execute(`SELECT * FROM order_items WHERE order_id = ?;`, [orderID]);
        
        if(results.length > 0) return results;
        return null;
    }

    static async getOrder(connection, orderID) {
        if(typeof orderID !== "number") return;

        const [results, fields] = await connection.execute(`SELECT * FROM orders WHERE order_id = ?;`, [orderID]);
        
        if(results.length > 0) return results[0];
        return null;
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

        var orderStatus = OrderStatus.ORDER_PENDING.value();

        // TODO: what do these dates mean and how are they supposed to be handled? Is it all null until otherwise specified?
        var created_at_date = new Date();

        var required_date = new Date();
        required_date.setDate(created_at_date + 7);

        var processedBy = new Date();
        processedBy.setDate(created_at_date + 2);

        var shipped_date = new Date();
        shipped_date.setDate(created_at_date + 4);
        
        await connection.execute(
            `INSERT INTO orders (staff_nr, user_id, status, processed_by, required_date, shipped_date, created_at) VALUES (?, ?, ?, ?, ?, ?, ?);`,
            [staff_nr, user_id, orderStatus, processedBy, required_date, shipped_date, created_at_date]
        );

        orderID = await this.getOrderID(connection, staff_nr, user_id, processedBy, required_date, shipped_date, created_at_date);

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
        await connection.execute(`DELETE FROM order_items WHERE order_id = ?;`, [orderID]);
    }

}