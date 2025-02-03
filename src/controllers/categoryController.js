const model = require("../models/categoryModel");

const categoryController = {
    // Get all categories
    selectAll: (req, res, next) => {
      const callback = (error, results, fields) => {
        if (error) {
          console.error("Error readAllCategory:", error);
          res.status(500).json(error);
        } else res.status(200).json(results);
      };
  
      model.selectAll(callback); 
    },
  
    // Get category by ID
    readCategoryById: (req, res, next) => {
      const data = {
        catid: req.params.catid,
      };
  
      const callback = (error, results, fields) => {
        if (error) {
          console.error("Error readCategoryById:", error);
          res.status(500).json(error);
        } else {
          if (results.length === 0) {
            res.status(404).json({
              message: "Category not found",
            });
          } else res.status(200).json(results[0]);
        }
      };
  
      model.getCategoryById(data, callback); 
    },
  
    // Create a new category
    createNewCategory: (req, res, next) => {
      const data = {
        name: req.body.name,
        description: req.body.description,
      };
  
      const callback = (error, results, fields) => {
        if (error) {
          console.error("Error createNewCategory:", error);
          res.status(500).json(error);
        } else {
          res.status(201).json(results);
        }
      };
  
      model.insertCategory(data, callback); 
    },
  
    // Update category by ID
    updateCategoryById: (req, res, next) => {
      const data = {
        catid: req.params.catid,
        name: req.body.name,
        description: req.body.description,
      };
  
      const callback = (error, results, fields) => {
        if (error) {
          console.error("Error updateCategoryById:", error);
          res.status(500).json(error);
        } else {
          if (results.affectedRows === 0) {
            res.status(404).json({
              message: "Category not found",
            });
          } else res.status(204).send(); // 204 No Content
        }
      };
  
      model.updateCategory(data, callback); 
    },
  
    // Delete category by ID
    deleteCategoryById: (req, res, next) => {
      const data = {
        catid: req.params.catid,
      };
  
      const callback = (error, results, fields) => {
        if (error) {
          console.error("Error deleteCategoryById:", error);
          res.status(500).json(error);
        } else {
          if (results.affectedRows === 0) {
            res.status(404).json({
              message: "Category not found",
            });
          } else res.status(204).send(); // 204 No Content
        }
      };
  
      model.deleteCategory(data, callback); 
    },
  };
  
  module.exports = categoryController;