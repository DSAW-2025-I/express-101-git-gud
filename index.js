const express = require("express");
const serverless = require("serverless-http");
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "If you want to see the information of a student add /user-info/id to the url" });
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
  const user = users[req.params.id];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

module.exports = app;
module.exports.handler = serverless(app);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", port);
});