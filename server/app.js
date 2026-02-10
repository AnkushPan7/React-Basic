// server/app.js

// Import required modules
const express = require('express');
const app = express();
const userController = require('./controllers/UserController');

// Enable JSON parsing for incoming requests
app.use(express.json());

// Define a static data source for users
const staticUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
];

// Define the UserController
class UserController {
  // Endpoint to get all users
  getUsers(req, res) {
    try {
      // Return the static user data
      res.json(staticUsers);
    } catch (error) {
      // Handle any errors that occur
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

// Create an instance of the UserController
const userControllerInstance = new UserController();

// Define the API endpoint for getting users
app.get('/api/users', userControllerInstance.getUsers);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});