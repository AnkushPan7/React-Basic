# server/routes.py

"""
This module defines the routes for the API endpoints.
"""

from flask import Flask, jsonify, request
from server.controllers.UserController import UserController

app = Flask(__name__)
user_controller = UserController()

# Define the route for the 'Get Users' endpoint
@app.route('/api/users', methods=['GET'])
def get_users():
    """
    Fetches static user data.

    Returns:
        A JSON response containing the user data.
    """
    try:
        users = user_controller.get_users()
        return jsonify(users)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Define a custom error handler for 404 errors
@app.errorhandler(404)
def not_found(e):
    """
    Handles 404 errors.

    Returns:
        A JSON response with a 404 error message.
    """
    return jsonify({"error": "Endpoint not found"}), 404

# Define a custom error handler for 500 errors
@app.errorhandler(500)
def internal_server_error(e):
    """
    Handles 500 errors.

    Returns:
        A JSON response with a 500 error message.
    """
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(debug=True)