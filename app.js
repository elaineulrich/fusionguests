import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import BusinessCard from "./components/BusinessCard";
import QRScanner from "./components/QRScanner";

function App() {
    const [user, setUser] = useState(null); // Stores registered user data
    const [isCheckInMode, setIsCheckInMode] = useState(false); // Controls whether QRScanner is shown

    // Handles user registration
    const handleRegistered = (userData) => {
        setUser(userData);
    };

    return (
        <div className="App">
            <h1>Event Registration</h1>
            
            {/* If the user is not registered, show the registration form */}
            {!user ? (
                <RegistrationForm onRegistered={handleRegistered} />
            ) : (
                <div>
                    <h2>Registration Successful!</h2>
                    <BusinessCard user={user} /> {/* Display the user's business card */}

                    {/* Button to start the check-in process */}
                    <button onClick={() => setIsCheckInMode(true)}>
                        Start Check-In
                    </button>
                </div>
            )}

            {/* Show the QRScanner if isCheckInMode is true */}
            {isCheckInMode && <QRScanner />}
        </div>
    );
}

export default App;
