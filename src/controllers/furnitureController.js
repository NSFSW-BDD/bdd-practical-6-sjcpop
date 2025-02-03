const furnitureModel = require('../models/furnitureModel');

var furnitureController = {
  // Read all furniture
  readAllFurniture: (req, res, next) => {
    const callback = (error, results, fields) => {
      if (error) {
        console.error("Error fetching all furniture:", error);
        res.status(500).json(error);
      } else {
        res.status(200).json(results);
      }
    };

    furnitureModel.selectAll(callback);  // Assuming you have a selectAll method in the model
  },

  // Create a new furniture
  createNewFurniture: (req, res, next) => {
    const data = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      catid: req.body.catid,
    };

    const callback = (error, results, fields) => {
      if (error) {
        console.error("Error inserting furniture:", error);
        res.status(500).json(error);
      } else {
        res.status(201).json(results);
      }
    };

    furnitureModel.insertFurniture(data, callback);
  },

  // Read furniture by ID
  readFurnitureById: (req, res, next) => {
    const data = {
      fid: req.params.fid,
    };

    const callback = (error, results, fields) => {
      if (error) {
        console.error("Error fetching furniture by ID:", error);
        res.status(500).json(error);
      } else {
        if (results.length == 0) {
          res.status(404).json({
            message: "Furniture not found",
          });
        } else res.status(200).json(results[0]);
      }
    };

    furnitureModel.selectById(data, callback);
  },

  // Update furniture by ID
  updateFurnitureById: (req, res, next) => {
    const data = {
      fid: req.params.fid,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      catid: req.body.catid,
    };

    const callback = (error, results, fields) => {
      if (error) {
        console.error("Error updating furniture:", error);
        res.status(500).json(error);
      } else {
        if (results.affectedRows == 0) {
          res.status(404).json({
            message: "Furniture not found",
          });
        } else res.status(204).send(); // 204 No Content
      }
    };

    furnitureModel.updateFurniture(data, callback);
  },

  // Delete furniture by ID
  deleteFurnitureById: (req, res, next) => {
    const data = {
      fid: req.params.fid,
    };

    const callback = (error, results, fields) => {
      if (error) {
        console.error("Error deleting furniture:", error);
        res.status(500).json(error);
      } else {
        if (results.affectedRows == 0) {
          res.status(404).json({
            message: "Furniture not found",
          });
        } else res.status(204).send(); // 204 No Content
      }
    };

    furnitureModel.deleteFurniture(data, callback);
  },

  readFurnitureByCategory: (req, res, next) => {
    const data = {
      categoryId: req.params.categoryId,  // Get the category ID from URL parameters
    };
  
    const callback = (error, results, fields) => {
      if (error) {
        console.error("Error retrieving furniture by category:", error);
        res.status(500).json(error);  // Internal server error
      } else {
        if (results.length === 0) {
          res.status(404).json({
            message: "No furniture found for this category",  // 404 if no furniture is found
          });
        } else {
          res.status(200).json(results);  // Return the retrieved furniture data
        }
      }
    };
  
    furnitureModel.selectByCategoryId(data, callback);  // Use the model method to get furniture by category ID
  }
};


module.exports = furnitureController;