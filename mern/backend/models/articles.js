const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    born: {
      type: String,
      required: false,
    },
    died: {
      type: String,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
    known_for: {
      type: String,
      required: false,
    },
    notable_work: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    year: {
      type: String,
      required: false,
    },
    medium: {
      type: String,
      required: false,
    },
    dimensions: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    designed_by: {
      type: String,
      required: false,
    },
    developer: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ArticleModel = mongoose.model("articles", ArticleSchema);
module.exports = ArticleModel;
