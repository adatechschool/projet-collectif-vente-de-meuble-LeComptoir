// config express server
const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;
app.use(json());

const { fetchMeublesHomePage, fetchMeubleDetails } = require("./supabase");

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

async function afficherDonnees() {
    try {
        // Récupérer tous les meubles
        const tousLesMeubles = await fetchMeublesHomePage();
        console.log("Tous les meubles:");
        console.log(tousLesMeubles);

        // Récupérer les meubles d'une catégorie spécifique (par exemple, "chaise")
        const meublesNoir = await fetchMeubleDetails(1);
        console.log("Meubles noir:");
        console.log(meublesNoir);
    } catch (error) {
        console.error("Erreur:", error.message);
    }
}

afficherDonnees();