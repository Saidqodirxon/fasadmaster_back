const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    about_uz: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    about_en: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    about_ru: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    history_uz: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    history_en: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    history_ru: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    adventages_uz: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    adventages_en: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    adventages_ru: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const About = mongoose.model("About", AboutSchema);

module.exports = About;
