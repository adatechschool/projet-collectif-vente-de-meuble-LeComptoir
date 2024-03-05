// config express server
const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;
app.use(json());

const { fetchMeubles, fetchMeublesType } = require("./supabase");

// endpoints
app.get("/meubles", async (req, res) => {
    const data = await fetchMeubles();
    res.send(data);
});

app.get("/meubles/:type", async (req, res) => {
    const {type} = req.params;
    const data = await fetchMeublesType(type);
    res.send(data);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});