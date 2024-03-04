const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;

// Configuration Supabase

const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://aeyokqlrkmsdphrayffh.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleW9rcWxya21zZHBocmF5ZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjA1NjIsImV4cCI6MjAyNTEzNjU2Mn0.81oa_X285MaatrDWu8rwUvf1-7fGRK_Y3RGZHke7Xuk";
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(json());

app.get("/meubles", async (req, res) => {
    const { data : meubles , error } = await supabase.from("meubles").select("*");
    console.log('erreur', error)
    console.log(meubles)
    res.status(200).json(meubles);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
