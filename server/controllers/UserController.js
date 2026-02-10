// Import required modules
const express = require('express');
const router = express.Router();

// Define static user data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

/**
 * GET /users
 * @description Get all users
 * @route GET:/users
 * @returns {object[]} An array of user objects
 */
router.get('/users', (req, res) => {
  try {
    // Return the static user data
    res.status(200).json(users);
  } catch (error) {
    // Handle any unexpected errors
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;