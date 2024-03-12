// config express server
const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:5173"],
    optionSuccesStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());

// import des fonctions de requetes
const { fetchMeublesHomePage, fetchMeubleAdmin } = require("./supabase");
const { signInUser } = require("./log");
// endpoints

//route en post
app.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const data = await signInUser(email, password);
    if (!data) {
        res.status(404).json({ error: "User not found" });
    } else {
        res.send(data);
    }
});

//route en get
app.get("/meubles", async (req, res) => {
    // req -> parametre de la route ; res -> reponse de la route
    const data = await fetchMeublesHomePage();
    res.send(data); // equivalnt à un return data
});

app.get("/admin", async (req, res) => {
    const data = await fetchMeubleAdmin();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
