const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema(
  {
    name_uz: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    name_ru: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    name_en: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    description_uz: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    description_ru: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    description_en: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    is_visible: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    view: {
      type: String,
      default: "false",
      enum: ["1", "2"],
    },
    categoryId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "services",
    },
    price: {
      type: mongoose.SchemaTypes.String,
    },
    image: {
      type: mongoose.SchemaTypes.Array,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const services = mongoose.model("services", ServicesSchema);

module.exports = services;
