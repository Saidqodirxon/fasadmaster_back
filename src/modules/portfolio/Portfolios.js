const mongoose = require("mongoose");

const PortfoliosSchema = new mongoose.Schema(
  {
    is_visible: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
      default: false,
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

const Portfolios = mongoose.model("Portfolios", PortfoliosSchema);

module.exports = Portfolios;
