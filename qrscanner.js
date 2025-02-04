import React, { useState } from "react";
import QRReader from "react-qr-reader";

const QRScanner = () => {
    const [scanResult, setScanResult] = useState(null);

    const handleScan = (data) => {
        if (data) {
            setScanResult(data);  // Process the scanned QR code (e.g., extract the URL)
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <div>
            <h2>Scan QR Code</h2>
            <QRReader
                delay={300}
                style={{ width: "100%" }}
                onError={handleError}
                onScan={handleScan}
            />
            {scanResult && <p>Scanned Result: {scanResult}</p>}
        </div>
    );
};

export default QRScanner;
