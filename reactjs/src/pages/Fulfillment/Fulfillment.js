import "./Fulfillment.css"

function Fulfillment(){
    return (
        <div id="fulfillmentStaticDiv">
            <table id="fulfillmentTable">
                <tr>
                    <th>Status</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>User ID</th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>1</td>
                    <td>Whole Milk</td>
                    <td>One Gallon - Whole Milk</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>2</td>
                    <td>Lowfat (2%) Milk</td>
                    <td>One Gallon - Lowfat (2%) Milk</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>3</td>
                    <td>Lowfat (1%) Milk</td>
                    <td>One Gallon - Lowfat (1%) Milk</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>4</td>
                    <td>Lowfat (2%) Milk</td>
                    <td>Half-Gallon - Lowfat (2%) Milk</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>5</td>
                    <td>Lowfat (1%) Milk</td>
                    <td>Half-Gallon - Lowfat (1%) Milk</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>6</td>
                    <td>Black Beans</td>
                    <td>Approx. 15 Oz Can of Black Beans (Assorted Brands)</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>7</td>
                    <td>Pasta, spaghetti</td>
                    <td>1 lb Spaghetti Pasta (Barilla)</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>8</td>
                    <td>Whole Milk</td>
                    <td>Half-Gallon - Whole Milk</td>
                    <td>9</td>
                </tr>
            </table>
            <div>
                <a class="header-login-button btn btn-primary" role="button">Submit</a>
            </div>
        </div>
    );
}

export default Fulfillment;