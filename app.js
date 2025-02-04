import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import BusinessCard from "./components/BusinessCard";

function App() {
    const [user, setUser] = useState(null);

    const handleRegistered = (userData) => {
        setUser(userData);  // Set the user data after registration
    };

    return (
        <div className="App">
            <h1>Event Registration</h1>
            {!user ? (
                <RegistrationForm onRegistered={handleRegistered} />
            ) : (
                <div>
                    <h2>Registration Successful!</h2>
                    <BusinessCard user={user} />
                </div>
            )}
        </div>
    );
}

export default App;


import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import BusinessCard from "./components/BusinessCard";
import QRScanner from "./components/QRScanner";

function App() {
    const [user, setUser] = useState(null);
    const [isCheckInMode, setIsCheckInMode] = useState(false);

    const handleRegistered = (userData) => {
        setUser(userData);
    };

    return (
        <div className="App">
            <h1>Event Registration</h1>
            {!user ? (
                <RegistrationForm onRegistered={handleRegistered} />
            ) : (
                <div>
                    <h2>Registration Successful!</h2>
                    <BusinessCard user={user} />
                    <button onClick={() => setIsCheckInMode(true)}>Start Check-In</button>
                </div>
            )}

            {isCheckInMode && <QRScanner />}
        </div>
    );
}

export default App;
