from flask import Blueprint, jsonify, request

user_controller = Blueprint('user_controller', __name__)

# Static user data
users = [
    {'id': 1, 'name': 'John Doe', 'email': 'john@example.com'},
    {'id': 2, 'name': 'Jane Doe', 'email': 'jane@example.com'}
]

@user_controller.route('/users', methods=['GET'])
def get_users():
    """
    Handles GET request to fetch all users.

    Returns:
        A JSON response containing a list of users.
    """
    try:
        return jsonify({'users': users})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@user_controller.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """
    Handles GET request to fetch a user by ID.

    Args:
        user_id (int): The ID of the user to fetch.

    Returns:
        A JSON response containing the user data if found, otherwise an error message.
    """
    try:
        user = next((user for user in users if user['id'] == user_id), None)
        if user is None:
            return jsonify({'error': 'User not found'}), 404
        return jsonify({'user': user})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@user_controller.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@user_controller.errorhandler(500)
def internal_server_error(error):
    return jsonify({'error': 'Internal server error'}), 500