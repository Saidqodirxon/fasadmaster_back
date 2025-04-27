const About = require("./About");

let SITE_URL = process.env.SITE_URL;
const addAboutService = async (req) => {
  try {
    const {
      about_uz,
      about_en,
      about_ru,
      history_uz,
      history_en,
      history_ru,
      adventages_uz,
      adventages_en,
      adventages_ru,
    } = req.body;

    const banners = new About({
      about_uz,
      about_en,
      about_ru,
      history_uz,
      history_en,
      history_ru,
      adventages_uz,
      adventages_en,
      adventages_ru,
    });

    await banners.save();
    console.log("About saved successfully:", banners);

    return banners;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add abouts");
  }
};

module.exports = addAboutService;
