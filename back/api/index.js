// config express server
const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const corsOptions = {
    origin: ["https://le-comptoir.vercel.app/"],
    optionSuccesStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());

// import des fonctions de requetes
const { fetchMeublesHomePage, fetchMeubleAdmin, changeState, deleteMeuble } = require("./supabase");
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

app.post('/changeState/:id', async (req, res) => {
    const { state } = req.body;
    const { id } = req.params;

    try {
        const result = await changeState(state, id);

        if (result.error) {
            res.status(400).json({ success: false, error: result.error });
        } else {
            res.json({ success: true, newStatus: state });
        }
    } catch (error) {
        console.error('Erreur lors du changement d\'état du produit :', error);
        res.status(500).json({ success: false, error: 'Erreur interne du serveur' });
    }
});

app.post('/deleteProd/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteMeuble(id);

        if (result.error) {
            res.status(400).json({ success: false, error: result.error });
        } else {
            res.json({ success: true });
        }
    } catch (error) {
        console.error('Erreur lors du changement d\'état du produit :', error);
        res.status(500).json({ success: false, error: 'Erreur interne du serveur' });
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


