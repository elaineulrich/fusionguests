from PIL import Image, ImageDraw, ImageFont

def generate_business_card(user_id, user_name, user_event, qr_image_path):
    # Open a blank image
    card = Image.new('RGB', (300, 150), color='white')
    draw = ImageDraw.Draw(card)

    # Add user info to the card
    font = ImageFont.load_default()
    draw.text((10, 10), f"Name: {user_name}", font=font, fill='black')
    draw.text((10, 40), f"Event: {user_event}", font=font, fill='black')

    # Open the QR code image and paste it onto the card
    qr_code = Image.open(qr_image_path)
    card.paste(qr_code, (200, 50))

    # Save the card image
    card.save(f"business_card_{user_id}.png")
    return f"business_card_{user_id}.png"
