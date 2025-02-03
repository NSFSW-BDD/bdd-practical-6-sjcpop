const pool = require('../services/db');

var furnitureModel = {
  selectAll(callback) {
    const SQLSTATMENT = `SELECT * FROM furniture;`;
    pool.query(SQLSTATMENT, callback);
  },
    
  selectById: (data, callback) => {
      const SQLSTATMENT = `
      SELECT * FROM furniture
      WHERE fid = ?;
      `;
      const VALUES = [data.fid];
  
      pool.query(SQLSTATMENT, VALUES, callback);
    },
    
    insertFurniture: (data, callback)=>{
      const SQLSTATMENT =`INSERT INTO furniture (name, description, price, quantity, catid) 
      VALUES (?,?,?,?,?);`
      const VALUES = [data.name, data.description, data.price, data.quantity, data.catid];
      pool.query(SQLSTATMENT, VALUES, callback);
    },

    updateFurniture: (data, callback) => {
      const SQLSTATMENT = `UPDATE furniture SET name=?, description=?, price=?, quantity=?, catid=? WHERE fid=?;`;
      const VALUES = [data.name, data.description, data.price, data.quantity, data.catid, data.fid];
      pool.query(SQLSTATMENT, VALUES, callback);
    },

    deleteFurniture: (data, callback) => {
      const SQLSTATMENT = `DELETE FROM furniture WHERE fid = ?;`;
      const VALUES = [data.fid];
      pool.query(SQLSTATMENT, VALUES, callback);
    },

    selectByCategoryId: (data, callback) => {
        const SQLSTATMENT = `
        SELECT furniture.fid, furniture.name, furniture.description, furniture.price, furniture.quantity, furniture.catid, category.name as catName
        FROM furniture
        INNER JOIN category
        on furniture.catid = category.catid
        WHERE furniture.catid = ?;
        `;
        const VALUES = [data.categoryId];
    
        pool.query(SQLSTATMENT, VALUES, callback);
      },
  };
  
  module.exports = furnitureModel;
  