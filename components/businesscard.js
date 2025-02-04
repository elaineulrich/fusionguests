import React from "react";
import QRCode from "qrcode.react";

const BusinessCard = ({ user }) => {
    const { name, email, phone, event, userId } = user;
    const qrCodeUrl = `https://yourwebsite.com/check-in/${userId}`;

    return (
        <div className="business-card">
            <div className="info">
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Event: {event}</p>
            </div>
            <div className="qr-code">
                <QRCode value={qrCodeUrl} size={100} />
            </div>
        </div>
    );
};

export default BusinessCard;
