const { NotFoundError } = require("../../shared/errors");
const Portfolios = require("./Portfolios");

const showPortfoliosService = async ({ id }) => {
  try {
    const banners = await Portfolios.findById(id);

    if (!banners) {
      throw new NotFoundError("Portfolios not found.");
    }

    return banners;
  } catch (error) {
    throw error;
  }
};

module.exports = showPortfoliosService;
