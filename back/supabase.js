// functionsSupa.js

const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://aeyokqlrkmsdphrayffh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleW9rcWxya21zZHBocmF5ZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjA1NjIsImV4cCI6MjAyNTEzNjU2Mn0.81oa_X285MaatrDWu8rwUvf1-7fGRK_Y3RGZHke7Xuk";
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchMeubles = async () => {
    try {
        let { data: meubles, error } = await supabase.from("meubles").select("*");
        if (error) {
            throw error;
        }
        return meubles;
    } catch (error) {
        console.error("Erreur lors de la récupération des meubles:", error.message);
        throw error;
    }
};

const fetchMeublesType = async (Couleur) => {
    try {
        let { data: meubles, error } = await supabase.from("meubles").select().eq("Couleur", `${Couleur}`);
        if (error) {
            throw error;
        }
        return meubles;
    } catch (error) {
        console.error("Erreur lors de la récupération des meubles de la catégorie:", Couleur, error.message);
        throw error;
    }
};

const addImgLink = async (id, link) =>{
    const { error } = await supabase
        .from("meubles")
        .update({image : link})
        .eq("id", id);
}

module.exports = { fetchMeubles, fetchMeublesType, addImgLink };
