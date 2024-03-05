// Config Supabase
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://aeyokqlrkmsdphrayffh.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleW9rcWxya21zZHBocmF5ZmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjA1NjIsImV4cCI6MjAyNTEzNjU2Mn0.81oa_X285MaatrDWu8rwUvf1-7fGRK_Y3RGZHke7Xuk";
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchMeubles = async () => {
    let { data: meubles, error } = await supabase.from("meubles").select("*");
    return meubles;
};

const fetchMeublesType = async (type) => {
    let { data: meubles, error } = await supabase.from("meubles").select().eq("type", `${type}`)
    return meubles;
};

module.exports = { fetchMeubles, fetchMeublesType };
