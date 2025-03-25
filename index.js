const express = require("express");
const serverless = require("serverless-http");
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome! To see a student's info, use the route /user-info/:id"
    });
});


const users = {
    "1": {
        name: "Diego",
        lastName: "Escalante",
        email: "diegoescga@unisabana.edu.co",
        id: "327506"
    },
    "2": {
        name: "Bruno",
        lastName: "Perez",
        email: "brunopeme@unisabana.edu.co",
        id: "324833"
    }
};

app.get("/user-info/:id", (req, res) => {
    try {
        const user = users[req.params.id];
        if (user) {
            res.status(200).json(user);
        } else {
        res.status(404).json({ error: "User not found with the given ID" });
        }
    } catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = app;
module.exports.handler = serverless(app);

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
});
