const express = require("express");
const app = express();
app.listen(3000);

const users = {
    "1": {"name": "Diego", "lastName": "Escalante", "email": "diegoescga@unisabana.edu.co", "id": "327506"}
    "2": {"name": "Bruno", "lastName": "Perez", "email": "brunopeme@unisabana.edu.co", "id": "324833"}
}

app.get("/user-info/:id", (req, res) =>{
    const user = users[req.params.id];
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({error: "Usuario no encontrado" });
    }
});
