const { NotFoundError } = require("../../shared/errors");
const Portfolios = require("./Portfolios");

const removePortfoliosService = async ({ id }) => {
  const existing = await Portfolios.findById(id);

  if (!existing) {
    throw new NotFoundError("Portfolios Not Found.");
  }

  let delProd = await Portfolios.findByIdAndDelete(id);

  return delProd;
};

module.exports = removePortfoliosService;
