const express = require("express");
const router = express.Router();
const ArticleModel = require("../models/articles");

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await ArticleModel.find();
    res.json({
      count: articles.length,
      data: articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Get one article by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findById(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found!" });
    }
    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Create a new article
router.post("/", async (req, res) => {
  const {
    category,
    type,
    name,
    born,
    died,
    nationality,
    known_for,
    notable_work,
    about,
    year,
    medium,
    dimensions,
    location,
    designed_by,
    developer,
  } = req.body;
  const article = new ArticleModel({
    category,
    type,
    name,
    born,
    died,
    nationality,
    known_for,
    notable_work,
    about,
    year,
    medium,
    dimensions,
    location,
    designed_by,
    developer,
  });
  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

// Update an article
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!article) {
      return res.status(404).json({ message: "Article not found!" });
    }
    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Delete an article
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findByIdAndDelete(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found!" });
    }
    res.status(200).json({ message: "Article deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
