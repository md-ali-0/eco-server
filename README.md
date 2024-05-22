# Product and Order Management API

## Introduction

This API provides functionality for managing products and orders in an e-commerce platform. It includes endpoints for creating, retrieving, updating, and deleting products and orders, as well as searching for products and updating inventory based on orders.

## Technologies Used

-   Node.js
-   Express
-   Mongoose (MongoDB)
-   CORS
-   dotenv
-   Zod (for validation)

## API Routes

### Product Management

#### Create a New Product

-   **Endpoint:** `/api/products`
-   **Method:** `POST`
-   **Description:** Creates a new product with the provided details.

#### Retrieve a List of All Products

-   **Endpoint:** `/api/products`
-   **Method:** `GET`
-   **Description:** Retrieves a list of all products.

#### Retrieve a Specific Product by ID

-   **Endpoint:** `/api/products/:productId`
-   **Method:** `GET`
-   **Description:** Retrieves details of a specific product by its ID.

#### Update Product Information

-   **Endpoint:** `/api/products/:productId`
-   **Method:** `PUT`
-   **Description:** Updates the information of a specific product by its ID.

#### Delete a Product

-   **Endpoint:** `/api/products/:productId`
-   **Method:** `DELETE`
-   **Description:** Deletes a specific product by its ID.

#### Search for a Product

-   **Endpoint:** `/api/products?searchTerm=<term>`
-   **Method:** `GET`
-   **Description:** Searches for products matching the specified search term.

### Order Management

#### Create a New Order

-   **Endpoint:** `/api/orders`
-   **Method:** `POST`
-   **Description:** Creates a new order with the provided details and updates the inventory accordingly.

#### Retrieve All Orders

-   **Endpoint:** `/api/orders`
-   **Method:** `GET`
-   **Description:** Retrieves a list of all orders.

#### Retrieve Orders by User Email

-   **Endpoint:** `/api/orders?email=<user-email>`
-   **Method:** `GET`
-   **Description:** Retrieves orders associated with a specific user email.

## How to Run the Project

1. **Clone the Repository**

    ```bash
    git clone https://github.com/md-ali-0/eco-server.git
    cd eco-server
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    - Create a `.env` file in the root directory and add the following:
        ```env
        PORT=5000
        MONGODB_URI=<your-mongodb-uri>
        ```

4. **Start the Server**
    ```bash
    npm start
    ```

The server will start running on `http://localhost:5000`. You can now use the API endpoints as described above.

## Sample Error Responses

### Validations

This API uses Zod for validating incoming data for product and order creation and updating operations. Ensure that the data adheres to the structure defined in the models. Validation errors are handled gracefully and meaningful error messages are provided in the API responses.
