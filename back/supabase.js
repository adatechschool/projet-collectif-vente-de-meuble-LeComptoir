// config supabase
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://aeyokqlrkmsdphrayffh.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleW9rcWxya21zZHBocmF5ZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjA1NjIsImV4cCI6MjAyNTEzNjU2Mn0.81oa_X285MaatrDWu8rwUvf1-7fGRK_Y3RGZHke7Xuk";
const supabase = createClient(supabaseUrl, supabaseKey);

// requests functions
const fetchMeublesHomePage = async () => {
    try {
        let { data: meubles, error } = await supabase //api de supabase pour fetch les données d'une table
            .from("meubles")
            .select("id, nom, image, type, prix")
            .eq("statut", "Disponible");
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
            .select(
                `
                id,
                nom,
                image,
                type,
                prix,
                description
            `
            )
            .eq("statut", "Disponible")
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

const fetchMeubleAdmin = async () => {
    try {
        let { data: meubles, error } = await supabase 
            .from("meubles")
            .select("id, nom, statut, prix");
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

module.exports = { fetchMeublesHomePage, fetchMeubleDetails, fetchMeubleAdmin };
