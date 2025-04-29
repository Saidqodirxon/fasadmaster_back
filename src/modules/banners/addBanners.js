const Banners = require("./Banners");

let SITE_URL = process.env.SITE_URL;
const addBannersService = async (req) => {
  try {
    const { name_uz, name_ru, name_en, image } = req.body;

    const banners = new Banners({
      name_uz,
      name_ru,
      name_en,
      image,
    });

    await banners.save();
    console.log("Banners saved successfully:", banners);

    return banners;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add banners");
  }
};

module.exports = addBannersService;
