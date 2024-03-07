// config express server
const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;
app.use(json());

// import des fonctions de requetes
const { fetchMeublesHomePage, fetchMeubleDetails, fetchMeubleAdmin } = require("./supabase");

// endpoints
app.get("/meubles", async (req, res) => {       // req -> parametre de la route ; res -> reponse de la route
    const data = await fetchMeublesHomePage();
    res.send(data);   // equivalnt à un return data
});

app.get("/meubles/:id", async (req, res) => {
    const { id } = req.params;      //on récup le parametre qui correspond à id dans le chemin 
    const data = await fetchMeubleDetails(id);
    res.send(data);
});

app.get("/admin", async (req , res) =>{
    const data = await fetchMeubleAdmin()
    res.send(data)
} )

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});