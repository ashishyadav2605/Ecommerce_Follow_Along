# Ecommerce-Follow-Along
'E-commerce website'  follow along project for Semester 2

***Milestone 1***: **Project Overview**

In todays live session our mentor introduced us to overall structure of MERN Stack.
He taught us the foundational steps to set up the environment for future milestones, we created a new repository for our follow along project.

***Milestone 2***: **Front-end setup and login page**

In todays live session we learnt to organize the files into separate frontend and backend directories.

Set up React for frontend

Node.js setup for backend

Tailwind CSS configurations

We also designed the front end for login page of the e-commerce application.


***Milestone 3***: **File organizing and MongoDB**

Set up dedicated folders for organizing backend code effectively.
Initialize and configure a Node.js server to handle API requests.
Connect your application to MongoDB to store and manage data.
Implement basic error handling to ensure your server runs smoothly.

***Milestone 4***: **Created and Configured Files**

Created a User Model: Our mentor explained how a MODEL in MVC architecture works and how it interacts with database.
Created a User Controller: We got to know the purpose of a controller in MVC.
Enable and Configure Multer: In the live session mentor told us what is a multer and what is it used for and how it can be configured to handle file uploads.

***Milestone 5***: **Created Frontend UI for signup page and added the code for authentication of the inputs**

In this part of the Follow Along project we made the UI (Frontend) for the sign up page of our website. This page allows the users to add their details.

After the user is done with entering backend comes into play. Backend does the form validation part, it verifies whether the user has entered the details in the right format(e.g. email, minimum length)

***Milestone 6***: 

1. Encrypt the Password Using bcrypt

During the user signup process, encrypt the user's password using the bcrypt hashing algorithm. This ensures that the password is stored in a secure, non-reversible format.
The bcrypt algorithm adds a "salt" to the password before hashing, making it resistant to common password-cracking techniques.
The hashed password should never be stored in plain text.

2. Save the Hashed Password in the Database

Only store the hashed version of the password in the database.
Do not store plain text passwords for security reasons.
Ensure the hashed password is securely saved in the database along with other user information.

3. Store Complete User Data

In addition to the hashed password, save the user's other information, such as their name, email, and any other relevant data.
The complete user data should be stored securely, ensuring that sensitive information like the password remains encrypted.

4. Handle Login with Hashed Passwords

During the login process, compare the entered password with the hashed version stored in the database.
Use bcrypt to safely verify if the entered password matches the stored hash.


**Milestone 7**
1. Create Login Endpoint:
Accept user credentials (email/username and password).
Retrieve the corresponding user from the database.

2. Validate Password:
Use bcrypt to hash the entered password.
Compare it with the stored hashed password for authentication.


**Milestone 8**
1. Create the Card Component:

Design a reusable card component with props for product details (e.g., name, image, price).

2. Design the Homepage Layout:

Set up a grid layout or flexbox for displaying multiple cards neatly.

**Milestone 9**

1. Create the form for products

2. This form will take multiple product images images as input

**Milestone 10**

1. Define the structure of product data (e.g., name, description, price, image URL) using Mongoose. -Ensure each field has proper validation (e.g., required fields, correct data types).

2. Build a POST endpoint to receive product data.

3. Validate and save the product details to MongoDB.

**Milestone 11**

1. Write an endpoint that will send all products data to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component.

**Milestone 12**

1. Write an endpoint that will send all products with user mail to frontend In frontend write an function to get all the data Display these data dynamically passing to product card component.

**Milestone 13**

1. Write an endpoint that will receive new data and update the existing data inside MondoDB. In frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.

**Milestone 14**

1.Write an endpoint that will Delete the data form MongoDB using ID. In frontend we will add an delete button to the product card. When click on delete button we will send the product id to server endpoint.

**Milestone 15**

1. In this milestone, we will learn how to create and nav component.
2. Then we will learn how to reuse the same component in multiple pages.

**Milestone 16**

1. We will learn how to new page to display each product.
2. Then how to add quantity and add to cart button.

**Milestone 17**

