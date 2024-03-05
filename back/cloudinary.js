// config cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: "divkdomgy",
    api_key: "285333835317682",
    api_secret: "4vO4o7NkLZT04ZVbJh2oK4CtLDM",
});


const uploadImage = async (imagePath) => {

    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.public_id;
    } catch (error) {
        console.error(error);
    }
};

module.exports = { uploadImage }