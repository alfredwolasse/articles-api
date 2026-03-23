const { db } = require('../config/database');

const Article = {
  getAll() {
    const stmt = db.prepare('SELECT * FROM articles ORDER BY created_at DESC');
    return stmt.all();
  },

  getById(id) {
    const stmt = db.prepare('SELECT * FROM articles WHERE id = ?');
    return stmt.get(id);
  },

  create(title, content, author) {
    const stmt = db.prepare('INSERT INTO articles (title, content, author) VALUES (?, ?, ?)');
    const result = stmt.run(title, content, author);
    return { id: result.lastInsertRowid, title, content, author };
  },

  update(id, title, content, author) {
    const stmt = db.prepare('UPDATE articles SET title = ?, content = ?, author = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
    const result = stmt.run(title, content, author, id);
    return result.changes > 0;
  },

  delete(id) {
    const stmt = db.prepare('DELETE FROM articles WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }
};

module.exports = Article;
