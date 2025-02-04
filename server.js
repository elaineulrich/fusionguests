const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.json());

let users = [];

app.post("/api/register", (req, res) => {
    const { name, email, phone, event } = req.body;

    // Simulate user ID generation (e.g., in a real app, this would be a database ID)
    const userId = users.length + 1;

    const newUser = {
        userId,
        name,
        email,
        phone,
        event,
    };

    users.push(newUser);

    res.status(200).json(newUser);  // Send the new user data with a unique ID
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
