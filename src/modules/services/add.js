const Services = require("./Services");

let SITE_URL = process.env.SITE_URL;
const addServicesService = async (req) => {
  try {
    const {
      name_uz,
      name_ru,
      name_en,
      description_uz,
      description_ru,
      description_en,
      categoryId,
      is_visible,
      view,
      price,
      image,
    } = req.body;

    const services = new Services({
      name_uz,
      name_ru,
      name_en,
      description_uz,
      description_ru,
      description_en,
      categoryId,
      is_visible,
      view,
      price,
      image,
    });

    await services.save();
    console.log("Services saved successfully:", services); // Tekshirish uchun

    return services;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add services");
  }
};

module.exports = addServicesService;
