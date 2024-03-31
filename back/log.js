require("dotenv").config();

// URL et clé d'API Supabase
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://aeyokqlrkmsdphrayffh.supabase.co";
const supabaseKey =  process.env.API_KEY;

// Création du client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction pour vérifier les informations d'identification de l'utilisateur
const signInUser = async (email, password) => {
  try {
    // Récupérer les informations de l'utilisateur à partir de la base de données
    const { data: users, error } = await supabase
      .from("admin")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .limit(1);

    // Vérifier s'il y a une erreur
    if (error) {
      throw error;
    }

    // Vérifier si l'utilisateur existe
    if (users.length === 0) {
      console.log("Utilisateur non trouvé");
      return;
    }

    // Si l'utilisateur est trouvé, renvoyer l'utilisateur connecté
    console.log("Utilisateur connecté");
    return { users: users[0] };
  } catch (error) {
    console.error("Erreur lors de la connexion:", error.message);
    return { error: "Erreur interne du serveur" };
  }
};

module.exports = {signInUser}