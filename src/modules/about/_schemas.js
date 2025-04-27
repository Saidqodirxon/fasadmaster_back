const Joi = require("joi");

exports.addAboutSchema = {
  body: Joi.object({
    about_uz: Joi.string(),
    about_en: Joi.string(),
    about_ru: Joi.string(),
    history_uz: Joi.string(),
    history_en: Joi.string(),
    history_ru: Joi.string(),
    adventages_uz: Joi.string(),
    adventages_en: Joi.string(),
    adventages_ru: Joi.string(),
  }),
};

exports.patchAboutSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    about_uz: Joi.string(),
    about_en: Joi.string(),
    about_ru: Joi.string(),
    history_uz: Joi.string(),
    history_en: Joi.string(),
    history_ru: Joi.string(),
    adventages_uz: Joi.string(),
    adventages_en: Joi.string(),
    adventages_ru: Joi.string(),
  }),
};

exports.allAboutSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: Joi.object({
      by: Joi.string().valid("_id"),
      order: Joi.string().valid("asc", "desc"),
    }),
    page: Joi.object({
      offset: Joi.number().integer().min(0).default(0),
      limit: Joi.number().integer().min(1).default(3),
    }),
  }),
};
