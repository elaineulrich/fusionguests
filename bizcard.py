import qrcode

def generate_qr_code(user_id):
    # Create a unique URL for the user's registration
    url = f"https://yourwebsite.com/check-in/{user_id}"
    
    # Generate QR code
    qr = qrcode.make(url)
    qr.save(f"user_{user_id}_qrcode.png")
    return f"user_{user_id}_qrcode.png"
