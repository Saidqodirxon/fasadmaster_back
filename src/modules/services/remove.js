const { NotFoundError } = require("../../shared/errors");
const Services = require("./Services");

const removeServicesService = async ({ id }) => {
  const existing = await Services.findById(id);

  if (!existing) {
    throw new NotFoundError("Services Not Found.");
  }

  let delProd = await Services.findByIdAndDelete(id);

  return delProd;
};

module.exports = removeServicesService;
