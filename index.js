
// Rest API and CRUD operation

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const path = require('path')
const server = express();

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes')
const quoteRouter = require('./routes/quoteRoute')

// const path = require('path');
// const { type } = require('os');
console.log(process.env.DB_PASSWORD);

// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://muneeb:JcSKyIbW5foQAVx8@cluster0.lboxo.mongodb.net/');
  // await mongoose.connect('mongodb://localhost:27017/ecommerce');

  console.log('Database connected successfully');
  
}



// body parser
server.use(cors())
server.use(express.json());
server.use(morgan('default')) 
server.use(express.static(path.resolve(__dirname,'build')));
server.use('/products',productRouter.router)  
server.use('/users',userRouter.router);
server.use('/quotes',quoteRouter.router);
server.use('*',(req ,res ) =>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


server.listen(process.env.PORT, () =>{
  console.log('server started sucessfully');
  
})



//create server using Express js 

// const fs = require('fs');
// const morgan = require('morgan');
// // Read the html file
// const index = fs.readFileSync("index.html", "utf-8");
// // Read the json file and convert it into strings
// const datas = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// //get the product 
// const product = datas.products;

// const express = require('express');
// // const path = require('path');
// // const { type } = require('os');
// const server = express();

// // body Parser
// server.use(express.json());
// // server.use(express.urlencoded())


// // Third Party Middlewares
// server.use(morgan('default')) 

// server.use(express.static('public'));


// // Middleware - Application Level

// // server.use((req,res,next) =>{
// //   console.log(req.method , req.ip , req.hostname);
// //   next(); 
// // })
// // Router - Level Middleware
// const auth = (req,res,next) =>{
//   // console.log(req.query);
//   // if(req.body.password==='1234'){
//   //   next()
//   // }
//   // else{
//   //   res.sendStatus(401);
//   // }
//   next()
// }


// // Api Endpoints , Routes
// server.get('/product/:id',auth,(req,res)=>{
//   console.log(req.params);
  
//   res.json({type: 'GET'});
// })
// server.post('/',auth,(req,res)=>{
//   res.json({type: 'POST'});
// })
// server.put('/',(req,res)=>{
//   res.json({type: 'Put'});
// })
// server.delete('/',(req,res)=>{
//   res.json({type: 'Delete'});
// })
// server.patch('/',(req,res)=>{
//   res.json({type: 'Patch'});
// })



// server.get('/demo',(req,res) =>{
//   // const filePath = path.join(__dirname,'data.json')
//   // res.send('Hello')
//   // res.sendFile(filePath)
//   // res.json(product)
//   // res.sendStatus(404);
// })

// server.listen(8080, () =>{
//   console.log('server started sucessfully');
  
// })






// // Web Server using Node js.

// const http = require("http");
// const fs = require("fs");
// // define the port
// const PORT = process.argv[2] || 3000;
// // Read the html file
// const index = fs.readFileSync("index.html", "utf-8");
// // Read the json file and convert it into strings
// const datas = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// //get the product 
// const product = datas.products;
// // create server using nodejs
// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const prd = product.find((p) => p.id === +id);  
//     console.log(prd);
//     res.setHeader("Content-Type", "text/html");
//     const pro = index.replace("Server Backend", prd.title);
//     res.end(pro);
//     return;
//   }

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(datas));
//       break;
//     default:
//       res.writeHead(404, "Page Not Found");
//       res.end();
//   }

//   console.log("Server Started");
// });

// server.listen(PORT);

// Node Modules

// const { log } = require('console');
// const express = require('express');

// log('Hello People   ')

// const server = express();
// server.listen(8080)
// File System
// const lib = require('./lib.js');
// const fs = require('fs')
// // import { diff,sum } from "./lib.js";

// // const textFile = fs.readFileSync('demo.txt','utf-8');
// const textFile = fs.readFile('demo.txt','utf-8',(err, text) =>{
//     console.log(text);
// });

// const ts = performance.now();
// console.log(ts)

// console.log(textFile);
// console.log(lib.sum(4,6) , lib.diff(22,10));
// console.log('Hello World');