1. In this milestone, we will create a cart schema to store products.
2. Then we will write an endpoint to store and recieve product details in the cart.

**Milestone 18**

1. We will firstly create a backend endpoint for cart page.
2. Then we will write an endpoint to get products inside cart for user.

**Milestone 19**

1. Display a list of products in the cart.
2. Increase and decrease product quantity using + & - buttons.
3. Backend API to update quantity in real-time.

**Milestone 20**

1. Display profile photo, name and email in one section.
2. Display address information in one section.
3. If no address is found, show message for the same.
4. Provide an "Add Address" for users to update their address.
5. Backend API to send user data.

**Milestone 21**

1. Create Address form frontend page.
2. Manage Address state.
3. Navigation from Profile Page.
4. Submitting the address.
5. Optional Enhancements.

**Milestone 22**

1. Create an endpoint that will receive the address from address form in frontend.
2. Add the address to the address array inside user collection.

**Milestone 23** 

1. First we will create an placeorder button inside cart page and navigate to select address page when clicked.
2. Then we will create and select address page that will display all the available address and have an option to select one address.
3. Write an backend endpoint that will send all the addresses of the User.

**Milestone 24**     

1. Displays all the products in the cart with details.
2. Shows the selected delivery address for verification.
3. Displays the total value of the cart.
4. Includes a "Place Order" button for confirming the order.

**Milestone 25**

1. Create an API endpoint (POST /api/orders) to receive user email, address, and product details.
2. Retrieve the user _id using their email.
3. Create separate orders for each product with the same address.
4. Store the orders in MongoDB using the Order schema.
5. Ensure proper validation, error handling, and efficient database operations.

**Milestone 26**

1. Create an API endpoint (GET /api/orders/user) to receive the user email.
2. Retrieve the user _id using their email.
3. Fetch all orders associated with that _id from MongoDB.
4. Send all user orders in the response.
5. Ensure error handling and data security.

**Milestone 27**

1. Created a new "My Orders" page to display all orders made by the logged-in user.
2. Sends a GET request to the existing /my-orders endpoint to fetch order data.
3. The user's email is passed to the endpoint to retrieve their specific order history.
4. All orders are displayed with relevant details such as items, date, and status.
5. Added "My Orders" link to the navbar for improved navigation and user experience.

**Milestone 28**

1. Added "Cancel Order" button for each order on the my-orders page, visible only for active (non-canceled) orders.
2. Created a new API endpoint to cancel an order by receiving the order-id via a POST request.
3. The endpoint fetches the order using the provided ID, updates the status to "canceled", and saves it.
4. The UI conditionally hides the cancel button if the order status is already "canceled".
5. Ensures secure and proper validation to avoid canceling non-existent or already canceled orders.

**Milestone 29**

1. Created a PayPal developer account and accessed the sandbox environment.
2. Generated sandbox test accounts and saved the UserID and Client ID for integration.
3. On the order confirmation page, added radio buttons to choose between Cash on Delivery (COD) and Online Payment.
4. When Online Payment is selected, the PayPal buttons section is displayed (functionality to be added in the next milestone).
5. This setup prepares the frontend for PayPal integration while retaining the COD option for user flexibility.

**Milestone 30**

1. This project integrates PayPal payments using the `@paypal/react-paypal-js` package.
2. It supports credit/debit cards and PayPal via the PayPalScriptProvider and PayPalButtons.  
3. Replace `YOUR_SANDBOX_CLIENT_ID` with your PayPal sandbox client ID to start testing.

**Milestone 31**

1. Install an npm package called react-redux
2. create an new folder called store with two files store.js and userActions.js.
3. We will store user mail inside global state.
4. In store.js file configure an store with userReducer function that will handle global user email state.
5. Inside userActions.js file write an function called setEmail that will help in storing email state inside global state.
6. In Index.js file make sure to wrap APP component inside provider component with store as props.

**Milestone 32**

1. Use `dispatch` in the Login page to store the user's email in the global state.  
2. Access the stored email in other pages using `useSelector`.

