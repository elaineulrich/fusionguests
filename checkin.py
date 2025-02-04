@app.route('/check-in/<user_id>', methods=['GET'])
def check_in(user_id):
    user = get_user_from_db(user_id)  # Fetch user by ID
    if user and not user['checked_in']:
        mark_user_checked_in(user_id)
        return "Check-in successful!"
    return "User already checked in or not registered."
