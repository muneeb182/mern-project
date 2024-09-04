const fs = require("fs");
const mongoose = require('mongoose');

// Read the html file
// const index = fs.readFileSync("index.html", "utf-8");
// Read the json file and convert it into strings
const model = require("../Models/ProductModel.js");
//get the product
const Product = model.Product;

exports.create = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((savedProduct) => {
      res.status(201).json(savedProduct);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
// Get Products
exports.getAll = async(req, res) => {
  const products = await Product.find();
  res.json(products);
};
// Read the single Products
exports.getSingle = async(req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
  console.log(product);
};

exports.replace = async(req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({_id:id}, req.body , {new:true})
    res.status(201).json(doc);

  } catch (error) {
    console.log(error);
    res.status(201).json(error);

    
  }
};

exports.update = async(req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({_id:id}, req.body , {new:true})
    res.status(201).json(doc);

  } catch (error) {
    console.log(error);
    res.status(201).json(error);

    
  }
};

exports.delete = async(req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json({"message": 'success'});

  } catch (error) {
    console.log(error);
    res.status(201).json(error);

    
  }
};
