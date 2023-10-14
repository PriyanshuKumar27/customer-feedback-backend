# Customer Feedback Application - Backend

This is the backend part of a Customer Feedback Application that allows customers to submit feedback using a form, and administrators can view all the feedback submitted by customers. It's built using Node.js, Express, MySQL, and Sequelize ORM for database connectivity.

## Features

- Customer feedback submission through a user-friendly form.
- Admin panel for viewing and managing customer feedback.
- Secure authentication for admin access.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed on your system:

- Node.js: (https://nodejs.org/)
- MySQL: (https://www.mysql.com/)
  - For easy installation of MySQL server and client, start by installing MySQL Workbench which includes all the packages needed to setup the whole MySQL client and server in your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ritwik789/customer-feedback-backend.git

2. Change to the project directory:

   ```bash
   cd customer-feedback-backend

3. Install the dependencies:

   ```bash
   npm install

4. Configure the database connection:

   Open config/config.json and update the database configuration with your MySQL database credentials.
   
   Example:
   ```bash
   {
      "development": {
        "username": "<YOUR_USERNAME>",
        "password": "<YOUR_PASSWORD>",
        "database": "<YOUR_DATABASE_NAME>",
        "host": "localhost",
        "dialect": "mysql"
      }
   }

6. Start the application:

   ```bash
   npm start

The backend server should now be running on http://localhost:3000.

### API Endpoints

- **POST /api/user/signup** - Handles the registration of admin.
- **POST /api/user/login** - Admin login to access admin page and view all feedbacks.
- **POST /api/feedback/create** - Create a new customer feedback entry.
- **GET  /api/feedback/** - Get a list of all customer feedback entries.

### Admin Access

- To access the admin panel, you'll need to create an admin account. You can manually insert an admin record in the database or use API endpoints to create an admin user.
- Once an admin account is created, you can log in through the admin panel.
