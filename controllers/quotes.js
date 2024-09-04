const fs = require('fs');
// Read the html file
// const index = fs.readFileSync("index.html", "utf-8");
// Read the json file and convert it into strings
const datas = JSON.parse(fs.readFileSync("data.json", "utf-8"));
//get the product 
const quotes= datas.quotes;

exports.create = (req,res)=>{
    quotes.push(req.body)
    res.status(201).json({message: 'Success'});
  }

  exports.getAll = (req,res)=>{
    res.json(quotes);
  }

  exports.getSingle = (req,res)=>{
    const id = +req.params.id;
    const products = quotes.find(p => p.id === id);
    res.json(products);
    console.log(products);
    
   }

   exports.replace = (req,res)=>{
    const id = +req.params.id;
    const productIndex = quotes.findIndex(p => p.id === id);
    quotes.splice(productIndex,1,{...req.body, id:id});
    res.status(201).json();
    
   }

   exports.update = (req,res)=>{
    const id = +req.params.id;
    const productIndex = quotes.findIndex(p => p.id === id);
    const singleProducts = quotes[productIndex]
    quotes.splice(productIndex,1,{...singleProducts,...req.body});
    res.status(201).json();
    
   }

   exports.delete = (req,res)=>{
    const id = +req.params.id;
    const productIndex = quotes.findIndex(p => p.id === id);
    const singleProducts = quotes[productIndex]
    quotes.splice(productIndex,1);
    res.status(201).json(singleProducts);
    
   }
