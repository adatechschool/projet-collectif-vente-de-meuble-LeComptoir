// functionsSupa.js
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://aeyokqlrkmsdphrayffh.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleW9rcWxya21zZHBocmF5ZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjA1NjIsImV4cCI6MjAyNTEzNjU2Mn0.81oa_X285MaatrDWu8rwUvf1-7fGRK_Y3RGZHke7Xuk";
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchMeublesHomePage = async () => {
    try {
        let { data: meubles, error } = await supabase
            .from("meubles")
            .select("id, Nom, Image, Categorie, Prix")
            .eq("Statut", "Disponible")
        if (error) {
            throw error;
        }   
        return meubles;
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des meubles:",
            error.message
        );
        throw error;
    }
};

const fetchMeubleDetails = async (id) => {
    try {
        let { data: meubles, error } = await supabase
            .from("meubles")
            .select(`
                id,
                Nom,
                Image,
                Categorie,
                Prix,
                Description
            `)
            .eq("Statut", "Disponible")
            .eq("id", `${id}`);
        if (error) {
            throw error;
        }
        return meubles;
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des meubles de la catégorie:",
            error.message
        );
        throw error;
    }
};

const addImgLink = async (id, path) => {
    const { error } = await supabase
        .from("meubles")
        .update({ image: path })
        .eq("id", id);
};

module.exports = { fetchMeublesHomePage, fetchMeubleDetails, addImgLink };
