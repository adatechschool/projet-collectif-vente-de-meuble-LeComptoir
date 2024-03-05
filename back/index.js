// config express server
const express = require("express");
const { json } = require("express");
const app = express();
const port = 3000;
app.use(json());

// Config Supabase
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://aeyokqlrkmsdphrayffh.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleW9rcWxya21zZHBocmF5ZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjA1NjIsImV4cCI6MjAyNTEzNjU2Mn0.81oa_X285MaatrDWu8rwUvf1-7fGRK_Y3RGZHke7Xuk";
const supabase = createClient(supabaseUrl, supabaseKey);

// config cloudinary
const cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'sample', 
    api_key: '285333835317682', 
    api_secret: 'a676b67565c6767a6767d6767f676fe1'
});


const fetchMeubles = async () => {
    let { data: meubles, error } = await supabase.from("meubles").select("*");
    return meubles;
};

// endpoints
app.get("/", async (req, res) => {
    const data = await fetchMeubles();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
