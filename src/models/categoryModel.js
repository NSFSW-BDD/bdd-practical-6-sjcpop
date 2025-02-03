const pool = require('../services/db');

var categoryModel = {
  // Fetch all categories
  selectAll: (callback) => {
    const SQLSTATMENT = `SELECT * FROM category;`;
    pool.query(SQLSTATMENT, callback);
  },

  // Insert a new category
  insertCategory: (data, callback) => {
    const SQLSTATMENT = `
      INSERT INTO category (description, name)
      VALUES (?, ?);
    `;
    const VALUES = [data.description, data.name];
    pool.query(SQLSTATMENT, VALUES, callback);
  },

  // Get a category by ID
  getCategoryById: (id, callback) => {
    const SQLSTATMENT = `SELECT * FROM category WHERE catid = ?;`;
    pool.query(SQLSTATMENT, [id], callback);
  },

  // Update category by ID
  updateCategory: (id, data, callback) => {
    const SQLSTATMENT = `
      UPDATE category
      SET description = ?, name = ?
      WHERE catid = ?;
    `;
    const VALUES = [data.description, data.name, id];
    pool.query(SQLSTATMENT, VALUES, callback);
  },

  // Delete category by ID
  deleteCategory: (id, callback) => {
    const SQLSTATMENT = `DELETE FROM category WHERE catid = ?;`;
    pool.query(SQLSTATMENT, [id], callback);
  },
};

module.exports = categoryModel;