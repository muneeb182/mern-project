const mongoose = require('mongoose')
const {Schema} = mongoose;
// Schema 
const ProductSchema = new Schema({
    title:{
      type : String,
      required: true
    },
    description:{
      type : String,
      required: false
    },
    category:{
      type : String,
      required: false
    },
    price:{
      type : Number,
      required: true
    },
    rating:{
      type : Number,
      required: false,
      min:[0,'Wrong Ratings'], 
      max:5
    },
    images: [{
      type: String,
      required: false
  
    }]
  })
  
  exports.Product = mongoose.model('Product',ProductSchema)