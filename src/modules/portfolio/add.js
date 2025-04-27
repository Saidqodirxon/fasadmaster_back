const Portfolios = require("./Portfolios");

let SITE_URL = process.env.SITE_URL;
const addPortfoliosService = async (req) => {
  try {
    const { is_visible, image } = req.body;

    const banners = new Portfolios({
      is_visible,
      image,
    });

    await banners.save();
    console.log("Portfolios saved successfully:", banners);

    return banners;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add portfolios");
  }
};

module.exports = addPortfoliosService;
