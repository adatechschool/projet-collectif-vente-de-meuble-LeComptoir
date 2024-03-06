// // config cloudinary
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//     cloud_name: "divkdomgy",
//     api_key: "285333835317682",
//     api_secret: "4vO4o7NkLZT04ZVbJh2oK4CtLDM",
// });

// const uploadImage = async (imagePath) => {
//     const options = {
//         use_filename: true,
//         unique_filename: false,
//         overwrite: true,
//     };

//     try {
//         // Upload the image
//         const result = await cloudinary.uploader.upload(imagePath, options);
//         console.log(result);
//         return {
//             id: result.public_id,
//             url: result.secure_url,
//         };
//     } catch (error) {
//         console.error(error);
//     }
// };

// module.exports = { uploadImage };

function stockerImageLocalement(imageBase64) {
    localStorage.setItem("image", imageBase64);
}

function recupererImageLocalement() {
    return localStorage.getItem("image");
}



// Exemple d'utilisation : convertir une image en base64 (représentation en chaîne de caractères)
const imageBase64 = "data:image/png;base64,iVBORw..."; // Remplacez ceci par la représentation en base64 de votre image

stockerImageLocalement(imageBase64);

const imageRecuperee = recupererImageLocalement();
console.log(imageRecuperee);
