const Article = require('../models/Article');

const articlesController = {
  async getAll(req, res) {
    try {
      const articles = await Article.getAll();
      res.json({ success: true, count: articles.length, data: articles });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  async getById(req, res) {
    try {
      const article = await Article.getById(req.params.id);
      if (!article) {
        return res.status(404).json({ success: false, message: 'Article not found' });
      }
      res.json({ success: true, data: article });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  async create(req, res) {
    try {
      const { title, content, author } = req.body;
      if (!title || !content || !author) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide title, content, and author' 
        });
      }
      const article = await Article.create(title, content, author);
      res.status(201).json({ success: true, data: article });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { title, content, author } = req.body;
      if (!title || !content || !author) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide title, content, and author' 
        });
      }
      const updated = await Article.update(req.params.id, title, content, author);
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Article not found' });
      }
      const article = await Article.getById(req.params.id);
      res.json({ success: true, data: article });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Article.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'Article not found' });
      }
      res.json({ success: true, message: 'Article deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

module.exports = articlesController;
