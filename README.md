E-Commerce Web Application Documentation

Overview

The E-Commerce Web Application is a full-stack web application developed as a capstone project. It provides users with an online platform to browse and purchase products. The application is built using React for the frontend, including Redux for state management, and MySQL, Knex, Express, and Node.js for the backend.

Features

User Authentication: Users can create accounts, log in, and log out.
Product Management: Admin users can add, edit, and delete products.
Product Catalog: Users can browse products by category and search for specific products.
Shopping Cart: Users can add products to their shopping cart and proceed to checkout.
Order Management: Users can view their order history and track the status of their orders.
Tech Stack

Frontend:
React: JavaScript library for building user interfaces.
Redux: State management library for managing application state.
React Router: Library for routing in React applications.
Axios: Library for making HTTP requests to the backend.
Backend:
Node.js: JavaScript runtime for building server-side applications.
Express: Web application framework for Node.js.
MySQL: Relational database management system for storing and managing data.
Knex.js: SQL query builder for Node.js, used for interacting with the MySQL database.
JWT (JSON Web Tokens): Used for user authentication and authorization.
Folder Structure

The project follows a structured layout to maintain organization and scalability:

java
Copy code
backend/
├── controllers/
├── models/
├── routes/
├── db/
│   ├── config.js
│   ├── migrations/
│   └── seeds/
├── .gitignore
├── app.js
├── README.md
├── knexfile.js
└── package.json

frontend/
├── public/
├── src/
│   ├── actions/
│   ├── components/
│   ├── reducers/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
API Endpoints

Authentication:
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user and issue a JWT.
Products:
GET /api/products: Get all products.
GET /api/products/:id: Get a single product by ID.
POST /api/products: Add a new product (admin only).
PUT /api/products/:id: Update a product (admin only).
DELETE /api/products/:id: Delete a product (admin only).
Orders:
GET /api/orders: Get all orders for the current user.
GET /api/orders/:id: Get a single order by ID.
POST /api/orders: Place a new order.
PUT /api/orders/:id: Update the status of an order (admin only).
Setup

Clone the repository.
Install dependencies for both frontend and backend using npm install.
Configure the database connection in db/config.js.
Run database migrations and seed data using Knex (npx knex migrate:latest and npx knex seed:run).
Start the backend server using npm start in the backend directory.
Start the frontend development server using npm start in the frontend directory.
Usage

Visit http://localhost:3000 in your browser to access the application.
Register a new account or log in with an existing account.
Browse products, add them to your cart, and proceed to checkout.
Admin users can manage products and view order history.
Future Improvements

Implement user reviews and ratings for products.
Add advanced search and filtering options for products.
Integrate with a payment gateway for real-time payment processing.
Enhance the user interface and user experience.
