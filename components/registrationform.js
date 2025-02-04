import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = ({ onRegistered }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [event, setEvent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send registration data to backend
            const response = await axios.post("/api/register", { name, email, phone, event });
            onRegistered(response.data);  // Pass the data back to parent
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Event:</label>
                <select
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    required
                >
                    <option value="event1">Event 1</option>
                    <option value="event2">Event 2</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
